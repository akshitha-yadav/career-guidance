import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, BrainCircuit, Building2, GraduationCap } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Bachelor of Science (B.Sc.)",
    duration: "3 Years",
    category: "Science",
    icon: <BrainCircuit className="w-6 h-6" />,
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    careers: [
      { title: "Software Engineer", type: "Private", salary: "₹6-15 LPA" },
      { title: "Research Scientist", type: "Government", salary: "₹4-12 LPA" },
      { title: "Medical Doctor", type: "Private/Govt", salary: "₹8-25 LPA" }
    ],
    higherEd: ["M.Sc.", "M.Tech", "MBA", "PhD"],
    exams: ["GATE", "NET", "NEET", "IIT-JEE"]
  },
  {
    id: 2,
    title: "Bachelor of Arts (B.A.)",
    duration: "3 Years", 
    category: "Arts",
    icon: <BookOpen className="w-6 h-6" />,
    subjects: ["Literature", "History", "Psychology", "Political Science"],
    careers: [
      { title: "Civil Services Officer", type: "Government", salary: "₹7-18 LPA" },
      { title: "Journalist", type: "Private", salary: "₹3-12 LPA" },
      { title: "Teacher/Professor", type: "Govt/Private", salary: "₹4-15 LPA" }
    ],
    higherEd: ["M.A.", "MBA", "M.Ed", "PhD"],
    exams: ["UPSC", "NET", "CAT", "State PSC"]
  },
  {
    id: 3,
    title: "Bachelor of Commerce (B.Com)",
    duration: "3 Years",
    category: "Commerce", 
    icon: <Building2 className="w-6 h-6" />,
    subjects: ["Accounting", "Economics", "Business Studies", "Statistics"],
    careers: [
      { title: "Chartered Accountant", type: "Private", salary: "₹8-20 LPA" },
      { title: "Bank Manager", type: "Government", salary: "₹6-15 LPA" },
      { title: "Financial Analyst", type: "Private", salary: "₹5-18 LPA" }
    ],
    higherEd: ["M.Com", "MBA", "CA", "CFA"],
    exams: ["CA", "CS", "CAT", "Banking Exams"]
  },
  {
    id: 4,
    title: "Bachelor of Computer Applications (BCA)",
    duration: "3 Years",
    category: "Vocational",
    icon: <GraduationCap className="w-6 h-6" />,
    subjects: ["Programming", "Database", "Web Development", "Software Engineering"],
    careers: [
      { title: "Software Developer", type: "Private", salary: "₹4-15 LPA" },
      { title: "System Administrator", type: "Govt/Private", salary: "₹3-10 LPA" },
      { title: "IT Consultant", type: "Private", salary: "₹6-18 LPA" }
    ],
    higherEd: ["MCA", "M.Tech", "MBA", "MS"],
    exams: ["NIMCET", "GATE", "CAT", "Company Tests"]
  }
];

const CourseMapping = () => {
  const categoryColors = {
    Science: "bg-primary/10 text-primary border-primary/20",
    Arts: "bg-secondary/10 text-secondary border-secondary/20", 
    Commerce: "bg-success/10 text-success border-success/20",
    Vocational: "bg-warning/10 text-warning border-warning/20"
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Course to Career Mapping</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore detailed pathways showing what each degree offers, career opportunities, 
            and growth prospects in different fields.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <Card 
              key={course.id} 
              className="edu-card animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${categoryColors[course.category as keyof typeof categoryColors]}`}>
                      {course.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{course.duration}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className={categoryColors[course.category as keyof typeof categoryColors]}>
                    {course.category}
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Core Subjects</h4>
                    <div className="flex flex-wrap gap-1">
                      {course.subjects.map((subject) => (
                        <Badge key={subject} variant="secondary" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-sm">Career Opportunities</h4>
                  <div className="space-y-2">
                    {course.careers.map((career, idx) => (
                      <div key={idx} className="flex justify-between items-center p-2 bg-muted/30 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{career.title}</p>
                          <p className="text-xs text-muted-foreground">{career.type}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {career.salary}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Higher Education</h4>
                    <div className="space-y-1">
                      {course.higherEd.slice(0, 3).map((edu) => (
                        <Badge key={edu} variant="outline" className="text-xs mr-1 mb-1">
                          {edu}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Exams</h4>
                    <div className="space-y-1">
                      {course.exams.slice(0, 3).map((exam) => (
                        <Badge key={exam} variant="outline" className="text-xs mr-1 mb-1">
                          {exam}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Button className="w-full btn-secondary-outline">
                  View Detailed Path
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="btn-hero">
            Explore All Courses
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseMapping;