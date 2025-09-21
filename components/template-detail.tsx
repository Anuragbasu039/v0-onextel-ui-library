"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { Copy, Check, Eye, Github, Download } from "lucide-react"

interface TemplateDetailProps {
  template: {
    title: string
    description: string
    category: string
    framework: string
    features: string[]
    image: string
    demoUrl: string
    githubUrl: string
    author: string
    longDescription: string
    installation: string
    dependencies: string[]
  }
}

export function TemplateDetail({ template }: TemplateDetailProps) {
  const [copied, setCopied] = useState(false)

  const copyInstallation = async () => {
    await navigator.clipboard.writeText(template.installation)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>Templates</span>
          <span>/</span>
          <span>{template.category}</span>
          <span>/</span>
          <span>{template.title}</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">{template.title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{template.description}</p>

        <div className="flex flex-wrap items-center gap-4">
          <Button size="lg" asChild>
            <a href={template.demoUrl} target="_blank" rel="noopener noreferrer">
              <Eye className="h-4 w-4 mr-2" />
              Live Preview
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={template.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View Source
            </a>
          </Button>
          <Button size="lg" variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Download ZIP
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Preview Image */}
          <Card>
            <CardContent className="p-0">
              <img
                src={template.image || "/placeholder.svg"}
                alt={template.title}
                className="w-full h-auto rounded-lg"
              />
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="dependencies">Dependencies</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>About this template</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none text-foreground">
                    {template.longDescription.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="installation" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Getting Started</CardTitle>
                  <CardDescription>Follow these steps to get the template running locally.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Button size="sm" className="absolute right-4 top-4 z-10" onClick={copyInstallation}>
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      {copied ? "Copied!" : "Copy"}
                    </Button>
                    <CodeBlock code={template.installation} language="bash" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dependencies" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Dependencies</CardTitle>
                  <CardDescription>This template uses the following packages and libraries.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {template.dependencies.map((dep) => (
                      <div key={dep} className="flex items-center gap-2 p-2 rounded-md bg-muted/50">
                        <code className="text-sm font-mono">{dep}</code>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Template Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Template Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Category</label>
                <p className="text-sm">{template.category}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Framework</label>
                <p className="text-sm">{template.framework}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Author</label>
                <p className="text-sm">{template.author}</p>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {template.features.map((feature) => (
                  <Badge key={feature} variant="secondary">
                    {feature}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" asChild>
                <a href={template.demoUrl} target="_blank" rel="noopener noreferrer">
                  <Eye className="h-4 w-4 mr-2" />
                  Live Preview
                </a>
              </Button>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <a href={template.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Download ZIP
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
