import ScrollReveal from "./ui/ScrollReveal";
import { Check, Download } from "lucide-react";

export default function BrochureSection() {
  return (
    <section id="brochure" className="py-16 md:py-24 bg-[#0d1117] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="md:w-1/2">
            <ScrollReveal>
              <h6 className="text-primary font-semibold mb-2 uppercase tracking-wide">Our Brochure</h6>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Discover More About Innovation Cell</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Learn about our programs, impact, and ways to engage by downloading the official Innovation Cell brochure.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Complete overview of our programs and initiatives",
                  "Success stories and case studies from past projects",
                  "Information on how to join or partner with us",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-6 h-6 bg-primary flex items-center justify-center rounded-full mt-1 mr-3">
                      <Check className="text-black w-3 h-3" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/80 text-black font-semibold rounded-lg transition duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Brochure
              </a>
            </ScrollReveal>
          </div>

          {/* PDF Preview */}
          <div className="md:w-1/2">
            <iframe
  src="/brochure.pdf#view=fitH"
  className="w-full h-[500px] rounded-lg border border-gray-700"
  title="Brochure Preview"
></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
