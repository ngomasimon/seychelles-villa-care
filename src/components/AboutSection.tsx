import villaInterior from "@/assets/villa-interior.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About Marco Polo Enterprises
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Marco Polo Enterprises provides comprehensive housing management services 
              in Seychelles, catering to tourists, expatriates, and property owners. 
              We ensure your property stays secure, well-maintained, and income-generating 
              all year round.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With deep local expertise and a commitment to excellence, we take the stress 
              out of property management so you can focus on enjoying your Seychelles investment.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-sm font-medium">Local Expertise</span>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <img
              src={villaInterior}
              alt="Modern villa interior in Seychelles"
              className="rounded-2xl shadow-elegant w-full h-auto hover-lift"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;