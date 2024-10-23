import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddEntryModal from './components/AddEntryModal';
import EntryDetailsModal from './components/EntryDetailsModal';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-entry" element={<AddEntryModal />} />
        <Route path="/entry/:id" element={<EntryDetailsModal />} />
      </Routes>
    </Router>
  );
};

export default App;
