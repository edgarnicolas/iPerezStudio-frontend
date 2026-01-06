import { useState } from 'react';
import { Image, Lock } from 'lucide-react';

export function YourPhotos() {
  const [accessCode, setAccessCode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in production, this would validate against a backend
    if (accessCode.length > 0) {
      setIsAuthenticated(true);
    }
  };

  return (
    <section id="your-photos" className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your <span className="text-red-600">Photos</span>
          </h2>
          <p className="text-gray-300 text-lg">Access your private photo gallery</p>
        </div>

        {!isAuthenticated ? (
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
                  placeholder="Enter your unique access code"
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
            <p className="text-gray-400 text-sm mt-4 text-center">
              Don't have an access code? Contact us to receive your personalized gallery link.
            </p>
          </div>
        ) : (
          <div className="bg-gray-900 rounded-lg p-8 border border-red-600/30">
            <div className="flex justify-center mb-6">
              <Image className="w-16 h-16 text-red-600" />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Welcome Back!</h3>
              <p className="text-gray-300 mb-6">Your personalized gallery is ready to view and download.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                    <Image className="w-12 h-12 text-gray-600" />
                  </div>
                ))}
              </div>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="px-6 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
