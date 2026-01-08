import { Camera, Image } from 'lucide-react';

export function Hero() {
  const scrollToBook = () => {
    const element = document.getElementById("book");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-4">

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          <img src="src/assets/images/logo-ips.png" alt="iPerezlogo" className="mx-auto w-64 md:w-80" />
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToBook}
            className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Book a Session
          </button>
          <button
            onClick={() =>
              document
                .getElementById("gallery")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
          >
            View Gallery
          </button>
        </div>
      </div>
    </section>
  );
}