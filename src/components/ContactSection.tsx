import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Globe, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

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
      href: "google.com/maps/place/City+Victoria,+Mahe+island/data=!4m2!3m1!1s0x22e028547ac91869:0x62e3e07e7e6c3cde?sa=X&ved=1t:155783&ictx=111"
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

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 glass-card rounded-xl hover-lift transition-smooth"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-semibold text-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="glass-card p-6 rounded-xl">
              <h4 className="font-semibold text-foreground mb-4">Find Us</h4>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Seychelles Location</p>
                  <p className="text-sm text-muted-foreground">Interactive map coming soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full"
                  placeholder="Tell us about your property management needs..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
