import { CheckCircle, Users, MapPin, Calendar } from "lucide-react";
import luxuryVillaPanoramic from "@/assets/luxury-villa-panoramic.jpg";

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Reliable & Professional Team",
      description: "Our experienced team is dedicated to maintaining the highest standards of service."
    },
    {
      icon: MapPin,
      title: "Local Expertise in Seychelles",
      description: "Deep understanding of local regulations, culture, and property market dynamics."
    },
    {
      icon: Calendar,
      title: "Year-Round Property Care",
      description: "Continuous monitoring and maintenance ensuring your property is always guest-ready."
    },
    {
      icon: CheckCircle,
      title: "Flexible Subscription Packages",
      description: "Customizable service packages designed to fit your specific needs and budget."
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Marco Polo Enterprises?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We bring years of experience and local knowledge to ensure your property 
            investment performs at its best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 rounded-full tropical-gradient flex items-center justify-center mx-auto mb-6 shadow-soft">
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="glass-card rounded-2xl max-w-6xl mx-auto overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Experience Hassle-Free Property Management?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Join the growing number of property owners who trust Marco Polo Enterprises 
                  with their Seychelles investments. Let us take care of your property while you enjoy peace of mind.
                </p>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-smooth shadow-soft self-start"
                >
                  Get Your Free Consultation
                </button>
              </div>
              <div className="aspect-square lg:aspect-auto">
                <img
                  src={luxuryVillaPanoramic}
                  alt="Luxury villa with panoramic ocean view in Seychelles"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;