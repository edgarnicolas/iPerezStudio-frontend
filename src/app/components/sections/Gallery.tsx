import { useState } from 'react';
import { X } from 'lucide-react';
import {InstagramEmbed} from 'react-social-media-embed';
import { ExternalLink } from 'lucide-react';

const instagramPosts = [
'https://www.instagram.com/p/DKhSebRxMxf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
'https://www.instagram.com/p/COaTnMiLNme/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
'https://www.instagram.com/p/Cu9eC2drwMN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
'https://www.instagram.com/p/C9K2XmzPddi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
'https://www.instagram.com/reel/DOlP-xJEVd3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
'https://www.instagram.com/p/DR5edXaAXAv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-red-600">Gallery</span>
          </h2>
          <p className="text-gray-300 text-xl mb-4">
            Latest posts from Instagram
          </p>
          <a 
            href="https://www.instagram.com/iperezstudios/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-red-600 hover:text-red-400 text-lg font-semibold transition-colors"
          >
            <span>Ver todo en Instagram</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Grid responsive 1col-mobile → 3col-desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {instagramPosts.map((url, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <InstagramEmbed 
                url={url} 
                width="100%" 
                height={320}
                className="group-hover:scale-[1.02] transition-transform duration-300"
              />
              {/* Overlay con link */}
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/20 group-hover:bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
              >
                <ExternalLink className="w-8 h-8 text-white" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a 
            href="#book" 
            className="inline-block px-12 py-4 bg-red-600 text-white rounded-lg text-xl font-bold hover:bg-red-700 transition-colors"
          >
            Reserva tu sesión
          </a>
        </div>
      </div>
    </section>
  );

}
