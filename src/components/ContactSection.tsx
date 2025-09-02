import { Mail, Globe, Phone, MapPin } from "lucide-react";

const ContactSection = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hughesmacopolo@gmail.com",
      href: "mailto:hughesmacopolo@gmail.com"
    },
    {
      icon: Globe,
      label: "Website",
      value: "marcopoloenterprises.cc",
      href: "https://marcopoloenterprises.cc"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+248 255 6095",
      href: "tel:+2482556095"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Seychelles",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start managing your property the Marco Polo way? 
            Contact us today for a personalized consultation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="flex items-center space-x-4 p-6 glass-card rounded-xl hover-lift transition-smooth"
              >
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  <p className="font-semibold text-foreground text-lg">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="mt-12 glass-card p-8 rounded-xl animate-fade-in">
            <h4 className="font-semibold text-foreground mb-6 text-center text-xl">Find Us in Paradise</h4>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">Beautiful Seychelles</p>
                <p className="text-sm text-muted-foreground">Interactive map coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;