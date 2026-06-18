import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Bell, CheckCircle, AlertCircle } from "lucide-react";

const timelineEvents = [
  {
    id: 1,
    title: "JEE Main Registration",
    date: "Dec 15, 2024",
    endDate: "Jan 10, 2025",
    type: "Entrance Exam",
    status: "upcoming",
    priority: "high",
    description: "Joint Entrance Examination for Engineering admissions",
    daysLeft: 25
  },
  {
    id: 2,
    title: "CUET Application",
    date: "Jan 5, 2025", 
    endDate: "Feb 20, 2025",
    type: "University Admission",
    status: "upcoming",
    priority: "high",
    description: "Common University Entrance Test for various programs",
    daysLeft: 35
  },
  {
    id: 3,
    title: "Delhi University Admission",
    date: "Jun 1, 2025",
    endDate: "Jul 15, 2025",
    type: "College Admission",
    status: "future",
    priority: "medium",
    description: "Merit-based admission process for DU colleges",
    daysLeft: 180
  },
  {
    id: 4,
    title: "Scholarship Applications",
    date: "Oct 1, 2024",
    endDate: "Nov 30, 2024",
    type: "Scholarship",
    status: "completed",
    priority: "medium",
    description: "Various government and private scholarships",
    daysLeft: -20
  },
  {
    id: 5,
    title: "NEET Registration",
    date: "Feb 10, 2025",
    endDate: "Mar 15, 2025",
    type: "Entrance Exam", 
    status: "upcoming",
    priority: "high",
    description: "National Eligibility cum Entrance Test for Medical",
    daysLeft: 65
  },
  {
    id: 6,
    title: "Class 12 Board Exams",
    date: "Feb 15, 2025",
    endDate: "Apr 10, 2025",
    type: "Board Exam",
    status: "upcoming",
    priority: "critical",
    description: "CBSE Class 12 Board Examinations",
    daysLeft: 70
  }
];

const TimelineTracker = () => {
  const getStatusColor = (status: string) => {
    const colors = {
      completed: "bg-success/10 text-success border-success/20",
      upcoming: "bg-warning/10 text-warning border-warning/20",
      future: "bg-muted text-muted-foreground border-muted-foreground/20",
      critical: "bg-destructive/10 text-destructive border-destructive/20"
    };
    return colors[status as keyof typeof colors] || colors.future;
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      critical: "bg-destructive text-destructive-foreground",
      high: "bg-warning text-warning-foreground",
      medium: "bg-primary text-primary-foreground",
      low: "bg-muted text-muted-foreground"
    };
    return colors[priority as keyof typeof colors] || colors.medium;
  };

  const getStatusIcon = (status: string) => {
    const icons = {
      completed: <CheckCircle className="w-4 h-4" />,
      upcoming: <Clock className="w-4 h-4" />,
      future: <Calendar className="w-4 h-4" />,
      critical: <AlertCircle className="w-4 h-4" />
    };
    return icons[status as keyof typeof icons] || icons.future;
  };

  const sortedEvents = [...timelineEvents].sort((a, b) => {
    if (a.status === 'critical') return -1;
    if (b.status === 'critical') return 1;
    if (a.status === 'upcoming' && b.status !== 'upcoming') return -1;
    if (b.status === 'upcoming' && a.status !== 'upcoming') return 1;
    return a.daysLeft - b.daysLeft;
  });

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Timeline Tracker</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Never miss important dates! Track admission deadlines, entrance exam dates, 
            scholarship applications, and counseling schedules.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="edu-card text-center animate-bounce-in">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-warning" />
                </div>
                <h3 className="font-bold text-2xl text-warning">
                  {sortedEvents.filter(e => e.status === 'upcoming').length}
                </h3>
                <p className="text-sm text-muted-foreground">Upcoming Deadlines</p>
              </CardContent>
            </Card>

            <Card className="edu-card text-center animate-bounce-in" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-bold text-2xl text-destructive">
                  {sortedEvents.filter(e => e.priority === 'critical' || e.priority === 'high').length}
                </h3>
                <p className="text-sm text-muted-foreground">High Priority</p>
              </CardContent>
            </Card>

            <Card className="edu-card text-center animate-bounce-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-bold text-2xl text-success">
                  {sortedEvents.filter(e => e.status === 'completed').length}
                </h3>
                <p className="text-sm text-muted-foreground">Completed</p>
              </CardContent>
            </Card>
          </div>

          {/* Timeline Events */}
          <div className="space-y-4">
            {sortedEvents.map((event, index) => (
              <Card 
                key={event.id}
                className={`edu-card animate-slide-up ${event.priority === 'critical' ? 'ring-2 ring-destructive/20' : ''}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`p-2 rounded-lg ${getStatusColor(event.status)}`}>
                          {getStatusIcon(event.status)}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 ml-12 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>{event.date} - {event.endDate}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {event.type}
                        </Badge>
                      </div>
                    </div>

                    <div className="text-right space-y-2">
                      <Badge className={getPriorityColor(event.priority)}>
                        {event.priority.toUpperCase()}
                      </Badge>
                      
                      {event.status === 'upcoming' && event.daysLeft > 0 && (
                        <p className="text-sm">
                          <span className="font-semibold text-warning">{event.daysLeft}</span>
                          <span className="text-muted-foreground"> days left</span>
                        </p>
                      )}
                      
                      {event.status === 'completed' && (
                        <p className="text-sm text-success font-semibold">Completed</p>
                      )}

                      {event.status === 'critical' && (
                        <Button size="sm" className="btn-success">
                          <Bell className="w-4 h-4 mr-1" />
                          Remind Me
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="btn-hero">
              Set Up Notifications
              <Bell className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineTracker;