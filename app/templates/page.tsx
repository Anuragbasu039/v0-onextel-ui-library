import { Navigation } from "@/components/navigation"
import { TemplateGallery } from "@/components/template-gallery"
import { TemplateFilters } from "@/components/template-filters"

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Templates</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Jumpstart your app development process with pre-built solutions from Onextel and our community. Copy, paste,
            and customize to build modern web applications in minutes.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64">
            <TemplateFilters />
          </aside>
          <main className="flex-1">
            <TemplateGallery />
          </main>
        </div>
      </div>
    </div>
  )
}
