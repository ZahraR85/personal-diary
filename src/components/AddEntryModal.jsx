import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEntryModal = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !imageUrl || !content) {
      alert('Please fill in all fields before submitting');
      return;
    }
    const newEntry = {
      id: Date.now(),
      title,
      date,
      imageUrl,
      content,
    };
    const existingEntries = JSON.parse(localStorage.getItem('entries')) || [];
    const updatedEntries = [...existingEntries, newEntry];
    localStorage.setItem('entries', JSON.stringify(updatedEntries));
    navigate('/');
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Add New Entry</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddEntryModal;
