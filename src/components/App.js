import React from 'react';
import Quote from './Quote';
import Quotes from './Quotes';

export default function App() {
  const quotes = [
    {
      "character": "Zapp Brannigan",
      "quote": "I'm anticipating an all-out tactical dogfight, followed by a light dinner.",
      "image": "https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904049/Zapp_Brannigan.png"
    }
  ];

  return <Quotes quotes={quotes} />;
}
