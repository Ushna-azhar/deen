'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PrayerTime = () => {
  const [city, setCity] = useState('Karachi');
  const [country] = useState('Pakistan');
  const [prayerTimes, setPrayerTimes] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await axios.get(
          `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`
        );
        setPrayerTimes(response.data.data.timings);
      } catch (error) {
        setError('Failed to fetch prayer times');
      }
    };

    fetchPrayerTimes();
  }, [city, country]);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(event.target.value);
  };

  if (error) return <p className="text-red-500 text-center font-semibold text-lg">{error}</p>;

  if (!prayerTimes) return (
    <div className="flex justify-center items-center mt-10">
      <div className="animate-spin rounded-full h-24 w-24 border-b-4 border-teal-500"></div>
    </div>
  );

  return (
    <div className="bg-gradient-to-r from-teal-200 via-teal-100 to-teal-200 text-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-3xl shadow-xl max-w-full sm:max-w-lg mx-auto mt-12 transform transition duration-500 hover:scale-105 z-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-teal-700 font-extrabold mb-6 sm:mb-8 text-center text-shadow-md">
        Prayer Times
      </h2>

      {/* City selection dropdown */}
      <div className="flex justify-center mb-6 sm:mb-8 items-center space-x-4">
        <label htmlFor="city" className="text-teal-800 text-base sm:text-lg font-semibold text-shadow-md">Select City:</label>
        <select
          id="city"
          className="p-3 sm:p-4 rounded-full bg-teal-600 text-sm sm:text-lg font-medium focus:outline-none focus:ring-4 focus:ring-green-800 transition ease-in-out"
          value={city}
          onChange={handleCityChange}
        >
          <option value="Karachi">Karachi</option>
          <option value="Lahore">Lahore</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Quetta">Quetta</option>
          <option value="Peshawar">Peshawar</option>
          <option value="Rawalpindi">Rawalpindi</option>
          {/* Add more cities here */}
        </select>
      </div>

      {/* Prayer times display */}
      <div className="space-y-4 sm:space-y-6">
        {Object.entries(prayerTimes).map(([prayer, time]) => (
          <div
            key={prayer}
            className="flex justify-between py-3 sm:py-4 px-4 sm:px-6 bg-teal-700 rounded-xl shadow-lg hover:bg-teal-800 transition duration-300 ease-in-out transform hover:scale-105 mb-3 sm:mb-4"
          >
            <span className="text-sm sm:text-lg md:text-xl font-semibold">{prayer}</span>
            <span className="text-lg sm:text-xl md:text-2xl font-bold">{time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrayerTime;
