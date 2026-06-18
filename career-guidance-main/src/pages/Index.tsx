import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AptitudeQuiz from "@/components/AptitudeQuiz";
import CourseMapping from "@/components/CourseMapping";
import CollegeDirectory from "@/components/CollegeDirectory";
import TimelineTracker from "@/components/TimelineTracker";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <div id="quiz">
          <AptitudeQuiz />
        </div>
        <div id="courses">
          <CourseMapping />
        </div>
        <div id="colleges">
          <CollegeDirectory />
        </div>
        <div id="timeline">
          <TimelineTracker />
        </div>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
