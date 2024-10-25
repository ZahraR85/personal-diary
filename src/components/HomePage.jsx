import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero'; 
const HomePage = () => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('entries')) || [];
    // Sort the entries by date (newest first)
    const sortedEntries = savedEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
    setEntries(sortedEntries);
  }, []);
  const handleDelete = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this entry?');
    if (confirmed) {
      // Filter out the deleted entry
      const updatedEntries = entries.filter((entry) => entry.id !== id);
      // Sort the updated entries after deletion
      const sortedUpdatedEntries = updatedEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
      setEntries(sortedUpdatedEntries);
      localStorage.setItem('entries', JSON.stringify(sortedUpdatedEntries));
    }
  };
  return (
    <div>
     <Hero />

    <div className="container mx-auto p-4">
      <Link to="/add-entry">
        <button className="bg-pink-400 text-white py-2 px-4 rounded">Add Entry</button>
      </Link>
      <div className="grid grid-cols-6 gap-4 mt-6">
        {entries.map((entry) => (
          <div key={entry.id} className="relative border rounded overflow-hidden shadow-lg">
            <button onClick={() => handleDelete(entry.id)}
              className="absolute top-1 right-1"
            ><i className="fa-solid fa-trash text-2xl"></i></button>
            <Link to={`/entry/${entry.id}`}>
              <img src={entry.imageUrl} alt={entry.title} className="w-45 h-60 py-2 px-4"/>
              <div className="p-2">
                <h2 className="text-lg font-semibold p-2">{entry.title}</h2>
                <p className="text-gray-500 text-sm p-2">{entry.date}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};
export default HomePage;
