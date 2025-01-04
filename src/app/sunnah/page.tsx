'use client';
import React from 'react';

export default function SunnahPage() {
  return (
    <div className="bg-teal-50 text-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <h1 className="text-6xl text-teal-800 font-extrabold tracking-wider">
            The Sunnah: Teachings of Prophet Muhammad (PBUH)
          </h1>
          <p className="text-xl font-medium text-teal-600">
            The Sunnah represents the actions, sayings, and approvals of Prophet Muhammad (PBUH), offering timeless guidance for all aspects of life.
          </p>
          <p className="text-lg text-teal-500">
            It complements the Quran, showcasing how to embody the teachings of Islam through everyday actions.
          </p>
        </div>

        {/* Section 1: What is Sunnah? */}
        <div className="mt-12 space-y-8">
          <h2 className="text-4xl font-semibold text-center text-teal-700">What is the Sunnah?</h2>
          <p className="text-lg text-teal-700 leading-relaxed">
            The Sunnah is the second primary source of Islamic teachings, following the Quran. It encompasses the actions, sayings, and approvals of Prophet Muhammad (PBUH), recorded by his companions, and serves as an exemplary model for Muslims.
          </p>
          <p className="text-lg text-teal-700 leading-relaxed">
            It helps clarify the Quranic messages, offering deeper insights into acts of worship, relationship-building, and personal growth, giving practical examples for Muslims to follow.
          </p>
        </div>

        {/* Section 2: Importance of the Sunnah */}
        <div className="mt-16 bg-teal-700 py-10 px-6 rounded-lg shadow-xl">
          <h2 className="text-4xl font-semibold text-center text-white mb-6">The Importance of Sunnah</h2>
          <p className="text-lg text-teal-100 leading-relaxed">
            The Sunnah plays an essential role in the life of every Muslim, providing a practical interpretation of the Quran and serving as the second source of Islamic law.
          </p>
          <p className="text-lg text-teal-100 leading-relaxed">
            It serves as a guide to achieving spiritual refinement, embodying qualities such as patience, integrity, justice, and compassion—values that the Prophet Muhammad (PBUH) exemplified.
          </p>
        </div>

        {/* Section 3: Key Teachings of the Sunnah */}
        <div className="mt-16 space-y-8">
          <h2 className="text-4xl font-semibold text-center text-teal-800">Key Teachings from the Sunnah</h2>
          <ul className="space-y-6">
            <li className="text-xl text-teal-600">
              <strong>Respect for Parents:</strong> Prophet Muhammad (PBUH) emphasized the importance of honoring and respecting one’s parents. He said, &quot;Paradise lies under the feet of your mother.&quot;
            </li>
            <li className="text-xl text-teal-600">
              <strong>Helping Others:</strong> Prophet Muhammad (PBUH) urged acts of charity, kindness, and selflessness, saying, &quot;The best of people are those who are most beneficial to others.&quot;
            </li>
            <li className="text-xl text-teal-600">
              <strong>Patience and Perseverance:</strong> The Sunnah teaches us to endure hardship with patience and trust in Allah’s plan, exemplified through the Prophet’s resilience.
            </li>
            <li className="text-xl text-teal-600">
              <strong>Modesty and Humility:</strong> Prophet Muhammad (PBUH) led a life of extreme humility, urging followers to avoid arrogance, focusing on character rather than material wealth.
            </li>
            <li className="text-xl text-teal-600">
              <strong>Gratitude to Allah:</strong> Gratitude (Shukr) is a key theme in the Sunnah. Prophet Muhammad (PBUH) often expressed gratitude to Allah, teaching us to remain thankful for our blessings.
            </li>
            <li className="text-xl text-teal-600">
              <strong>Forgiveness:</strong> Prophet Muhammad (PBUH) emphasized the importance of forgiveness, saying, &quot;The best among you are those who are the most forgiving.&quot;
            </li>
          </ul>
        </div>

        {/* Section 4: Sunnah in Daily Life */}
        <div className="mt-16 bg-teal-600 py-10 px-6 rounded-lg shadow-xl">
          <h2 className="text-4xl font-semibold text-center text-white mb-6">The Sunnah in Our Daily Lives</h2>
          <p className="text-lg text-teal-200 leading-relaxed">
            The Sunnah is not merely for study but for application. Whether in personal relationships, work ethics, or worship, the Sunnah provides practical guidance for living in alignment with Allah’s will.
          </p>
          <p className="text-lg text-teal-200 leading-relaxed">
            Examples from the Prophet’s life—such as greeting with a smile, showing compassion to animals, and prioritizing family—offer valuable lessons for building stronger communities and living with discipline and purpose.
          </p>
        </div>

        {/* Section 5: Conclusion */}
        <div className="mt-16 text-center space-y-6">
          <h2 className="text-4xl font-semibold text-teal-700">The Sunnah: A Guide for Life</h2>
          <p className="text-lg text-teal-600">
            The Sunnah of Prophet Muhammad (PBUH) is more than just historical anecdotes; it is a timeless guide for living a righteous, fulfilling life in alignment with divine teachings. By following the Sunnah, we can become better individuals and positively impact society.
          </p>
          <p className="text-lg text-teal-600">
            May we continue to seek guidance from the Sunnah in all aspects of our lives, striving to embody the noble values of compassion, humility, patience, and justice set by Prophet Muhammad (PBUH).
          </p>
        </div>
      </div>
    </div>
  );
}
