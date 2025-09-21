"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { ComponentShowcase } from "@/components/component-showcase"
import { ComponentSidebar } from "@/components/component-sidebar"

export default function ComponentsPage() {
  const [activeComponent, setActiveComponent] = useState("Button")

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container-fluid">
        <div className="flex">
          <ComponentSidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
          <main className="flex-1 p-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Components</h1>
                <p className="text-xl text-muted-foreground">
                  Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable.
                  Open Source.
                </p>
              </div>
              <ComponentShowcase activeComponent={activeComponent} />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
