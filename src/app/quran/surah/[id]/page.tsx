'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';

const SPECIFIC_SURAH_IDS = [1, 2, 36, 55, 4]; // Surah Al-Fatiha, Ayat ul-Kursi, Surah Yaseen, Surah Ar-Rahman, Surah An-Nisa

export default function SurahDetailPage() {
  const { id } = useParams();
  const [surah, setSurah] = useState<any>(null);
  const [ayahs, setAyahs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only fetch data if the Surah ID is in the predefined list
    if (!SPECIFIC_SURAH_IDS.includes(Number(id))) {
      setIsLoading(false); // Set loading to false if the Surah ID isn't in the list
      return;
    }

    const fetchSurahDetails = async () => {
      try {
        const surahResponse = await axios.get(`https://api.quran.com/api/v4/chapters/${id}`);
        const ayahResponse = await axios.get(
          `https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${id}`
        );
        const translationResponse = await axios.get(
          `https://api.quran.com/api/v4/quran/translations/131?chapter_number=${id}`
        );

        setSurah(surahResponse.data.chapter);

        const combinedAyahs = ayahResponse.data.verses.map((ayah: any, index: number) => ({
          ...ayah,
          // Fix: Preserve diacritics (Zabar, Zer, Pesh)
          text_uthmani: ayah.text_uthmani.replace(/[^ء-ي\u064B-\u0652 ]/g, ''),
          // Remove <sup> and footnotes from translation
          translation: translationResponse.data.translations[index]?.text.replace(/<sup.*?<\/sup>/g, '') || 'Translation not available',
        }));

        setAyahs(combinedAyahs);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching Surah details:', error);
      }
    };
    fetchSurahDetails();
  }, [id]);

  if (isLoading) {
    return <div className="text-center py-12 text-xl">Loading Surah...</div>;
  }

  return (
    <div className="bg-gradient-to-r from-teal-200 to-teal-300 text-green-900 py-16 px-8 font-poppins">
      <div className="max-w-7xl mx-auto text-center">
        {/* Surah Title */}
        <h1 className="text-5xl font-extrabold text-teal-800 mb-4">{surah.name_arabic}</h1>
        <p className="text-lg font-semibold mb-8">{surah.translated_name.name}</p>

        {/* Audio Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-teal-700 mb-4">Listen to {surah.name_simple}</h2>
          <audio controls className="w-full max-w-xl mx-auto">
            <source
              src={`https://download.quranicaudio.com/qdc/abdul_baset/mujawwad/${id}.mp3`}
              type="audio/mp3"
            />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Ayahs Section with Arabic and Translation */}
        <div className="space-y-8 mt-12">
          {ayahs.map((ayah, index) => (
            <div key={ayah.id} className="bg-teal-50 p-6 rounded-xl shadow-lg text-right">
              {/* Arabic Text */}
              <p lang="ar" className="text-4xl mb-4 font-extrabold text-teal-900 leading-loose">
                {ayah.text_uthmani}
              </p>
              {/* Translation */}
              <p className="text-lg text-gray-800 italic text-left">
                {ayah.translation}
              </p>
              {/* Ayah Number */}
              <p className="text-lg text-teal-700 mt-4">Ayah {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
