import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EntryDetailsModal = () => {
  const { id } = useParams(); // Get the entry ID from the URL
  const navigate = useNavigate(); // To redirect back to homepage
  const entries = JSON.parse(localStorage.getItem('entries')) || []; // Fetch all entries
  const entry = entries.find((entry) => entry.id === parseInt(id)); // Find the specific entry by ID

  if (!entry) {
    return <div>Entry not found!</div>;
  }

  return (
    <>
      
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">{entry.title}</h1>
        <p className="text-gray-500 mb-4">{entry.date}</p>
        <img src={entry.imageUrl} alt={entry.title} className="w-auto h-64 object-contain mx-auto rounded mb-4" />
        <p>{entry.content}</p>
        <button
          className="bg-blue-500 text-white p-2 rounded mt-4"
          onClick={() => navigate('/')} // Close the modal and go back to the homepage
        >
          Close
        </button>
      </div>
    </>
  );
};

export default EntryDetailsModal;
