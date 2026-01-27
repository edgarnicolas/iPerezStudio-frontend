import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

export function Admin() {
  const [session, setSession] = useState<any>(null);

  // Admin form
  const [code, setCode] = useState('');
  const [clientName, setClientName] = useState('');
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  // Login form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  // LOGIN
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    }
  };

  // CREATE GALLERY
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    const { error } = await supabase.from('galleries').insert({
      code,
      name: clientName,
      url: url,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage('Gallery created successfully');
    setCode('');
    setClientName('');
    setUrl('');
  };

  // LOGOUT
  const logout = async () => {
    await supabase.auth.signOut();
  };

  // 🔒 NOT LOGGED
  if (!session) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="bg-gray-900 p-8 rounded-lg w-full max-w-md space-y-4 text-white"
        >
          <h1 className="text-2xl font-bold text-center">Admin Login</h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-3 bg-black border border-gray-700 rounded"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full p-3 bg-black border border-gray-700 rounded"
            required
          />

          <button className="w-full bg-red-600 py-3 rounded hover:bg-red-700">
            Login
          </button>

          {message && <p className="text-center text-red-500">{message}</p>}
        </form>
      </div>
    );
  }

  // ✅ LOGGED IN
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold">Admin – Create Gallery</h1>

        <input
          placeholder="Code (IP-2026-004)"
          value={code}
          onChange={e => setCode(e.target.value)}
          className="w-full p-3 bg-black border border-gray-700 rounded"
          required
        />

        <input
          placeholder="Client name"
          value={clientName}
          onChange={e => setClientName(e.target.value)}
          className="w-full p-3 bg-black border border-gray-700 rounded"
          required
        />

        <input
          placeholder="Google Drive URL"
          value={url}
          onChange={e => setUrl(e.target.value)}
          className="w-full p-3 bg-black border border-gray-700 rounded"
          required
        />

        <button className="w-full bg-red-600 py-3 rounded hover:bg-red-700">
          Create Gallery
        </button>

        <button
          type="button"
          onClick={logout}
          className="w-full border border-red-600 py-2 rounded text-red-500 hover:bg-red-600 hover:text-white"
        >
          Logout
        </button>

        {message && <p className="text-sm text-center">{message}</p>}
      </form>
    </div>
  );
}
