import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function App() {
  
  useEffect(() => {
    const handleWheel = (event) => {
      if (event.target.tagName === 'CANVAS') {
        event.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <Spline scene="https://prod.spline.design/IRjDNvV9nk4OPkdZ/scene.splinecode"  style={{ width: '330px', margin:"0 auto"}} />
  );              
}