"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { Users, Award, Target, Briefcase, PenTool, Code, Megaphone, FileText, DollarSign, Filter, Search } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  department: string;
  level: 'overall' | 'head' | 'core' | 'coordinator' | 'executive';
}
  const getDepartmentIcon = (department: string) => {
    switch (department.toLowerCase()) {
      case 'event management': return <Target className="h-5 w-5" />;
      case 'pr': return <Megaphone className="h-5 w-5" />;
      case 'documentation': return <FileText className="h-5 w-5" />;
      case 'web development': return <Code className="h-5 w-5" />;
      case 'sponsorship': return <DollarSign className="h-5 w-5" />;
      case 'design': return <PenTool className="h-5 w-5" />;
      default: return <Users className="h-5 w-5" />;
    }
  };

  const getDepartmentColor = (department: string) => {
    switch (department.toLowerCase()) {
      case 'event management': return 'bg-blue-500/10 text-blue-600 border-blue-200';
      case 'pr': return 'bg-purple-500/10 text-purple-600 border-purple-200';
      case 'documentation': return 'bg-green-500/10 text-green-600 border-green-200';
      case 'web development': return 'bg-orange-500/10 text-orange-600 border-orange-200';
      case 'sponsorship': return 'bg-red-500/10 text-red-600 border-red-200';
      case 'design': return 'bg-pink-500/10 text-pink-600 border-pink-200';
      default: return 'bg-gray-500/10 text-gray-600 border-gray-200';
    }
  };

function TeamMemberCard({ member }: { member: TeamMember }) {

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'overall': return 'bg-gradient-to-r from-brand-blue to-brand-teal text-white border-transparent';
      case 'head': return 'bg-yellow-500/10 text-yellow-600 border-yellow-200';
      case 'core': return 'bg-indigo-500/10 text-indigo-600 border-indigo-200';
      case 'coordinator': return 'bg-teal-500/10 text-teal-600 border-teal-200';
      case 'executive': return 'bg-slate-500/10 text-slate-600 border-slate-200';
      default: return 'bg-gray-500/10 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className="group bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-brand-blue/30">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${getDepartmentColor(member.department)} border`}>
            {getDepartmentIcon(member.department)}
          </div>
          <div>
            <h3 className="font-bold text-lg group-hover:text-brand-blue transition-colors">{member.name}</h3>
            <p className="text-sm text-muted-foreground">{member.role}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelBadge(member.level)}`}>
          {member.level.charAt(0).toUpperCase() + member.level.slice(1)}
        </span>
      </div>
      
      <div className="flex items-center justify-between">
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDepartmentColor(member.department)}`}>
          {member.department}
        </span>
        <div className="w-8 h-8 bg-gradient-to-r from-brand-blue to-brand-teal rounded-full flex items-center justify-center text-white text-sm font-bold">
          {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </div>
      </div>
    </div>
  );
}

function TeamSection({ title, members, icon, description }: {
  title: string;
  members: TeamMember[];
  icon: React.ReactNode;
  description: string;
}) {
  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-brand-blue to-brand-teal text-white rounded-lg">
            {icon}
          </div>
          <h2 className="text-3xl font-heading font-bold">{title}</h2>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
        <div className="mt-4 text-sm font-medium text-brand-blue">
          {members.length} Member{members.length !== 1 ? 's' : ''}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}

