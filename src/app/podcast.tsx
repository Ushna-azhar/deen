// /pages/podcast.tsx

'use client';
import React, { useState, useEffect } from 'react';

export default function PodcastPage() {
  const [episodes, setEpisodes] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPodcastEpisodes = async () => {
      try {
        const response = await fetch('https://api.listennotes.com/api/v2/search?q=technology&genre_ids=93', {
          headers: {
            'X-ListenAPI-Key': 'YOUR_LISTEN_NOTES_API_KEY', // Replace with your actual API key
          },
        });
        const data = await response.json();
        setEpisodes(data.results); // Assuming the API returns results in the `results` array
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching podcast episodes:', error);
      }
    };
    fetchPodcastEpisodes();
  }, []);

  if (isLoading) {
    return <div>Loading Podcast...</div>;
  }

  return (
    <div className="bg-gradient-to-r from-teal-200 to-teal-300 text-green-900 py-16 px-8 font-poppins">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-teal-800 mb-12">Podcast Episodes</h1>

        {/* Podcast List */}
        <div className="space-y-8">
          {episodes.map((episode: any, index: number) => (
            <div key={episode.id} className="bg-teal-50 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <h2 className="text-3xl font-semibold text-teal-700 mb-4">{episode.title}</h2>
              <p className="text-lg text-gray-700 mb-4">{episode.description}</p>
              
              {/* Audio Player for each episode */}
              <audio controls className="w-full max-w-xl mx-auto">
                <source src={episode.audio_url} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
