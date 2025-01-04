'use client';
import React from 'react';

export default function Page() {
  return (
    <div className="bg-gradient-to-r from-teal-300 via-teal-600 to-teal-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-6xl font-extrabold text-shadow-lg mb-10 animate__animated animate__fadeIn">
          The Five Pillars of Islam
        </h1>
        <p className="text-xl text-white mb-12">
          The Five Pillars of Islam are the foundational acts of worship and practice that define a Muslim&apos;s life and faith. 
          They are rooted in the Quran and the teachings of Prophet Muhammad (ﷺ).
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Shahada */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105">
            <h2 className="text-3xl font-semibold text-teal-700 mb-4">1. Shahada (Faith)</h2>
            <p className="text-lg text-gray-800">
              The Shahada is the declaration of faith: <strong>&quot;There is no god but Allah, and Muhammad (<span className="font-bold">محمد ﷺ</span>) is His Messenger.&quot;</strong>
              It establishes the belief in monotheism and acknowledges Prophet Muhammad ﷺ as the final messenger of Allah.
            </p>
            <p className="text-lg text-gray-800 mt-4 italic">
              <strong>Quran:</strong> &quot;There is no deity except Him, the Exalted in Might, the Wise.&quot; (Quran 3:18)
            </p>
            <p className="text-lg text-gray-800 mt-2 italic">
              <strong>Hadith:</strong> &quot;Whoever says, &apos;There is no god but Allah&apos; sincerely from his heart will enter Paradise.&quot; (Sahih Bukhari)
            </p>
          </div>

          {/* Salah */}
          <div className="bg-teal-100 p-6 rounded-xl shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105">
            <h2 className="text-3xl font-semibold text-teal-700 mb-4">2. Salah (Prayer)</h2>
            <p className="text-lg text-gray-800">
              Muslims pray five times daily: Fajr (before dawn), Dhuhr (midday), Asr (afternoon), Maghrib (after sunset), and Isha (night). Salah fosters discipline, spirituality, and connection to Allah.
            </p>
            <p className="text-lg text-gray-800 mt-4 italic">
              <strong>Quran:</strong> &quot;Indeed, prayer prohibits immorality and wrongdoing, and the remembrance of Allah is greater.&quot; (Quran 29:45)
            </p>
            <p className="text-lg text-gray-800 mt-2 italic">
              <strong>Hadith:</strong> &quot;The first deed for which a servant will be called to account on the Day of Resurrection will be his prayers.&quot; (Sunan Abu Dawood)
            </p>
          </div>

          {/* Zakat */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105">
            <h2 className="text-3xl font-semibold text-teal-700 mb-4">3. Zakat (Charity)</h2>
            <p className="text-lg text-gray-800">
              Zakat is a form of almsgiving to purify wealth and help the needy. It is obligatory for eligible Muslims to give 2.5% of their savings annually.
            </p>
            <p className="text-lg text-gray-800 mt-4 italic">
              <strong>Quran:</strong> &quot;Take from their wealth a charity by which you purify them and cause them increase.&quot; (Quran 9:103)
            </p>
            <p className="text-lg text-gray-800 mt-2 italic">
              <strong>Hadith:</strong> &quot;The upper hand is better than the lower hand (the one who gives is better than the one who takes).&quot; (Sahih Bukhari)
            </p>
          </div>

          {/* Sawm */}
          <div className="bg-teal-100 p-6 rounded-xl shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105">
            <h2 className="text-3xl font-semibold text-teal-700 mb-4">4. Sawm (Fasting)</h2>
            <p className="text-lg text-gray-800">
              During Ramadan, Muslims fast from dawn to sunset. Fasting instills self-discipline, spiritual reflection, and empathy for the less fortunate.
            </p>
            <p className="text-lg text-gray-800 mt-4 italic">
              <strong>Quran:</strong> &quot;O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous.&quot; (Quran 2:183)
            </p>
            <p className="text-lg text-gray-800 mt-2 italic">
              <strong>Hadith:</strong> &quot;Fasting is a shield; it protects you from sin and the fire of Hell.&quot; (Sahih Bukhari)
            </p>
          </div>

          {/* Hajj */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105">
            <h2 className="text-3xl font-semibold text-teal-700 mb-4">5. Hajj (Pilgrimage)</h2>
            <p className="text-lg text-gray-800">
              Hajj is a pilgrimage to Mecca, required at least once in a lifetime for those physically and financially able. It fosters unity, devotion, and equality before Allah.
            </p>
            <p className="text-lg text-gray-800 mt-4 italic">
              <strong>Quran:</strong> &quot;And proclaim to the people the Hajj; they will come to you on foot and on every lean camel; they will come from every distant pass.&quot; (Quran 22:27)
            </p>
            <p className="text-lg text-gray-800 mt-2 italic">
              <strong>Hadith:</strong> &quot;Whoever performs Hajj for Allah’s pleasure and does not have sexual relations with his wife, and does not do evil or sins, then he will return after Hajj free from all sins as if he were born anew.&quot; (Sahih Bukhari)
            </p>
          </div>
        </div>

        <section className="mt-12 p-6 bg-teal-800 rounded-xl shadow-md hover:shadow-lg text-white transform transition-all duration-300 hover:scale-105">
          <h3 className="text-3xl font-semibold mb-4">Conclusion</h3>
          <p className="text-lg">
            The Five Pillars of Islam represent the framework of a Muslim&apos;s life, combining faith, worship, charity, self-discipline, and community. 
            They provide a pathway to spiritual fulfillment and eternal success in the Hereafter.
          </p>
        </section>
      </div>
    </div>
  );
}
