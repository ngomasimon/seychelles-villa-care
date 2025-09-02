import { Home, Trees, Sparkles, Shield, Wrench, Search } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Tenancy Management",
      description: "Complete rental management including tenant screening, lease agreements, and rent collection."
    },
    {
      icon: Trees,
      title: "Landscaping",
      description: "Professional garden maintenance and tropical landscaping to keep your property looking pristine."
    },
    {
      icon: Sparkles,
      title: "Cleaning & Housekeeping",
      description: "Regular cleaning services and deep cleaning between tenancies for guest-ready properties."
    },
    {
      icon: Shield,
      title: "Security & Alarm Systems",
      description: "24/7 security monitoring, alarm system maintenance, and property protection services."
    },
    {
      icon: Wrench,
      title: "Repairs & Renovations",
      description: "Professional maintenance, urgent repairs, and property improvement projects."
    },
    {
      icon: Search,
      title: "Regular Inspections",
      description: "Scheduled property inspections with detailed reports to ensure everything is in perfect condition."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive property management solutions tailored for the unique needs 
            of Seychelles property owners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;