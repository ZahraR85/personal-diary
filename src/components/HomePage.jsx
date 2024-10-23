import { useEffect, useState } from 'react';

const HomePage = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // Fetch entries from localStorage
    const savedEntries = JSON.parse(localStorage.getItem('entries')) || [];
    setEntries(savedEntries);
  }, []);

  const handleCardClick = (id) => {
    // Redirect to the EntryDetailsModal for the selected entry
    window.location.href = `/entry/${id}`;
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Personal Diary</h1>
      <a href="/add-entry">
        <button className="bg-blue-500 text-white p-2 mt-4 rounded">Add Entry</button>
      </a>

      <div className="grid grid-cols-4 gap-4 mt-4">
        {entries.map((entry) => (
          <div key={entry.id} onClick={() => handleCardClick(entry.id)}
            className="bg-gray-100 p-4 rounded shadow-md cursor-pointer">
            <img src={entry.imageUrl} alt={entry.title} className="w-full h-32 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{entry.title}</h2>
            <p>{entry.date}</p>
          </div>
        ))} 
      </div>
    </div>
  );
};
export default HomePage;
