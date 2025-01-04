'use client';
import React, { useState, useEffect } from 'react';
import IslamicDate from '@/components/IslamicDate';
import QuoteCarousel from '@/components/QuoteCarousel';
import Link from 'next/link';

export default function Home() {
  const videos = [
    '/makkahh.mp4',
    '/medina.mp4',
    '/view.mp4',
  ];

  const quotes = [
    'The best among you are those who have the best manners and character. – Prophet Muhammad (PBUH)',
    'Whoever shows you a good example, follow it. – Prophet Muhammad (PBUH)',
    'The strong one is not the one who can overpower others, but the one who controls himself when angry. – Prophet Muhammad (PBUH)',
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 5000); // Change video every 5 seconds

    // Clear the interval on component unmount
    return () => clearInterval(videoInterval);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-t from-teal-700 to-teal-900">
      {/* Video Section */}
      <div className="relative w-full h-screen">
        {/* Video player */}
        <video
          src={videos[currentVideoIndex]}
          type="video/mp4"
          autoPlay
          loop
          muted
          className="object-cover w-full h-full absolute top-0 left-0 rounded-xl"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Darker Overlay */}

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wider animate__animated animate__fadeIn">
            Welcome to Islamic Web
          </h1>
          <p className="text-lg sm:text-xl font-semibold">Explore the world of Islamic knowledge</p>
        </div>
      </div>

      {/* Quote Carousel Section */}
      <div className="bg-teal-800 text-white py-16 sm:py-20 mt-12 rounded-t-3xl shadow-lg">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">Islamic Quotes</h2>
          <QuoteCarousel quotes={quotes} />
        </div>
      </div>

      {/* Islamic Date Section */}
      <div className="py-12 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">Islamic Date</h2>
          <IslamicDate />
        </div>
      </div>

      {/* Featured Articles Section */}
      <div className="bg-teal-700 text-white py-16 sm:py-20 mt-12 rounded-b-3xl shadow-xl">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">Featured Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white text-teal-800 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-500 ease-in-out">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Understanding the Quran</h3>
              <p className="text-base sm:text-lg mb-4">Learn the depth and wisdom of the Quran, its teachings, and impact on the world.</p>
              <Link href="/quran/detail" className="text-teal-600 hover:text-teal-800 font-semibold">
                Read More
              </Link>
            </div>
            <div className="bg-white text-teal-800 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-500 ease-in-out">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Prophet Muhammad's (PBUH) Life</h3>
              <p className="text-base sm:text-lg mb-4">Explore the life and teachings of the Prophet Muhammad (PBUH) through key events and lessons.</p>
              <Link href="/about/life" className="text-teal-600 hover:text-teal-800 font-semibold">
                Read More
              </Link>
            </div>
            <div className="bg-white text-teal-800 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-500 ease-in-out">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">The Importance of Prayer</h3>
              <p className="text-base sm:text-lg mb-4">Understand the significance of prayer (Salah) in Islam and its impact on daily life.</p>
              <Link href="/prayer" className="text-teal-600 hover:text-teal-800 font-semibold">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sunnah Section */}
      <div className="bg-teal-800 text-white py-16 sm:py-20 mt-12 rounded-b-3xl shadow-lg">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">The Sunnah of Prophet Muhammad (PBUH)</h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8">The Sunnah refers to the teachings, practices, and examples set by Prophet Muhammad (PBUH) for us to follow in all aspects of life. Learn about his actions, sayings, and guidance.</p>
          <Link href="/sunnah" className="bg-teal-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-teal-700">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
