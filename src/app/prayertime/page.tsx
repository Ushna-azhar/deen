import React from 'react';
import PrayerTime from '@/components/PrayerTime';
export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl text-teal-800 font-bold mb-4 text-center">Islamic Web</h1>
      <PrayerTime />
    </div>
  );
}
