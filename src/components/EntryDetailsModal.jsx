import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const EntryDetailsModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const entries = JSON.parse(localStorage.getItem('entries')) || [];
  const entryIndex = entries.findIndex((entry) => entry.id === parseInt(id));
  const entry = entries[entryIndex];

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(entry?.title || '');
  const [date, setDate] = useState(entry?.date || '');
  const [imageUrl, setImageUrl] = useState(entry?.imageUrl || '');
  const [content, setContent] = useState(entry?.content || '');

  if (!entry) {
    return <div>Entry not found!</div>;
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedEntry = { ...entry, title, date, imageUrl, content };
    const updatedEntries = [...entries];
    updatedEntries[entryIndex] = updatedEntry;
    localStorage.setItem('entries', JSON.stringify(updatedEntries));
    setIsEditing(false);
  };
  return (
    <div className="flex justify-center items-start pt-20 min-h-screen bg-gray-100">
      <div className="container max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
        {isEditing ? (
          <>
            <h1 className="text-2xl font-bold mb-4 text-center">Edit Entry</h1>
            <form onSubmit={handleUpdate} className="space-y-4">
              <input type="text" placeholder="Title" value={title}
                onChange={(e) => setTitle(e.target.value)} className="block w-full p-2 border border-gray-300 rounded"/>
              <input type="date" value={date}
                onChange={(e) => setDate(e.target.value)}className="block w-full p-2 border border-gray-300 rounded"/>
              <input type="text" placeholder="Image URL" value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)} className="block w-full p-2 border border-gray-300 rounded"/>
              <textarea placeholder="Content"value={content} onChange={(e) => setContent(e.target.value)}
                rows="5" className="block w-full p-2 border border-gray-300 rounded"></textarea>
              <button type="submit" className="bg-pink-400 text-white py-2 px-4 rounded w-full">Update</button>
            </form>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold p-2">{entry.title}</h1>
            <p className="text-gray-500 p-2 mb-4">{entry.date}</p>
            <div className="flex justify-start">
              <img src={entry.imageUrl}alt={entry.title}
                className="w-auto h-64 object-contain mx-auto rounded mb-4"/>
              <p className="p-2 flex-1">{entry.content}</p>
            </div>
            <button className="bg-pink-400 text-white py-2 px-6 rounded mt-10 mr-4"
              onClick={() => navigate('/')}>Close</button>
            <button className="bg-pink-400 text-white py-2 px-6 rounded mt-10"
              onClick={() => setIsEditing(true)}>Edit</button>
          </>
        )}
      </div>
    </div>
  );
};
export default EntryDetailsModal;