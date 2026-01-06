import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { YourPhotos } from './components/YourPhotos';
import { Book } from './components/Book';
import { Contact } from './components/Contact';

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
