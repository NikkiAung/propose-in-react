import React, { useEffect, useRef } from 'react';

const Accept = () => {
  const gifRef = useRef(null);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tenor.com/embed.js';
    script.async = true;
    if (gifRef.current) {
      gifRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div ref={gifRef} className='h-[500px] w-[500px]'>
        <div
            className="tenor-gif-embed"
            data-postid="17902932820295577228"
            data-share-method="host"
            data-aspect-ratio="1.07328"
            data-width="100%"
        >
            <a href="https://tenor.com/view/cat-cute-kisses-kitty-kiss-heart-gif-17902932820295577228">
            Cat Cute GIF
            </a>{' '}
            from{' '}
            <a href="https://tenor.com/search/cat-gifs">
            Cat GIFs
            </a>
        </div>
        </div>
    </div>
  );
};

export default Accept;
