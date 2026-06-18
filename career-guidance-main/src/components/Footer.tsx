import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[var(--gradient-hero)] rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl">ShikshaSarthi</h3>
                <p className="text-xs text-background/70">Your Educational Guide</p>
              </div>
            </div>
            <p className="text-sm text-background/70 mb-4">
              Empowering students to make informed decisions about their educational 
              and career paths through personalized guidance and comprehensive resources.
            </p>
            <div className="flex space-x-3">
              <Facebook className="w-5 h-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#quiz" className="hover:text-background transition-colors">Aptitude Quiz</a></li>
              <li><a href="#courses" className="hover:text-background transition-colors">Career Mapping</a></li>
              <li><a href="#colleges" className="hover:text-background transition-colors">College Directory</a></li>
              <li><a href="#timeline" className="hover:text-background transition-colors">Timeline Tracker</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Study Materials</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Career Guides</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Scholarship Info</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Entrance Exams</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-background/70">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>support@shikshsarthi.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-sm text-background/70">
            © 2025 ShikshaSarthi. All rights reserved. | 
            <a href="#" className="hover:text-background transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-background transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;