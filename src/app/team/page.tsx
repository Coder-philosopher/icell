import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function Page() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Team Page</h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          🚧 Coming Very Soon – Meet Our Awesome Team!
        </p>
      </main>

      <Footer />
    </>
  );
}

export default Page;
