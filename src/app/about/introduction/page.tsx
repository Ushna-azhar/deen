'use client';
import React from 'react';

export default function Page() {
  return (
    <div className="bg-gradient-to-r from-teal-300 via-teal-600 to-teal-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-6xl font-extrabold text-shadow-lg mb-10 animate__animated animate__fadeIn">
          The Beauty of Islam
        </h1>

        {/* Introduction Section */}
        <section className="bg-white p-8 rounded-xl shadow-lg mb-12 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-teal-100">
          <h2 className="text-4xl font-semibold text-teal-700 mb-6">What is Islam?</h2>
          <p className="text-lg leading-relaxed text-gray-800">
            Islam is a comprehensive way of life, emphasizing submission to the will of Allah (<span className="font-bold">اللہ</span>). Founded by the Prophet Muhammad (<span className="font-bold">محمد ﷺ</span>) in the 7th century, Islam promotes peace, justice, and compassion. 
          </p>
          <p className="text-lg leading-relaxed text-gray-800 mt-6">
            The Quran, revealed through the angel <span className="font-bold">جبرائیل علیہ السلام</span>, serves as the ultimate guide for over 1.8 billion Muslims worldwide, transcending cultural and geographical boundaries.
          </p>
        </section>

        {/* Key Beliefs in Islam Section */}
        <section className="bg-teal-100 p-8 rounded-xl shadow-lg mb-12 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-teal-200">
          <h2 className="text-4xl font-semibold text-teal-700 mb-6">Key Beliefs in Islam</h2>
          <p className="text-lg leading-relaxed text-gray-800">
            Islam is founded on six key beliefs that shape every Muslim's life:
          </p>
          <ul className="list-disc pl-6 mt-4 text-lg text-gray-800 space-y-4">
            <li>
              <strong>Belief in One God (Allah):</strong> Allah is eternal, all-knowing, and merciful. Muslims worship Him alone.
            </li>
            <li>
              <strong>Belief in Angels:</strong> Created by Allah to carry out His commands, angels like <span className="font-bold">جبرائیل علیہ السلام</span> have significant roles.
            </li>
            <li>
              <strong>Belief in Prophets:</strong> Muslims honor all prophets, including Adam, Noah, Abraham, Moses, Jesus, and Muhammad (<span className="font-bold">محمد ﷺ</span>) as the final prophet.
            </li>
            <li>
              <strong>Belief in Holy Books:</strong> Sacred scriptures such as the Torah, Psalms, Gospel, and the Quran guide Muslims' lives.
            </li>
            <li>
              <strong>Belief in the Day of Judgment:</strong> Life after death is a fundamental belief, with rewards for righteousness and accountability for actions.
            </li>
            <li>
              <strong>Belief in Divine Predestination:</strong> Muslims believe in Allah's supreme knowledge and will while maintaining human free will.
            </li>
          </ul>
        </section>

        {/* Muslim Greetings Section */}
        <section className="bg-white p-8 rounded-xl shadow-lg mb-12 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-teal-50">
          <h2 className="text-4xl font-semibold text-teal-700 mb-6">Muslim Greetings</h2>
          <p className="text-lg leading-relaxed text-gray-800">
            Greetings in Islam embody the values of peace and brotherhood. The most common greeting is <strong>"Assalamu Alaikum"</strong>, meaning "Peace be upon you," with the response <strong>"Wa Alaikum Assalam"</strong>, "And upon you be peace."
          </p>
          <ul className="list-disc pl-6 mt-4 text-lg text-gray-800 space-y-4">
            <li>
              <strong>"Assalamu Alaikum wa Rahmatullahi wa Barakatuh"</strong> – "Peace, mercy, and blessings of Allah be upon you."
            </li>
            <li><strong>"Marhaban"</strong> – A warm welcome.</li>
            <li><strong>"Ahlan wa Sahlan"</strong> – "Welcome, you are among friends."</li>
          </ul>
        </section>

        {/* Halal & Haram Section */}
        <section className="bg-teal-100 p-8 rounded-xl shadow-lg mb-12 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-teal-200">
          <h2 className="text-4xl font-semibold text-teal-700 mb-6">Understanding Halal and Haram</h2>
          <p className="text-lg leading-relaxed text-gray-800">
            Islam classifies actions and items into <strong>Halal (permissible)</strong> and <strong>Haram (prohibited)</strong> to ensure ethical and spiritual living.
          </p>
          <p className="text-lg leading-relaxed text-gray-800 mt-6">
            <strong>Examples of Halal:</strong>
          </p>
          <ul className="list-disc pl-6 mt-4 text-lg text-gray-800 space-y-4">
            <li>Eating lawful food, such as fruits, vegetables, and Halal-certified meat.</li>
            <li>Engaging in honest trade and fulfilling promises.</li>
            <li>Performing charitable acts and caring for others.</li>
          </ul>
          <p className="text-lg leading-relaxed text-gray-800 mt-6">
            <strong>Examples of Haram:</strong>
          </p>
          <ul className="list-disc pl-6 mt-4 text-lg text-gray-800 space-y-4">
            <li>Consuming intoxicants or pork.</li>
            <li>Engaging in theft, deceit, or harming others.</li>
          </ul>
        </section>

        {/* Scientific Facts in Islam */}
        <section className="bg-teal-100 p-8 rounded-xl shadow-lg mb-12 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-teal-200">
          <h2 className="text-4xl font-semibold text-teal-700 mb-6">Scientific Facts in Islam</h2>
          <p className="text-lg leading-relaxed text-gray-800">
            The Quran contains numerous verses that align with modern scientific discoveries, affirming its divine origin. Here are a few examples:
          </p>
          <ul className="list-disc pl-6 mt-4 text-lg text-gray-800 space-y-4">
            <li><strong>The Two Seas:</strong> "He released the two seas, meeting side by side; between them is a barrier [so] neither transgresses." (Quran 55:19-20)</li>
            <li><strong>Embryology:</strong> "We created man from a drop of fluid, placed in a secure lodging, then made it into a clot of blood..." (Quran 23:13-14)</li>
            <li><strong>The Expanding Universe:</strong> "And the heaven We constructed with strength, and indeed, We are [its] expander." (Quran 51:47)</li>
            <li><strong>The Protective Atmosphere:</strong> "And We made the sky a protective ceiling, but they turn away from its signs." (Quran 21:32)</li>
            <li><strong>The Water Cycle:</strong> "And We send the winds fertilizing and cause water to descend from the sky..." (Quran 15:22)</li>
            <li><strong>The Mountains:</strong> "And We placed within the earth firmly set mountains, lest it should shift with them." (Quran 21:31)</li>
          </ul>
          <p className="text-lg leading-relaxed text-gray-800 mt-6">
            These and many other scientific truths, revealed over 1400 years ago, highlight the Quran’s timeless wisdom.
          </p>
        </section>

        {/* Conclusion Section */}
        <section className="bg-teal-800 p-8 rounded-xl shadow-lg mb-12 text-white transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-teal-700">
          <h2 className="text-4xl font-semibold mb-4">Conclusion</h2>
          <p className="text-lg leading-relaxed">
            Islam is a complete way of life, offering spiritual guidance and practical wisdom. By following its teachings, Muslims strive for peace, harmony, and the betterment of humanity.
          </p>
        </section>
      </div>
    </div>
  );
}