function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const teamMembers: TeamMember[] = [
    // Overall Coordinators
    { name: 'Jay Prakash', role: 'Overall Coordinator', department: 'Event Management', level: 'overall' },
    { name: 'Gopal Agrawal', role: 'Overall Coordinator', department: 'Event Management', level: 'overall' },
    
    // Head Coordinators
    { name: 'Sanjog Mohapatra', role: 'Head Coordinator', department: 'PR', level: 'head' },
    { name: 'Anmol Agrawal', role: 'Head Coordinator', department: 'Documentation', level: 'head' },
    
    // Core Coordinators
    { name: 'Shobhit Agrawal', role: 'Core Coordinator', department: 'Web Development', level: 'core' },
    { name: 'Shubham Sonkar', role: 'Core Coordinator', department: 'Event Management', level: 'core' },
    { name: 'Aman Kumar Rattan', role: 'Core Coordinator', department: 'Event Management', level: 'core' },
    { name: 'Roshini Chouhan', role: 'Core Coordinator', department: 'Event Management', level: 'core' },
    { name: 'Khomendra Sahu', role: 'Core Coordinator', department: 'Event Management', level: 'core' },
    { name: 'Samridhi Singh', role: 'Core Coordinator', department: 'Event Management', level: 'core' },
    { name: 'Rapolu Vivek', role: 'Core Coordinator', department: 'Event Management', level: 'core' },
    { name: 'Tekeshwar Hirwani', role: 'Core Coordinator', department: 'Event Management', level: 'core' },
    { name: 'Mukesh Kumar Sahu', role: 'Core Coordinator', department: 'Event Management', level: 'core' },
    { name: 'Suryakant Kad', role: 'Core Coordinator', department: 'PR', level: 'core' },
    { name: 'Samyak Meshram', role: 'Core Coordinator', department: 'Sponsorship', level: 'core' },
    { name: 'Shubhanshu Shubham', role: 'Core Coordinator', department: 'Sponsorship', level: 'core' },
    { name: 'Gautam Raghwani', role: 'Core Coordinator', department: 'Design', level: 'core' },
    { name: 'Anushka Gupta', role: 'Core Coordinator', department: 'Design', level: 'core' },
    { name: 'Aditi Gajpal', role: 'Core Coordinator', department: 'Documentation', level: 'core' },
    { name: 'Aditya Dhote', role: 'Core Coordinator', department: 'Documentation', level: 'core' },
    { name: 'Sumit Kumar Dubey', role: 'Core Coordinator', department: 'Documentation', level: 'core' },
    { name: 'Sanjeev Kumar Yadav', role: 'Core Coordinator', department: 'Documentation', level: 'core' },
    
    // Coordinators
    { name: 'Darshan Kumar', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Wise Khan', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Sampad Shubhadarshi Pradhan', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Gourav Banik', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Mohit Dua', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Mohammad Anwaar Ahmed', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Sakshi Mithilesh Pandey', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Shashank Shekhar', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Azhar Ansari', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Mridul Nilotpal', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Yash Khetan', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Anish Patel', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Ashish Anand', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Dipendra Kumar Yadav', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Piyush Kumar Rakesh', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Abhilash Kar', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Saransh Sharma', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Sushil Kumar', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Hrushikesh Ratnakar Kadam', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Rajat Bajari', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Tanmay Chandorkar', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Utkarsh Patel', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Devika Uike', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Shilpa Latiyare', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Aditya Patley', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Aayush Joshi', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Piyush Ganvir', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Archisha De', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Aditya Prasad', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Apoorv Pramod Sharma', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Yash Gupta', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Samruddhi Thakare', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Vartika Kumari', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Abhishek Mahato', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Abhisek Mallick', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Dilpreet Kaur Bhatia', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Sushmita Kurella', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Akash Soni', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Hari Jain', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Ayan Paliwal', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Saurabh Sachdeva', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Prince Tripathi', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Hardik Gupta', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Aarti Bhagat', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Meghna Sahu', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Pramod Prasad', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Shivam Upadhyay', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Ayush Pratap Singh', role:'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Aman Kumar Singh', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Manish Nandurkar', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'M B Sai Krishna', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Divya Nishad', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Ayush Selot', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Vinayakgouda', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Yasmeen Mahilang', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Prakhar Borkar', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Muhammed Yaseen Ahmad', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Yash Raj', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Aashutosh Jaiswal', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Ramatenki Keerthi', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Pranay Agrawal', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Tarun Gupta', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Ashutosh Kumar Gupta', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Yashraj Srivastava', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Bhumireddy Sahithya', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Sumit Soni', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Vipul Kumar Kushwaha', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Shubham Kataria', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Prakarsh Verma', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Ishan Chiripal', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Tanmay Patel', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Pranjal Naman', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Mansi Agarwal', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Sumaran Kumar', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'M Sai Arunima', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Vicky Kumar', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Chandrakant Sahu', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Siddharth Billaiya', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'P G Shankar', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Skandh Garg', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Mayank Prakash', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Kritesh Moyal', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Koyna Jatwar', role: 'Coordinator', department: 'General', level: 'coordinator' },
    { name: 'Prashansa Dhole', role: 'Coordinator', department: 'General', level: 'coordinator' },
    
    // Executives
    { name: 'Sanchit Singh', role: 'Executive', department: 'General', level: 'executive' },
    { name: 'Ajeet Kumar', role: 'Executive', department: 'General', level: 'executive' },
    { name: 'Diksha Ramesh Manghrani', role: 'Executive', department: 'General', level: 'executive' },
    { name: 'Sandeep Kumar', role: 'Executive', department: 'General', level: 'executive' },
    { name: 'Pothuraju Hemanth', role: 'Executive', department: 'General', level: 'executive' },
    { name: 'Hinesh Singh Thakur', role: 'Executive', department: 'General', level: 'executive' },
    { name: 'Khushi Hirwani', role: 'Executive', department: 'General', level: 'executive' },
    { name: 'Govind Kumar Dhurve', role: 'Executive', department: 'General', level: 'executive' },
    { name: 'Dev Narain Pandey', role: 'Executive', department: 'General', level: 'executive' },
    { name: 'Rishi Singh Rajput', role: 'Executive', department: 'General', level: 'executive' }
  ];

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || member.department.toLowerCase() === selectedDepartment.toLowerCase();
    const matchesLevel = selectedLevel === 'all' || member.level === selectedLevel;
    
    return matchesSearch && matchesDepartment && matchesLevel;
  });

  const overallCoordinators = filteredMembers.filter(m => m.level === 'overall');
  const headCoordinators = filteredMembers.filter(m => m.level === 'head');
  const coreCoordinators = filteredMembers.filter(m => m.level === 'core');
  const coordinators = filteredMembers.filter(m => m.level === 'coordinator');
  const executives = filteredMembers.filter(m => m.level === 'executive');

  const departments = [...new Set(teamMembers.map(member => member.department))];
  const levels = ['overall', 'head', 'core', 'coordinator', 'executive'];

  // Calculate department statistics
  const departmentStats = departments.map(dept => {
    const deptMembers = teamMembers.filter(m => m.department === dept);
    return {
      name: dept,
      count: deptMembers.length,
      icon: getDepartmentIcon(dept),
      color: getDepartmentColor(dept)
    };
  });
  return (
    <>
      <Navbar/>
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-brand-blue to-brand-teal text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h6 className="text-white/90 font-medium mb-2">MEET OUR TEAM</h6>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Innovation Leaders</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-white/90 mb-6">
                Our dedicated team of passionate innovators, coordinators, and leaders working together 
                to foster creativity, organize impactful events, and build a thriving innovation ecosystem.
              </p>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-white/80">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">{teamMembers.length}</div>
                    <div className="text-sm">Total Members</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{departments.length}</div>
                    <div className="text-sm">Departments</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{coreCoordinators.length}</div>
                    <div className="text-sm">Core Team</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{coordinators.length}</div>
                    <div className="text-sm">Coordinators</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{executives.length}</div>
                    <div className="text-sm">Executives</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search team members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Filters:</span>
            </div>
            
            <select 
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            >
              <option value="all">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            
            <select 
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
            >
              <option value="all">All Levels</option>
              {levels.map(level => (
                <option key={level} value={level}>
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </option>
              ))}
            </select>
            
            <div className="text-sm text-muted-foreground">
              {filteredMembers.length} member{filteredMembers.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {overallCoordinators.length > 0 && (
            <TeamSection
              title="Overall Coordinators"
              members={overallCoordinators}
              icon={<Award className="h-6 w-6" />}
              description="Leading the entire innovation ecosystem with strategic vision and operational excellence"
            />
          )}

          {headCoordinators.length > 0 && (
            <TeamSection
              title="Head Coordinators"
              members={headCoordinators}
              icon={<Users className="h-6 w-6" />}
              description="Department heads driving specialized initiatives and cross-functional collaboration"
            />
          )}

          {coreCoordinators.length > 0 && (
            <TeamSection
              title="Core Coordinators"
              members={coreCoordinators}
              icon={<Target className="h-6 w-6" />}
              description="Key team members executing critical functions across various domains"
            />
          )}

          {coordinators.length > 0 && (
            <TeamSection
              title="Coordinators"
              members={coordinators}
              icon={<Briefcase className="h-6 w-6" />}
              description="Dedicated coordinators ensuring smooth execution of events and daily operations"
            />
          )}

          {executives.length > 0 && (
            <TeamSection
              title="Executives"
              members={executives}
              icon={<Users className="h-6 w-6" />}
              description="Supporting team members contributing to various aspects of our innovation initiatives"
            />
          )}

          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <div className="mb-4">
                <Users className="h-12 w-12 mx-auto text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No team members found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters to find team members.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDepartment('all');
                  setSelectedLevel('all');
                }}
                className="text-brand-blue hover:underline font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Department Breakdown */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Departments</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized teams working collaboratively across different domains to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {departmentStats.map((dept, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg ${dept.color} border flex items-center justify-center`}>
                  {dept.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{dept.name}</h3>
                <div className="text-2xl font-bold text-brand-blue mb-1">{dept.count}</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-r from-brand-blue to-brand-teal rounded-xl p-8 text-white">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Team at a Glance</h3>
              <p className="text-white/90">Our diverse team composition across different roles and departments</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Award className="h-8 w-8 mx-auto mb-2" />
                <div className="text-xl font-bold">{overallCoordinators.length}</div>
                <div className="text-sm text-white/80">Overall</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="h-8 w-8 mx-auto mb-2" />
                <div className="text-xl font-bold">{headCoordinators.length}</div>
                <div className="text-sm text-white/80">Heads</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Target className="h-8 w-8 mx-auto mb-2" />
                <div className="text-xl font-bold">{teamMembers.filter(m => m.level === 'core').length}</div>
                <div className="text-sm text-white/80">Core</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Briefcase className="h-8 w-8 mx-auto mb-2" />
                <div className="text-xl font-bold">{teamMembers.filter(m => m.level === 'coordinator').length}</div>
                <div className="text-sm text-white/80">Coordinators</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="h-8 w-8 mx-auto mb-2" />
                <div className="text-xl font-bold">{teamMembers.filter(m => m.level === 'executive').length}</div>
                <div className="text-sm text-white/80">Executives</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-4">Join Our Innovation Journey</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Interested in being part of our dynamic team? We&apos;re always looking for passionate individuals 
              who want to contribute to innovation and make a meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-brand-blue to-brand-teal text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                Get Involved
              </button>
              <button className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}

export default Page;
