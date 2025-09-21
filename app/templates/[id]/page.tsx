import { Navigation } from "@/components/navigation"
import { TemplateDetail } from "@/components/template-detail"
import { notFound } from "next/navigation"

const templates = {
  "dashboard-pro": {
    title: "Dashboard Pro",
    description:
      "A comprehensive admin dashboard with charts, tables, and user management. Perfect for SaaS applications.",
    category: "Dashboard",
    framework: "Next.js",
    features: ["Dark Mode", "TypeScript", "Responsive", "Authentication"],
    image: "/modern-dashboard.png",
    demoUrl: "#",
    githubUrl: "#",
    author: "Onextel",
    longDescription: `Dashboard Pro is a comprehensive admin dashboard template built with Next.js and TypeScript. It includes everything you need to build a modern SaaS application including user management, analytics charts, data tables, and more.

Features include:
- Fully responsive design that works on all devices
- Dark and light mode support with system preference detection
- TypeScript for better developer experience and type safety
- Authentication system with login, register, and password reset
- Role-based access control for different user types
- Interactive charts and data visualizations
- Advanced data tables with sorting, filtering, and pagination
- Form components with validation
- Notification system
- Settings and profile management pages`,
    installation: `# Clone the repository
git clone https://github.com/onextel/dashboard-pro.git

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run the development server
npm run dev`,
    dependencies: [
      "@next/font",
      "next",
      "react",
      "react-dom",
      "tailwindcss",
      "@radix-ui/react-*",
      "lucide-react",
      "recharts",
      "@tanstack/react-table",
    ],
  },
}

interface TemplatePageProps {
  params: {
    id: string
  }
}

export default function TemplatePage({ params }: TemplatePageProps) {
  const template = templates[params.id as keyof typeof templates]

  if (!template) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <TemplateDetail template={template} />
    </div>
  )
}
