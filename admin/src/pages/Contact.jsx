import React, { useEffect, useState } from "react";
import axios from "axios";


const backendUrl = import.meta.env.VITE_BACKEND_URL; // Ensure your .env contains the backend URL

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/contact/list");
      if (response.data.success) {
        setContacts(response.data.contacts);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Delete contact message
  const deleteContact = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?"))
      return;

    try {
      const response = await axios.delete(
        `${backendUrl}/api/contact/delete/${id}`
      );
      if (response.data.success) {
        setContacts(contacts.filter((contact) => contact._id !== id));
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div className="p-5 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Messages</h2>
      {contacts.length === 0 ? (
        <p>No contact messages found.</p>
      ) : (
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Message</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index} className="border">
                  <td className="border p-2">{contact.name}</td>
                  <td className="border p-2">{contact.email}</td>
                  <td className="border p-2 max-w-xs break-words whitespace-normal">
                    {contact.message}
                  </td>
                  <td className="border p-2">
                    {new Date(contact.createdAt).toLocaleString()}
                  </td>
                  <td className="border p-2 text-center">
                    <button className="text-2xl font-bold" onClick={() => deleteContact(contact._id)}>
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminContacts;
