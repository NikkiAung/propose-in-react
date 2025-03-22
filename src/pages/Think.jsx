import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Think = () => {
  const gifRef = useRef(null);
  const [days, setDays] = useState('');
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tenor.com/embed.js';
    script.async = true;
    if (gifRef.current) {
      gifRef.current.appendChild(script);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'Aung Nanda Oo',
      message: `She said she'd like to think for ${days} day(s) 🤔`,
    };

    emailjs
      .send(
        'service_k7c4cdz',     // your EmailJS service ID
        'template_3i4fnj4',    // your EmailJS template ID
        templateParams,
        'm0eDAvjzFuqLYf1n_'    // your EmailJS public key
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSent(true);
        setDays('');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send email 💔');
      });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#fff0f3] px-4">
      {/* GIF */}
      <div ref={gifRef} className="h-[300px] w-[300px] mb-8">
        <div
          className="tenor-gif-embed"
          data-postid="8703059544703504695"
          data-share-method="host"
          data-aspect-ratio="1.16216"
          data-width="100%"
        >
          <a href="https://tenor.com/view/peach-cat-sad-peach-cry-gif-8703059544703504695">
            Peach Cat Sad Peach Cry Sticker
          </a>{' '}
          from{' '}
          <a href="https://tenor.com/search/peach+cat+sad-stickers">
            Peach Cat Sad Stickers
          </a>
        </div>
      </div>

      {/* Message */}
      {!isSent ? (
        <form onSubmit={handleSubmit} className="text-center space-y-4">
          <label className="text-xl font-semibold text-pink-700 block">
            How many days do you want to think? 🥹
          </label>
          <input
            type="number"
            min="1"
            max="365"
            required
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="px-4 py-2 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="e.g. 3"
          />
          <br />
          <button
            type="submit"
            className="mt-2 bg-pink-500 hover:bg-pink-600 transition px-6 py-2 text-white font-semibold rounded-full shadow"
          >
            Submit 💌
          </button>
        </form>
      ) : (
        <p className="text-green-600 text-lg font-medium mt-6">
          Thank you! Your response has been sent 💖
        </p>
      )}
    </div>
  );
};

export default Think;
