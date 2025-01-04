'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';

// Define types for the API response data
interface Surah {
  id: number;
  name_simple: string;
  translated_name: { name: string };
}

interface Ayah {
  id: number;
  text_uthmani: string;
}

export default function SurahDetailPage() {
  const { id } = useParams();
  const [surah, setSurah] = useState<Surah | null>(null);
  const [ayahs, setAyahs] = useState<Ayah[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSurahDetails = async () => {
      try {
        const surahResponse = await axios.get(`https://api.quran.com/api/v4/chapters/${id}`);
        const ayahResponse = await axios.get(`https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${id}`);
        
        // Set the Surah data and Ayah data
        setSurah(surahResponse.data.chapter);
        setAyahs(ayahResponse.data.verses);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching Surah details:', error);
      }
    };
    fetchSurahDetails();
  }, [id]);

  if (isLoading) {
    return <div>Loading Surah...</div>;
  }

  return (
    <div className="bg-gradient-to-r from-teal-200 to-teal-300 text-green-900 py-16 px-8 font-poppins">
      <div className="max-w-7xl mx-auto text-center">
        {/* Surah Title */}
        <h1 className="text-5xl font-extrabold text-teal-800 mb-12">{surah?.name_simple}</h1>
        <p className="text-lg font-semibold mb-8">{surah?.translated_name.name}</p>

        {/* Audio Section */}
        <div className="mb-12">
          <audio controls className="w-full max-w-xl mx-auto">
            <source src={`https://download.quran.com/verses/${id}.mp3`} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Ayahs Section */}
        <div className="space-y-8">
          {ayahs.map((ayah, index) => (
            <div key={ayah.id} className="bg-teal-50 p-6 rounded-xl shadow-lg">
              <p className="text-4xl text-right mb-4 font-extrabold text-teal-900">{ayah.text_uthmani}</p>
              <p className="text-lg text-gray-800">{`Ayah ${index + 1}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
