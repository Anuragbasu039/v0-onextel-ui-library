"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const componentCategories = [
  {
    name: "Getting Started",
    items: ["Installation", "Theming", "Changelog"],
  },
  {
    name: "Layout",
    items: ["Container", "Grid", "Stack", "Divider", "Separator", "Aspect Ratio", "Flex"],
  },
  {
    name: "Forms",
    items: [
      "Button",
      "Input",
      "Textarea",
      "Select",
      "Checkbox",
      "Radio",
      "Switch",
      "Slider",
      "Label",
      "Form",
      "Login Form",
      "Signup Form",
      "Contact Form",
      "Newsletter Form",
    ],
  },
  {
    name: "Data Display",
    items: ["Avatar", "Badge", "Card", "Table", "List", "Tooltip", "Popover", "Progress", "Calendar", "Chart", "Stats"],
  },
  {
    name: "Feedback",
    items: ["Alert", "Toast", "Dialog", "Sheet", "Loading", "Skeleton", "Spinner", "Error Boundary"],
  },
  {
    name: "Media",
    items: ["Image", "Video", "Gallery", "Carousel", "Lightbox", "File Upload"],
  },
  {
    name: "Overlay",
    items: ["Modal", "Drawer", "Dropdown", "Context Menu", "Hover Card", "Combobox"],
  },
  {
    name: "E-commerce",
    items: ["Product Card", "Shopping Cart", "Checkout", "Price Display", "Rating", "Wishlist"],
  },
  {
    name: "Marketing",
    items: ["CTA Section", "Feature Grid", "Testimonials", "Pricing", "FAQ", "Team", "Logo Cloud"],
  },
  {
    name: "Blog",
    items: ["Article Card", "Blog Header", "Author Bio", "Related Posts", "Comments", "Tags"],
  },
  {
    name: "Navigation",
    items: ["Navbar", "Sidebar", "Breadcrumb", "Menu", "Pagination", "Tabs", "Command", "Navigation Menu"],
  },
]

interface ComponentSidebarProps {
  activeComponent: string
  setActiveComponent: (component: string) => void
}

export function ComponentSidebar({ activeComponent, setActiveComponent }: ComponentSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState(() => {
    const category = componentCategories.find((cat) => cat.items.includes(activeComponent))
    return category?.name || "Forms"
  })

  const filteredCategories = componentCategories
    .map((category) => ({
      ...category,
      items: category.items.filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase())),
    }))
    .filter((category) => category.items.length > 0)

  const handleComponentClick = (item: string) => {
    setActiveComponent(item)
  }

  const handleCategoryClick = (categoryName: string) => {
    if (activeCategory === categoryName) {
      setActiveCategory("")
    } else {
      setActiveCategory(categoryName)
    }
  }

  return (
    <aside className="w-64 border-r border-border bg-card/50 h-[calc(100vh-3.5rem)]">
      <div className="p-4">
        <div className="relative mb-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="px-4 pb-4">
          {filteredCategories.map((category) => (
            <div key={category.name} className="mb-4">
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-between p-2 h-auto font-medium",
                  activeCategory === category.name && "bg-accent",
                )}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
                <ChevronRight
                  className={cn("h-4 w-4 transition-transform", activeCategory === category.name && "rotate-90")}
                />
              </Button>

              {activeCategory === category.name && (
                <div className="mt-2 space-y-1">
                  {category.items.map((item) => (
                    <Button
                      key={item}
                      variant="ghost"
                      size="sm"
                      className={cn(
                        "w-full justify-start pl-6 text-sm font-normal",
                        activeComponent === item && "bg-accent text-accent-foreground",
                      )}
                      onClick={() => handleComponentClick(item)}
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </aside>
  )
}
