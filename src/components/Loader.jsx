import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);

    };
  }, []);

  return (
    <div className={`loader-container ${isLoaded ? 'slide-up' : ''} `}>
      <h1>Loading</h1>
    </div>
  );
};

export default Loader;
