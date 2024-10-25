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
      
      <div className="container mx-auto p-20">
        <h1 className="text-2xl font-bold p-2">{entry.title}</h1>
        <p className="text-gray-500 p-2 mb-4">{entry.date}</p>
        <div className="flex justify-start">
        <img src={entry.imageUrl} alt={entry.title} className="flex-1 w-auto h-64 object-contain mx-auto rounded mb-4" />
        <p className="p-2 flex-1">{entry.content}</p>
        </div>
        <button
          className="bg-pink-400 text-white py-2 px-6 rounded mt-10"
          onClick={() => navigate('/')} // Close the modal and go back to the homepage
        >Close
        </button>
      </div>
    </>
  );
};

export default EntryDetailsModal;
