'use client';
import React from 'react';

export default function ImportanceOfSalahPage() {
  return (
    <div className="bg-gradient-to-br from-teal-50 to-green-100 py-16 px-8 text-center font-poppins animate-fadeIn">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-green-900 mb-8 sm:mb-12 md:mb-16 animate-bounce">
        Importance of Salah
      </h1>

      {/* Definition of Salah */}
      <div className="bg-white p-8 sm:p-10 md:p-12 rounded-3xl shadow-2xl mb-12 sm:mb-16">
        <h2 className="text-4xl sm:text-5xl font-semibold text-green-800 mb-4 sm:mb-6">What is Salah?</h2>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          Salah, also known as prayer, is one of the Five Pillars of Islam and holds great significance in the life of a Muslim. It is a direct form of worship and communication with Allah, offering believers an opportunity to seek guidance, express gratitude, and ask for forgiveness. Through the regular performance of Salah, Muslims maintain their spiritual connection with Allah and reinforce the discipline, humility, and mindfulness essential for a balanced life. Salah also serves as a reminder of the transient nature of this world and the ultimate purpose of life – to seek Allah’s pleasure and strive for a better hereafter.
        </p>
      </div>

      <div className="space-y-12 sm:space-y-16">
        {/* Fajr Salah */}
        <div className="bg-white p-8 sm:p-10 md:p-12 rounded-3xl shadow-2xl hover:scale-105 transition duration-500 ease-in-out">
          <h2 className="text-4xl sm:text-5xl font-semibold text-green-800 mb-4 sm:mb-6">Fajr Salah</h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Fajr Salah instills discipline and spirituality in the believer's life. It marks the beginning of the day with remembrance of Allah. The Quran mentions the special blessings of the Fajr prayer. Performing it regularly protects from evil throughout the day. It builds a sense of accountability. The rewards for Fajr are immense, including divine light on the Day of Judgment.
          </p>
        </div>

        {/* Dhuhr Salah */}
        <div className="bg-white p-8 sm:p-10 md:p-12 rounded-3xl shadow-2xl hover:scale-105 transition duration-500 ease-in-out">
          <h2 className="text-4xl sm:text-5xl font-semibold text-green-800 mb-4 sm:mb-6">Dhuhr Salah</h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Dhuhr Salah brings mindfulness in the middle of daily activities. It serves as a reminder to stay connected to Allah. Performing it on time brings tranquility and peace. It encourages gratitude for blessings received during the day. Prophet Muhammad ﷺ highlighted the rewards of praying Dhuhr with sincerity. It wipes away minor sins committed during the morning hours.
          </p>
        </div>

        {/* Asr Salah */}
        <div className="bg-white p-8 sm:p-10 md:p-12 rounded-3xl shadow-2xl hover:scale-105 transition duration-500 ease-in-out">
          <h2 className="text-4xl sm:text-5xl font-semibold text-green-800 mb-4 sm:mb-6">Asr Salah</h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Asr Salah reminds believers to pause and reflect during their busy routines. It prevents spiritual neglect during the afternoon hours. The Prophet ﷺ warned against missing Asr, as it could lead to loss in both worlds. It strengthens focus on righteous deeds. Praying Asr regularly is a sign of a committed believer.
          </p>
        </div>

        {/* Maghrib Salah */}
        <div className="bg-white p-8 sm:p-10 md:p-12 rounded-3xl shadow-2xl hover:scale-105 transition duration-500 ease-in-out">
          <h2 className="text-4xl sm:text-5xl font-semibold text-green-800 mb-4 sm:mb-6">Maghrib Salah</h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Maghrib Salah marks the transition from day to night. It reminds believers of the fleeting nature of life. Praying Maghrib on time brings contentment and serenity. The Prophet ﷺ emphasized the importance of completing it before the twilight fades. It offers an opportunity to seek forgiveness and reflect on the day's actions.
          </p>
        </div>

        {/* Isha Salah */}
        <div className="bg-white p-8 sm:p-10 md:p-12 rounded-3xl shadow-2xl hover:scale-105 transition duration-500 ease-in-out">
          <h2 className="text-4xl sm:text-5xl font-semibold text-green-800 mb-4 sm:mb-6">Isha Salah</h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Isha Salah provides spiritual closure for the day. It includes the night prayer, which is highly rewarding. Praying Isha on time shields believers from negligence. The Prophet ﷺ praised those who perform Isha and Fajr in congregation. It brings divine protection during sleep. The night prayer (Tahajjud) can also be performed after Isha for added rewards.
          </p>
        </div>

        {/* Consequences of Missing Salah */}
        <div className="bg-white p-8 sm:p-10 md:p-12 rounded-3xl shadow-2xl hover:scale-105 transition duration-500 ease-in-out">
          <h2 className="text-4xl sm:text-5xl font-semibold text-red-700 mb-4 sm:mb-6">Consequences of Missing Salah</h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Missing Salah is a serious matter in Islam. It results in spiritual darkness and weakens faith. The Prophet ﷺ warned against abandoning Salah, stating it is a distinguishing factor between belief and disbelief. Neglecting Salah can invite hardships and a loss of divine blessings. Regularly missing Salah leads to a disconnection from Allah's mercy.
          </p>
        </div>
      </div>
    </div>
  );
}
