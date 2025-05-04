import ScrollReveal from "./ui/ScrollReveal";
import { Check, Download } from "lucide-react";

export default function BrochureSection() {
  return (
    <section id="brochure" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <ScrollReveal>
              <h6 className="text-primary font-medium mb-2">OUR BROCHURE</h6>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Discover More About Innovation Cell</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Download our comprehensive brochure to learn more about our programs, 
                events, and opportunities for students and industry partners.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <Check className="text-white h-3 w-3" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Complete overview of our programs and initiatives</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <Check className="text-white h-3 w-3" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Success stories and case studies from past projects</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <Check className="text-white h-3 w-3" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Information on how to join or partner with us</p>
                </div>
              </div>
              
              <a href="#" className="inline-flex items-center px-6 py-3 bg-primary hover:bg-blue-600 text-white rounded-lg transition duration-300">
                <Download className="mr-2 h-5 w-5" /> Download Brochure
              </a>
            </ScrollReveal>
          </div>
          
          <div className="md:w-1/2">
            <ScrollReveal>
              {/* PDF Preview Container */}
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg">
                {/* This is a mockup of a PDF viewer */}
                <div className="border border-gray-200 dark:border-gray-700 rounded overflow-hidden bg-gray-100 dark:bg-gray-900 aspect-[3/4] relative">
                  {/* PDF Cover Preview */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-b from-primary/90 to-accent/90">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6">
                      <span className="text-primary font-bold text-2xl">IC</span>
                    </div>
                    <h2 className="text-white text-2xl font-bold mb-4">Innovation Cell</h2>
                    <h3 className="text-white text-xl mb-2">NIT Raipur</h3>
                    <p className="text-white/90 mb-6">Innovation Brochure 2023-24</p>
                    <div className="absolute bottom-8 w-full px-8">
                      <button className="w-full py-3 bg-white hover:bg-gray-100 text-primary font-medium rounded transition duration-300">
                        Open PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
