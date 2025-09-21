import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { ArrowRight, Copy, Download, Palette, Zap, Shield, Code2 } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="container px-4 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="secondary" className="px-3 py-1">
            <span className="text-primary">v1.0</span> Now Available
          </Badge>

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              Build faster with <span className="text-primary">Onextel UI</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              A comprehensive collection of beautiful, accessible React components and templates. Copy, paste, and
              customize to build modern web applications in seconds.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/components">
                Browse Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/docs">View Documentation</Link>
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            <code className="bg-muted px-2 py-1 rounded text-xs">npm install @onextel/ui</code>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-16">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need to build</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional components, templates, and tools designed for modern development workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Copy className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Copy & Paste</CardTitle>
              <CardDescription>
                Simply copy the component code and paste it into your project. No complex setup required.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Fully Customizable</CardTitle>
              <CardDescription>
                Built with Tailwind CSS and CSS variables. Customize colors, spacing, and styling to match your brand.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Accessible</CardTitle>
              <CardDescription>
                All components follow WAI-ARIA guidelines and are tested with screen readers for maximum accessibility.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>TypeScript Ready</CardTitle>
              <CardDescription>
                Built with TypeScript from the ground up. Get full type safety and excellent developer experience.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Framework Agnostic</CardTitle>
              <CardDescription>
                Works with Next.js, Vite, Remix, and any React-based framework. Use anywhere React runs.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Ready-made Templates</CardTitle>
              <CardDescription>
                Complete page templates and application layouts to jumpstart your next project.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Component Preview Section */}
      <section className="container px-4 py-16">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Start building in seconds</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kickstart your next project with components built by us and our community.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild>
            <Link href="/components">View all components</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://github.com/onextel/ui" target="_blank">
              Official GitHub library
            </Link>
          </Button>
        </div>

        {/* Component Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="h-3 w-3 bg-muted rounded-full" />
                <div className="h-3 w-3 bg-muted rounded-full" />
                <div className="h-3 w-3 bg-muted rounded-full" />
              </div>
              <CardTitle className="text-lg">Button Components</CardTitle>
              <CardDescription>
                A collection of button variants including primary, secondary, outline, and ghost styles.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full">Primary Button</Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Outline Button
                </Button>
                <Button variant="ghost" className="w-full">
                  Ghost Button
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="h-3 w-3 bg-muted rounded-full" />
                <div className="h-3 w-3 bg-muted rounded-full" />
                <div className="h-3 w-3 bg-muted rounded-full" />
              </div>
              <CardTitle className="text-lg">Form Components</CardTitle>
              <CardDescription>
                Input fields, textareas, selects, and form validation components for building forms.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-md text-sm"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-md text-sm h-20 resize-none"
                    placeholder="Your message..."
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="h-3 w-3 bg-muted rounded-full" />
                <div className="h-3 w-3 bg-muted rounded-full" />
                <div className="h-3 w-3 bg-muted rounded-full" />
              </div>
              <CardTitle className="text-lg">Navigation</CardTitle>
              <CardDescription>
                Headers, sidebars, breadcrumbs, and navigation components for app structure.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 p-2 rounded hover:bg-muted/50 transition-colors">
                  <div className="h-4 w-4 bg-primary rounded-sm" />
                  <span className="text-sm">Dashboard</span>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded hover:bg-muted/50 transition-colors">
                  <div className="h-4 w-4 bg-muted rounded-sm" />
                  <span className="text-sm">Analytics</span>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded hover:bg-muted/50 transition-colors">
                  <div className="h-4 w-4 bg-muted rounded-sm" />
                  <span className="text-sm">Settings</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-16">
        <Card className="bg-card/50 border-border/50">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to start building?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of developers using Onextel UI to build beautiful, accessible applications faster than
              ever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/components">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/onextel/ui" target="_blank">
                  Star on GitHub
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40">
        <div className="container px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-6 w-6 bg-primary rounded-sm" />
              <span className="font-bold">Onextel UI</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link href="/docs" className="hover:text-foreground transition-colors">
                Documentation
              </Link>
              <Link href="/components" className="hover:text-foreground transition-colors">
                Components
              </Link>
              <Link href="/templates" className="hover:text-foreground transition-colors">
                Templates
              </Link>
              <Link
                href="https://github.com/onextel/ui"
                target="_blank"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>© 2024 Onextel UI. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
