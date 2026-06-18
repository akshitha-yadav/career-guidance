import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowRight, RotateCcw } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: { id: string; text: string; category: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "What type of activities do you enjoy most?",
    options: [
      { id: "a", text: "Solving complex mathematical problems", category: "science" },
      { id: "b", text: "Writing stories and essays", category: "arts" },
      { id: "c", text: "Analyzing business trends", category: "commerce" },
      { id: "d", text: "Working with tools and machines", category: "vocational" }
    ]
  },
  {
    id: 2,
    question: "Which subject interests you the most?",
    options: [
      { id: "a", text: "Physics and Chemistry", category: "science" },
      { id: "b", text: "Literature and History", category: "arts" },
      { id: "c", text: "Economics and Accounting", category: "commerce" },
      { id: "d", text: "Computer Programming", category: "vocational" }
    ]
  },
  {
    id: 3,
    question: "What is your ideal work environment?",
    options: [
      { id: "a", text: "Research laboratory", category: "science" },
      { id: "b", text: "Creative studio", category: "arts" },
      { id: "c", text: "Corporate office", category: "commerce" },
      { id: "d", text: "Workshop or field", category: "vocational" }
    ]
  }
];

const AptitudeQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<{[key: string]: number}>({});

  const handleAnswer = (questionId: number, optionId: string, category: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(prev => prev + 1), 300);
    } else {
      // Calculate results
      const categoryScores: {[key: string]: number} = {};
      questions.forEach(q => {
        const answer = answers[q.id] || (questionId === q.id ? optionId : '');
        if (answer) {
          const option = q.options.find(opt => opt.id === answer);
          if (option) {
            categoryScores[option.category] = (categoryScores[option.category] || 0) + 1;
          }
        }
      });
      
      setResults(categoryScores);
      setTimeout(() => setShowResults(true), 500);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setResults({});
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const getRecommendation = () => {
    const topCategory = Object.entries(results).reduce((a, b) => 
      results[a[0]] > results[b[0]] ? a : b
    )[0];

    const recommendations = {
      science: {
        stream: "Science Stream",
        subjects: "Physics, Chemistry, Mathematics, Biology",
        careers: "Engineering, Medicine, Research, Technology",
        color: "text-primary"
      },
      arts: {
        stream: "Arts Stream", 
        subjects: "Literature, History, Psychology, Political Science",
        careers: "Journalism, Teaching, Civil Services, Law",
        color: "text-secondary"
      },
      commerce: {
        stream: "Commerce Stream",
        subjects: "Accounting, Economics, Business Studies",
        careers: "CA, Banking, Management, Finance",
        color: "text-success"
      },
      vocational: {
        stream: "Vocational Training",
        subjects: "Computer Science, Electronics, Automotive",
        careers: "Software Development, Technical Support, Skilled Trades",
        color: "text-warning"
      }
    };

    return recommendations[topCategory as keyof typeof recommendations];
  };

  if (showResults) {
    const recommendation = getRecommendation();
    
    return (
      <section className="py-20 feature-bg">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto edu-card animate-fade-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
              <CardTitle className="text-3xl mb-2">Quiz Complete!</CardTitle>
              <p className="text-muted-foreground">Based on your responses, here's our recommendation:</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center p-6 bg-accent/50 rounded-lg">
                <h3 className={`text-2xl font-bold mb-2 ${recommendation.color}`}>
                  {recommendation.stream}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">Recommended for you</p>
                
                <div className="space-y-4 text-left">
                  <div>
                    <h4 className="font-semibold mb-1">Key Subjects:</h4>
                    <p className="text-sm text-muted-foreground">{recommendation.subjects}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Career Opportunities:</h4>
                    <p className="text-sm text-muted-foreground">{recommendation.careers}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <Button className="btn-success">
                  View Career Paths
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" onClick={resetQuiz}>
                  <RotateCcw className="mr-2 w-4 h-4" />
                  Retake Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 feature-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Discover Your Perfect Path</h2>
            <p className="text-muted-foreground mb-6">Answer a few questions to get personalized course recommendations</p>
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>
          </div>

          <Card className="edu-card animate-slide-up">
            <CardHeader>
              <CardTitle className="text-xl">
                {questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option) => (
                  <Button
                    key={option.id}
                    variant="outline"
                    className="w-full text-left justify-start p-4 h-auto hover:bg-primary/5 hover:border-primary transition-all"
                    onClick={() => handleAnswer(questions[currentQuestion].id, option.id, option.category)}
                  >
                    <span className="flex items-center">
                      <span className="w-6 h-6 border border-muted-foreground rounded-full mr-3 flex items-center justify-center text-xs font-semibold">
                        {option.id.toUpperCase()}
                      </span>
                      {option.text}
                    </span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AptitudeQuiz;