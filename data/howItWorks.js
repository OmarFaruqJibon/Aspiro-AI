import { LayoutDashboard, FilePlus2, BatteryPlus, RailSymbol } from "lucide-react";

export const howItWorks = [
  {
    title: "Personalized Onboarding",
    description: "Provide your industry and expertise details to receive tailored career insights and AI-driven guidance.",
    icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
  },
  {
    title: "Build Career Documents",
    description: "Generate ATS-friendly resumes and compelling cover letters tailored to your job applications with AI-powered precision.",
    icon: <FilePlus2 className="w-8 h-8 text-primary" />,
  },
  {
    title: "Ace Your Interviews",
    description:
      "Practice AI-powered mock interviews designed for your role, get instant feedback, and boost your confidence.",
    icon: <BatteryPlus className="w-8 h-8 text-primary" />,
  },
  {
    title: "Track Your Progress",
    description: "Stay on top of your growth with detailed performance analytics and insights to refine your career strategy.",
    icon: <RailSymbol className="w-8 h-8 text-primary" />,
  },
];
