"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Eye } from "lucide-react"
import Link from "next/link"

const templates = [
  {
    id: "dashboard-pro",
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
  },
  {
    id: "saas-landing",
    title: "SaaS Landing Page",
    description: "Modern landing page template for SaaS products with pricing, testimonials, and feature sections.",
    category: "Landing Page",
    framework: "Next.js",
    features: ["Dark Mode", "Responsive", "Animations"],
    image: "/saas-landing-page.png",
    demoUrl: "#",
    githubUrl: "#",
    author: "Onextel",
  },
  {
    id: "ecommerce-store",
    title: "E-commerce Store",
    description: "Complete e-commerce solution with product catalog, shopping cart, and checkout process.",
    category: "E-commerce",
    framework: "Next.js",
    features: ["TypeScript", "Database", "API Routes", "Authentication"],
    image: "/ecommerce-store-interface.png",
    demoUrl: "#",
    githubUrl: "#",
    author: "Community",
  },
  {
    id: "blog-template",
    title: "Modern Blog",
    description: "Clean and minimal blog template with markdown support, tags, and search functionality.",
    category: "Blog",
    framework: "Next.js",
    features: ["Dark Mode", "TypeScript", "Responsive"],
    image: "/modern-blog-layout.png",
    demoUrl: "#",
    githubUrl: "#",
    author: "Onextel",
  },
  {
    id: "portfolio-creative",
    title: "Creative Portfolio",
    description: "Stunning portfolio template for designers and developers with project showcases and contact forms.",
    category: "Portfolio",
    framework: "Next.js",
    features: ["Animations", "Responsive", "Dark Mode"],
    image: "/creative-portfolio-design.png",
    demoUrl: "#",
    githubUrl: "#",
    author: "Community",
  },
  {
    id: "auth-pages",
    title: "Authentication Pages",
    description: "Complete authentication flow with login, register, forgot password, and email verification pages.",
    category: "Authentication",
    framework: "Next.js",
    features: ["TypeScript", "Authentication", "Responsive"],
    image: "/authentication-pages-ui.jpg",
    demoUrl: "#",
    githubUrl: "#",
    author: "Onextel",
  },
]

export function TemplateGallery() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">All Templates</h2>
          <p className="text-muted-foreground">{templates.length} templates available</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Github className="h-4 w-4 mr-2" />
            Official GitHub library
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card key={template.id} className="group hover:shadow-lg transition-all duration-200">
            <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
              <img
                src={template.image || "/placeholder.svg"}
                alt={template.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{template.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Badge variant="secondary" className="text-xs">
                      {template.category}
                    </Badge>
                    <span>•</span>
                    <span>by {template.author}</span>
                  </div>
                </div>
              </div>
              <CardDescription className="text-sm">{template.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {template.features.slice(0, 3).map((feature) => (
                    <Badge key={feature} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {template.features.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{template.features.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <Button size="sm" className="flex-1" asChild>
                    <Link href={template.demoUrl}>
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={template.githubUrl}>
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`/templates/${template.id}`}>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline">Load More Templates</Button>
      </div>
    </div>
  )
}
