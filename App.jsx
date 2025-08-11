import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import HomePage from './components/pages/HomePage';
import ViewItemsPage from './components/pages/ViewItemsPage';
import AddItemPage from './components/pages/AddItemPage';
import EditItemPage from './components/pages/EditItemPage';
import ItemDetailsPage from './components/pages/ItemDetailsPage';

function App() {
  return (
    <BrowserRouter>
      {/* Global gradient background */}
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
        <Navbar />
        {/* Page content */}
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/items" element={<ViewItemsPage />} />
            <Route path="/items/:id" element={<ItemDetailsPage />} />
            <Route path="/add-item" element={<AddItemPage />} />
            <Route path="/edit-item/:id" element={<EditItemPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
