import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('entries')) || [];
    setEntries(savedEntries);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Personal Diary</h1>
      <Link to="/add-entry">
        <button className="bg-purple-500 text-white p-2 mt-4 rounded">Add Entry</button>
      </Link>

      <div className="grid grid-cols-5 gap-4 mt-4">
        {entries.map((entry) => (
          <Link to={`/entry/${entry.id}`} key={entry.id} className="bg-gray-100 p-4 rounded shadow-md cursor-pointer">
            <img src={entry.imageUrl} alt={entry.title} className="w-full h-60 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{entry.title}</h2>
            <p>{entry.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
