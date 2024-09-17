'use client'
import React, { useState, useEffect } from 'react'
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import Loading from "./Loading";

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
