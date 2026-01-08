import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { Gallery } from './components/sections/Gallery';
import { YourPhotos } from './components/sections/YourPhotos';
import { Book } from './components/sections/Book';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <div className="size-full">
      <Navigation />
      <Hero />
      <Gallery />
      <YourPhotos />
      <Book />
      <Contact />
    </div>
  );
}
