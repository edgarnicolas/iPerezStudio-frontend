import { useState } from 'react';
import { Image, Lock } from 'lucide-react';

/*
Tipo de una galeria privada donde los usuarios pueden acceder a sus fotos 
*/
type Gallery = {
    name: string;
    url: string;
}

export function YourPhotos() {
  const [accessCode, setAccessCode] = useState('');
  const [gallery, setGallery] = useState<Gallery | null>(null);
  const [error, setError] = useState('');


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try{
      const res = await fetch('/galleries.json');

      if(!res.ok){
        throw new Error('Failed to load galleries');
      }

      const galleries: Record<string, Gallery> = await res.json();

      const normalizedCode = accessCode.trim().toUpperCase();

      const foundGallery = galleries[normalizedCode];

      if(!foundGallery){
        setError('Invalid access code. Please try again.');
        return;
      }

      setGallery(foundGallery);

    }catch (error) {
      console.error('Error fetching galleries:', error);
      setError('Invalid access code.');
    }
  };

  return (
    <section id="your-photos" className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your <span className="text-red-600">Photos</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Access your private gallery using your unique code
          </p>
        </div>

        {/* ESTADO 1: No hay galería (formulario) */}
        {!gallery && (
          <div className="bg-gray-900 rounded-lg p-8 border border-red-600/30">
            <div className="flex justify-center mb-6">
              <Lock className="w-16 h-16 text-red-600" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2">Access Code</label>
                <input
                  type="text"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  placeholder="IP-2026-001"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-600"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Access Gallery
              </button>
            </form>

            {error && (
              <p className="mt-4 text-center text-red-500">{error}</p>
            )}
          </div>
        )}

        {/* ESTADO 2: Galería válida */}
        {gallery && (
          <div className="bg-gray-900 rounded-lg p-8 border border-red-600/30 text-center">
            <div className="flex justify-center mb-6">
              <Image className="w-16 h-16 text-red-600" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              {gallery?.name}
            </h3>

            <p className="text-gray-300 mb-6">
              Your photos are ready to view and download
            </p>

            <a
              href={gallery?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Open Gallery
            </a>

            <button
              onClick={() => {
                setGallery(null);
                setAccessCode('');
              }}
              className="block mt-6 text-red-500 hover:underline"
            >
              Enter another code
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
