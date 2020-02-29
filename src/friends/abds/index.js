import React, { useEffect } from 'react';
import Header from './components/header';

const Abds = () => {
  useEffect(function setDocumentTitle() {
    document.title = 'bhnas';
  }, []);

  return (
    <>
      <Header />
    </>
  );
}

export default Abds;