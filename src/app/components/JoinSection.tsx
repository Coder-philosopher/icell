import ScrollReveal from "./ui/ScrollReveal";

export default function JoinSection() {
  return (
    <section id="join" className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Ready to Join the Innovation Movement?</h2>
          <p className="text-xl opacity-90 mb-10">
            Become a part of NIT Raipur's vibrant innovation ecosystem. 
            Apply to join the Innovation Cell and embark on a journey of creativity and entrepreneurship.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <a href="#" className="px-8 py-4 bg-white text-primary hover:bg-gray-100 rounded-lg font-medium transition duration-300">
              Apply for Membership
            </a>
            <a href="#" className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg font-medium transition duration-300">
              Partner With Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
