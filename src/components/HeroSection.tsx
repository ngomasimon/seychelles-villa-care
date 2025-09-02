import { Button } from "@/components/ui/button";
import heroVilla from "@/assets/hero-villa.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroVilla})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Your Home, Our Care
        </h1>
        <p className="text-xl md:text-2xl mb-4 animate-fade-in opacity-90">
          House Management in Seychelles
        </p>
        <p className="text-lg md:text-xl mb-8 animate-slide-up opacity-80 max-w-2xl mx-auto">
          Property maintenance, security & rental management made easy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button
            variant="hero"
            size="lg"
            onClick={scrollToContact}
            className="text-lg px-8 py-4"
          >
            Get Started
          </Button>
          <Button
            variant="glass"
            size="lg"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="text-lg px-8 py-4"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full opacity-75">
          <div className="w-1 h-3 bg-white rounded-full mx-auto mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;