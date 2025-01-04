'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SPECIFIC_SURAH_IDS = [1, 2, 36, 55, 4]; // Surah Al-Fatiha, Ayat ul-Kursi (Al-Baqarah), Surah Yaseen, Surah Ar-Rahman, Surah An-Nisa

// Define types for the API response data
interface Surah {
  id: number;
  name_simple: string;
  translated_name: { name: string };
}

export default function SurahPage() {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllSurahs = async () => {
      try {
        const response = await axios.get('https://api.quran.com/api/v4/chapters');
        // Filter out only the specific Surahs you're interested in
        const filteredSurahs = response.data.chapters.filter((surah: { id: number }) =>
          SPECIFIC_SURAH_IDS.includes(surah.id)
        );
        setSurahs(filteredSurahs);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching Surahs:', error);
      }
    };
    fetchAllSurahs();
  }, []);

  if (isLoading) {
    return <div>Loading Surahs...</div>;
  }

  return (
    <div className="bg-gradient-to-r from-teal-200 via-teal-100 to-teal-300 text-green-900 py-16 px-8 font-poppins">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-teal-800 mb-12">Quran Surahs</h1>

        {/* Surah List */}
        <div className="space-y-8">
          {surahs.map((surah) => (
            <div key={surah.id} className="bg-teal-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl font-semibold text-teal-700 mb-4">{surah.name_simple}</h2>
              <p className="text-lg font-semibold text-gray-700 mb-4">{surah.translated_name.name}</p>
              <a
                href={`/quran/surah/${surah.id}`}
                className="text-teal-800 font-semibold underline hover:text-teal-600"
              >
                View Surah
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
