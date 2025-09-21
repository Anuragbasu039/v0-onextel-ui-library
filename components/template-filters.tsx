"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const categories = [
  "All",
  "Dashboard",
  "Landing Page",
  "E-commerce",
  "Blog",
  "Portfolio",
  "SaaS",
  "Authentication",
  "Admin Panel",
]

const frameworks = ["Next.js", "React", "Vite", "Remix"]

const features = ["Dark Mode", "Responsive", "TypeScript", "Authentication", "Database", "API Routes", "Animations"]

export function TemplateFilters() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  return (
    <div className="space-y-6">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Search Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                size="sm"
                className="w-full justify-start"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Frameworks */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Framework</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {frameworks.map((framework) => (
              <div key={framework} className="flex items-center space-x-2">
                <Checkbox
                  id={framework}
                  checked={selectedFrameworks.includes(framework)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedFrameworks([...selectedFrameworks, framework])
                    } else {
                      setSelectedFrameworks(selectedFrameworks.filter((f) => f !== framework))
                    }
                  }}
                />
                <label
                  htmlFor={framework}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {framework}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <Checkbox
                  id={feature}
                  checked={selectedFeatures.includes(feature)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedFeatures([...selectedFeatures, feature])
                    } else {
                      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature))
                    }
                  }}
                />
                <label
                  htmlFor={feature}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {feature}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
