import React, { useState, useEffect } from 'react';
import moment from 'moment-hijri';
import 'moment/locale/ar'; // Arabic locale
import 'moment/locale/ur'; // Urdu locale
import 'moment/locale/hi'; // Hindi locale

const IslamicDate = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en'); // Default language is English
  const [islamicDate, setIslamicDate] = useState('');

  useEffect(() => {
    moment.locale(currentLanguage); // Set the locale for moment
    const formattedDate = moment().format('iDD iMMMM iYYYY'); // Format Islamic (Hijri) date
    setIslamicDate(formattedDate);
  }, [currentLanguage]); // This effect runs whenever the currentLanguage state changes

  return (
    <div className="text-center py-12 px-4 bg-gradient-to-r from-teal-600 to-teal-800 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-8">Islamic Date</h2>
      <div className="bg-white p-8 rounded-xl shadow-md mb-6">
        <p className="text-3xl font-semibold text-teal-800">{islamicDate}</p>
      </div>

      {/* Language Selector */}
      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={() => setCurrentLanguage('en')}
          className="bg-teal-500 text-white py-2 px-6 rounded-full font-semibold transition duration-300 transform hover:scale-105"
        >
          English
        </button>
        <button
          onClick={() => setCurrentLanguage('ar')}
          className="bg-teal-500 text-white py-2 px-6 rounded-full font-semibold transition duration-300 transform hover:scale-105"
        >
          العربية
        </button>
        <button
          onClick={() => setCurrentLanguage('ur')}
          className="bg-teal-500 text-white py-2 px-6 rounded-full font-semibold transition duration-300 transform hover:scale-105"
        >
          اردو
        </button>
        <button
          onClick={() => setCurrentLanguage('hi')}
          className="bg-teal-500 text-white py-2 px-6 rounded-full font-semibold transition duration-300 transform hover:scale-105"
        >
          हिंदी
        </button>
      </div>
    </div>
  );
};

export default IslamicDate;
