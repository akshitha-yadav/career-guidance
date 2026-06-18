import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Star, Users, BookOpen, Wifi, Home, Search } from "lucide-react";

const colleges = [
  {
    id: 1,
    name: "Osmania University",
    location: "Hyderabad, Telangana",
    type: "State University",
    rating: 4.4,
    cutoff: "85%+",
    programs: ["B.A.", "B.Sc.", "B.Com", "B.Tech"],
    facilities: ["Hostel", "Library", "Labs", "WiFi"],
    fees: "₹8,000/year",
    distance: "3.2 km",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop"
  },
  {
    id: 2,
    name: "Kakatiya University",
    location: "Warangal, Telangana", 
    type: "State University",
    rating: 4.2,
    cutoff: "80%+",
    programs: ["B.Tech", "B.A.", "B.Sc.", "B.Com"],
    facilities: ["Hostel", "Library", "Sports", "WiFi"],
    fees: "₹6,500/year",
    distance: "145 km",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=300&h=200&fit=crop"
  },
  {
    id: 3,
    name: "Telangana University",
    location: "Nizamabad, Telangana",
    type: "State University",
    rating: 4.1,
    cutoff: "75%+",
    programs: ["B.A.", "B.Sc.", "B.Com", "BBA"],
    facilities: ["Library", "Computer Lab", "WiFi", "Canteen"],
    fees: "₹5,800/year",
    distance: "178 km",
    image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=300&h=200&fit=crop"
  },
  {
    id: 4,
    name: "JNTUH College of Engineering",
    location: "Hyderabad, Telangana",
    type: "Government College", 
    rating: 4.5,
    cutoff: "90%+",
    programs: ["B.Tech", "B.Arch"],
    facilities: ["Hostel", "Library", "Labs", "Sports", "WiFi"],
    fees: "₹12,000/year",
    distance: "8.5 km",
    image: "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=300&h=200&fit=crop"
  },
  {
    id: 5,
    name: "Government City College",
    location: "Hyderabad, Telangana",
    type: "Government College",
    rating: 4.0,
    cutoff: "70%+",
    programs: ["B.A.", "B.Sc.", "B.Com"],
    facilities: ["Library", "Computer Lab", "WiFi"],
    fees: "₹4,500/year",
    distance: "6.8 km",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop"
  },
  {
    id: 6,
    name: "Palamuru University",
    location: "Mahabubnagar, Telangana",
    type: "State University",
    rating: 3.9,
    cutoff: "65%+",
    programs: ["B.A.", "B.Sc.", "B.Com", "BBA"],
    facilities: ["Hostel", "Library", "Sports", "WiFi"],
    fees: "₹5,200/year",
    distance: "98 km",
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=300&h=200&fit=crop"
  }
];

const CollegeDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedProgram, setSelectedProgram] = useState("all");

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || college.type === selectedType;
    const matchesProgram = selectedProgram === "all" || college.programs.includes(selectedProgram);
    
    return matchesSearch && matchesType && matchesProgram;
  });

  const facilityIcons = {
    "Hostel": <Home className="w-4 h-4" />,
    "Library": <BookOpen className="w-4 h-4" />,
    "WiFi": <Wifi className="w-4 h-4" />,
    "Labs": <Users className="w-4 h-4" />,
    "Sports": <Users className="w-4 h-4" />,
    "Computer Lab": <Users className="w-4 h-4" />,
    "Canteen": <Users className="w-4 h-4" />
  };

  return (
    <section className="py-20 feature-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Government Colleges Directory</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find nearby government colleges with detailed information about programs, 
            facilities, cut-offs, and more.
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="edu-card">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search colleges or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="College Type" />
                  </SelectTrigger> 
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Central University">Central University</SelectItem>
                    <SelectItem value="State University">State University</SelectItem>
                    <SelectItem value="Government College">Government College</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                  <SelectTrigger>
                    <SelectValue placeholder="Program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Programs</SelectItem>
                    <SelectItem value="B.A.">B.A.</SelectItem>
                    <SelectItem value="B.Sc.">B.Sc.</SelectItem>
                    <SelectItem value="B.Com">B.Com</SelectItem>
                    <SelectItem value="B.Tech">B.Tech</SelectItem>
                    <SelectItem value="BBA">BBA</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* College Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredColleges.map((college, index) => (
            <Card 
              key={college.id}
              className="edu-card animate-slide-up overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex">
                <img 
                  src={college.image}
                  alt={college.name}
                  className="w-32 h-32 object-cover"
                />
                <div className="flex-1">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg leading-tight">{college.name}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{college.location}</span>
                          <span className="text-xs text-muted-foreground">• {college.distance}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-warning fill-current" />
                          <span className="text-sm font-semibold">{college.rating}</span>
                        </div>
                        <Badge variant="outline" className="text-xs mt-1">
                          {college.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0 space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="font-semibold text-xs text-muted-foreground">CUT-OFF</span>
                        <p className="font-semibold text-success">{college.cutoff}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-xs text-muted-foreground">FEES</span>
                        <p className="font-semibold">{college.fees}</p>
                      </div>
                    </div>

                    <div>
                      <span className="font-semibold text-xs text-muted-foreground">PROGRAMS</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {college.programs.map((program) => (
                          <Badge key={program} variant="secondary" className="text-xs">
                            {program}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="font-semibold text-xs text-muted-foreground">FACILITIES</span>
                      <div className="flex space-x-3 mt-1">
                        {college.facilities.slice(0, 4).map((facility) => (
                          <div key={facility} className="flex items-center space-x-1" title={facility}>
                            {facilityIcons[facility as keyof typeof facilityIcons]}
                            <span className="text-xs">{facility}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button size="sm" className="w-full btn-secondary-outline">
                      View Details
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No colleges found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedType("all");
                setSelectedProgram("all");
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}

        <div className="text-center mt-12">
          <Button size="lg" className="btn-hero">
            View All Colleges
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CollegeDirectory;