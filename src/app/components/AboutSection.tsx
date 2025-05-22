import ScrollReveal from "./ui/ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h6 className="text-primary font-medium mb-2">ABOUT US</h6>
            <h2 className="text-4xl font-heading font-bold mb-4">Innovation Cell, NIT Raipur</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Since May 2018, our cell has nurtured entrepreneurial spirit at NIT Raipur by providing mentorship, resources, and a makerspace focused on frugal innovation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ScrollReveal>
            <div className="bg-card p-8 rounded-xl border">
              <h3 className="text-xl font-semibold text-primary mb-4">Mission & Vision</h3>
              <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                <li>Promote innovation-driven entrepreneurship among students</li>
                <li>Encourage interdisciplinary collaboration and frugal solutions</li>
                <li>Transform ideas into market-ready prototypes</li>
                <li>Support student-led startups via guidance and seed funding</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-card p-8 rounded-xl border">
              <h3 className="text-xl text-white font-semibold text-secondary mb-4">Facilities & Support</h3>
              <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                <li>Access to 24x7 Makerspace with internet and lab facilities</li>
                <li>Mentor pool for periodic project evaluation and feedback</li>
                <li>Seed support of up to ₹25,000 for promising ideas</li>
                <li>Opportunities to graduate into Technology Business Incubator</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-16">
          <ScrollReveal>
            <div className="text-center">
              <h4 className="text-2xl font-bold mb-4">Contact Us</h4>
              <p className="text-muted-foreground">Dr. Saurabh Gupta, Prof. I/c, Innovation Cell</p>
              <p className="text-muted-foreground">📧 <a href="mailto:idc.cdc@nitrr.ac.in" className="text-primary hover:underline">idc.cdc@nitrr.ac.in</a></p>
              <p className="text-muted-foreground">📞 +91-7389727963</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
