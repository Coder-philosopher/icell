import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function Page() {
  return (
    <>
      <Navbar />
      
      <main className="py-16 px-4 bg-background min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">Contact Us</h2>
          <p className="text-muted-foreground mb-2">
            <strong>Dr. Saurabh Gupta</strong>, Prof. I/c, Innovation Cell
          </p>
          <p className="text-muted-foreground mb-2">
            📧 <a href="mailto:idc.cdc@nitrr.ac.in" className="text-primary hover:underline">idc.cdc@nitrr.ac.in</a>
          </p>
          <p className="text-muted-foreground">
            📞 <a href="tel:+917389727963" className="text-primary hover:underline">+91-7389727963</a>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Page;
