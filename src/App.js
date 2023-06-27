import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieDetailsPage from './components/MovieDetailsPage';
import FavoritesPage from './components/FavoritesPage';
import TrailersPage from './components/TrailersPage';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/trailers" element={<TrailersPage />} />
        </Routes>
      <Footer />
    </Router>
      

  );
}

export default App;
