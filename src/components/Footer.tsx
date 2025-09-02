const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-white"></div>
              <span className="text-xl font-bold">Marco Polo Enterprises</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner for comprehensive property management services 
              in beautiful Seychelles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-primary-foreground/80 hover:text-white transition-smooth"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-primary-foreground/80 hover:text-white transition-smooth"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-primary-foreground/80 hover:text-white transition-smooth"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-primary-foreground/80 hover:text-white transition-smooth"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contact Information</h3>
            <div className="space-y-2 text-primary-foreground/80">
              <p>📧 hughesmacopolo@gmail.com</p>
              <p>🌐 hughesmarcopoloenterprises.com</p>
              <p>📞 +248 255 6095</p>
              <p>📍 Seychelles</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2025 Marco Polo Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;