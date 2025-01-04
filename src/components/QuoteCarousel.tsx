'use client';
import React, { useState, useEffect } from 'react';

const QuoteCarousel = ({ quotes }) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds

    return () => {
      clearInterval(quoteInterval);
    };
  }, [quotes]);

  return (
    <div className="bg-teal-600 p-6 rounded-xl shadow-lg text-lg italic">
      <p>{quotes[currentQuoteIndex]}</p>
    </div>
  );
};

export default QuoteCarousel;
