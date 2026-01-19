'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
export const dynamic = 'force-dynamic';
export default function AddListing() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('cars');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      alert('You must be logged in to post a listing');
      setLoading(false);
      return;
    }

    const { error } = await supabase.from('listings').insert([
      {
        title,
        price: Number(price),
        category,
        location,
        user_id: user.id,
        isPro: false,
      },
    ]);

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      alert('Listing posted successfully!');
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-2xl mx-auto bg-gray-900 p-10 rounded-xl border border-purple-600/30">
        <h1 className="text-4xl font-bold mb-8 text-center text-purple-400">Add New Listing</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Title</label>
            <input
              placeholder="e.g. 2020 Honda Civic EX"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 bg-black border border-purple-600/50 rounded-lg text-white focus:outline-none focus:border-purple-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Price (USD)</label>
            <input
              type="number"
              placeholder="15000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-3 bg-black border border-purple-600/50 rounded-lg text-white focus:outline-none focus:border-purple-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 bg-black border border-purple-600/50 rounded-lg text-white focus:outline-none focus:border-purple-400"
            >
              <option value="cars">Cars</option>
              <option value="homes">Homes</option>
              <option value="land">Land</option>
              <option value="boats">Boats</option>
              <option value="appliances">Appliances</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-2">Location (city / parish)</label>
            <input
              placeholder="e.g. Kingston, St. Andrew"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 bg-black border border-purple-600/50 rounded-lg text-white focus:outline-none focus:border-purple-400"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-bold text-lg disabled:opacity-50 transition"
          >
            {loading ? 'Posting...' : 'Post Listing'}
          </button>
        </form>
      </div>
    </div>
  );
}