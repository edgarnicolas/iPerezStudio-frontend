import {Routes, Route} from 'react-router-dom';
import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { Gallery } from './components/sections/Gallery';
import { YourPhotos } from './components/sections/YourPhotos';
import { Book } from './components/sections/Book';
import { Contact } from './components/sections/Contact';
import { Admin } from './pages/Admin';

export default function App() {
  function Home() {
    return (
      <>
        <Navigation />
        <Hero />
        <Gallery />
        <YourPhotos />
        <Book />
        <Contact />
      </>
    );
  }
  
  return (
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
      </Routes>
  );
}
