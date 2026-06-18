import { ArrowRight, BookOpen, MapPin, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-education.jpg";
import LoginDialog from "./LoginDialog";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Educational guidance platform hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Path to
            <span className="text-gradient-hero block mt-2">Academic Excellence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover your perfect career path with personalized course recommendations, 
            nearby college directories, and timeline tracking for your educational journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <LoginDialog>
              <Button className="btn-hero group">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </LoginDialog>
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-secondary-outline"
              onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Features
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <button 
              className="flex flex-col items-center p-4 edu-card animate-bounce-in hover:scale-105 transition-transform cursor-pointer" 
              style={{animationDelay: '0.1s'}}
              onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <BookOpen className="w-8 h-8 text-primary mb-2" />
              <span className="text-sm font-semibold">Smart Quizzes</span>
            </button>
            <button 
              className="flex flex-col items-center p-4 edu-card animate-bounce-in hover:scale-105 transition-transform cursor-pointer" 
              style={{animationDelay: '0.2s'}}
              onClick={() => document.getElementById('colleges')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MapPin className="w-8 h-8 text-secondary mb-2" />
              <span className="text-sm font-semibold">College Finder</span>
            </button>
            <button 
              className="flex flex-col items-center p-4 edu-card animate-bounce-in hover:scale-105 transition-transform cursor-pointer" 
              style={{animationDelay: '0.3s'}}
              onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="w-8 h-8 text-success mb-2" />
              <span className="text-sm font-semibold">Timeline Tracker</span>
            </button>
            <LoginDialog>
              <button className="flex flex-col items-center p-4 edu-card animate-bounce-in hover:scale-105 transition-transform cursor-pointer" style={{animationDelay: '0.4s'}}>
                <User className="w-8 h-8 text-warning mb-2" />
                <span className="text-sm font-semibold">Personalized</span>
              </button>
            </LoginDialog>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-bounce-in" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-secondary/10 rounded-full animate-bounce-in" style={{animationDelay: '0.6s'}}></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-success/10 rounded-full animate-bounce-in" style={{animationDelay: '0.7s'}}></div>
    </section>
  );
};

export default Hero;