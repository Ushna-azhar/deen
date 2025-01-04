'use client';
import React from 'react';

export default function QuranDetailsPage() {
  return (
    <div className="bg-gradient-to-br from-green-100 via-teal-200 to-teal-300 py-16 px-8 text-center font-poppins">
      <h1 className="text-6xl font-extrabold text-green-800 mb-12">About Quran Majeed</h1>

      <div className="space-y-12">
        {/* Introduction Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-4xl font-semibold text-teal-700 mb-4">Introduction</h2>
          <p className="text-lg text-gray-700">
            The Quran Majeed is the holy scripture of Islam, revealed by Allah to the Prophet Muhammad (peace be upon him) over 23 years, starting in 610 CE. It is a complete code of life, guiding humanity in all aspects, including spirituality, ethics, law, and personal development. The Quran is not just a book of laws but a comprehensive spiritual guide that fosters inner peace and societal harmony.
          </p>
        </div>

        {/* Structure of the Quran */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-4xl font-semibold text-teal-700 mb-4">Structure of the Quran</h2>
          <p className="text-lg text-gray-700">
            The Quran is composed of 114 chapters, known as Surahs, and over 6,000 verses called Ayahs. These Surahs vary in length, with some as short as three verses and others extending over hundreds of verses. The Quran is further divided into 30 equal parts called Juz, allowing for easier recitation during the month of Ramadan. Each verse serves as a profound message encompassing divine wisdom and eternal truths.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Each Surah covers different aspects of life, such as faith, morality, law, guidance for social relations, and reflections on the afterlife. The first Surah, Al-Fatiha, is a fundamental prayer recited in every unit of the Islamic prayer (Salah).
          </p>
        </div>

        {/* Language and Preservation */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-4xl font-semibold text-teal-700 mb-4">Language and Preservation</h2>
          <p className="text-lg text-gray-700">
            The Quran was revealed in classical Arabic, known for its eloquence and linguistic precision. Despite being over 1400 years old, the Quran remains preserved in its original form without any alteration, a fact acknowledged by both Muslim and non-Muslim scholars. Its linguistic depth and poetic beauty continue to inspire millions, reflecting divine eloquence and clarity.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Millions of Muslims have memorized the entire Quran, known as Hafiz, and it continues to be recited daily across the globe. The oral and written preservation of the Quran ensures its integrity and authenticity through the generations.
          </p>
        </div>

        {/* Key Themes of the Quran */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-4xl font-semibold text-teal-700 mb-4">Key Themes in the Quran</h2>
          <ul className="list-disc list-inside text-left text-lg text-gray-700 space-y-2">
            <li>Monotheism and the Oneness of Allah.</li>
            <li>Prophet stories and their moral lessons.</li>
            <li>Guidance on personal conduct and ethics.</li>
            <li>Law and justice in society.</li>
            <li>The afterlife and the concept of accountability.</li>
            <li>Encouragement for seeking knowledge and reflection.</li>
            <li>Promotion of peace, justice, and compassion.</li>
          </ul>
        </div>

        {/* Shapes and Styling Section */}
        <div className="relative bg-gradient-to-r from-green-300 to-teal-400 rounded-xl shadow-lg overflow-hidden p-8">
          <div className="absolute inset-0 bg-opacity-20 bg-teal-800 rounded-full w-96 h-96 -top-20 -left-20 transform rotate-45"></div>
          <div className="absolute inset-0 bg-opacity-20 bg-green-700 rounded-full w-72 h-72 -bottom-20 -right-20 transform rotate-45"></div>
          <h2 className="text-4xl font-semibold text-white mb-4 relative">Significance in Islam</h2>
          <p className="text-lg text-gray-100 relative">
            The Quran is the foundation of Islamic belief and practice, guiding Muslims in all aspects of life. It emphasizes justice, mercy, and compassion while promoting self-reflection and spiritual growth. Its teachings encourage believers to build a society based on fairness, empathy, and devotion to Allah.
          </p>
        </div>

        {/* Conclusion */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-4xl font-semibold text-teal-700 mb-4">Conclusion</h2>
          <p className="text-lg text-gray-700">
            The Quran Majeed remains a timeless source of guidance and wisdom for millions of people worldwide. Its teachings inspire individuals to lead lives filled with purpose, righteousness, and devotion to the Creator. Studying and reflecting on its verses provides spiritual enlightenment and a profound connection with the Divine.
          </p>
        </div>
      </div>
    </div>
  );
}
