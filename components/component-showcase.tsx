"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CodeBlock } from "@/components/code-block"
import { Search, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const componentExamples = {
  // BUTTONS - 5 Variants
  Button: [
    {
      title: "Default Button",
      description: "Classic button with solid background and rounded corners.",
      preview: (
        <div className="flex flex-wrap gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button"

export function DefaultButton() {
  return (
    <div className="flex gap-4">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  )
}`,
    },
    {
      title: "Rounded Button",
      description: "Fully rounded buttons with pill-shaped design.",
      preview: (
        <div className="flex flex-wrap gap-4">
          <Button className="rounded-full">Rounded</Button>
          <Button variant="secondary" className="rounded-full">
            Secondary
          </Button>
          <Button variant="outline" className="rounded-full bg-transparent">
            Outline
          </Button>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button"

export function RoundedButton() {
  return (
    <div className="flex gap-4">
      <Button className="rounded-full">Rounded</Button>
      <Button variant="secondary" className="rounded-full">Secondary</Button>
    </div>
  )
}`,
    },
    {
      title: "Icon Button",
      description: "Buttons with icons for enhanced visual communication.",
      preview: (
        <div className="flex flex-wrap gap-4">
          <Button>
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
          <Button variant="outline">
            <ChevronRight className="w-4 h-4 mr-2" />
            Next
          </Button>
          <Button variant="ghost">
            <Search className="w-4 h-4" />
          </Button>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button"
import { Search, ChevronRight } from 'lucide-react'

export function IconButton() {
  return (
    <div className="flex gap-4">
      <Button><Search className="w-4 h-4 mr-2" />Search</Button>
      <Button variant="outline"><ChevronRight className="w-4 h-4 mr-2" />Next</Button>
    </div>
  )
}`,
    },
    {
      title: "Size Variants",
      description: "Different button sizes for various use cases.",
      preview: (
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button"

export function SizeVariants() {
  return (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}`,
    },
    {
      title: "Loading Button",
      description: "Buttons with loading states and spinners.",
      preview: (
        <div className="flex flex-wrap gap-4">
          <Button disabled>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            Loading...
          </Button>
          <Button variant="outline" disabled>
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
            Processing
          </Button>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button"

export function LoadingButton() {
  return (
    <Button disabled>
      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
      Loading...
    </Button>
  )
}`,
    },
  ],

  // INPUT - 5 Variants
  Input: [
    {
      title: "Default Input",
      description: "Standard input field with clean styling.",
      preview: (
        <div className="space-y-4 max-w-sm">
          <Input placeholder="Enter your name" />
          <Input type="email" placeholder="Enter your email" />
          <Input type="password" placeholder="Enter your password" />
        </div>
      ),
      code: `import { Input } from "@/components/ui/input"

export function DefaultInput() {
  return (
    <div className="space-y-4">
      <Input placeholder="Enter your name" />
      <Input type="email" placeholder="Enter your email" />
    </div>
  )
}`,
    },
    {
      title: "Input with Icons",
      description: "Input fields with leading and trailing icons.",
      preview: (
        <div className="space-y-4 max-w-sm">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-10" />
          </div>
          <div className="relative">
            <Input type="email" placeholder="Email" className="pr-10" />
            <ChevronRight className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      ),
      code: `import { Input } from "@/components/ui/input"
import { Search, ChevronRight } from 'lucide-react'

export function InputWithIcons() {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search..." className="pl-10" />
    </div>
  )
}`,
    },
    {
      title: "Floating Label",
      description: "Modern input with floating label animation.",
      preview: (
        <div className="space-y-6 max-w-sm">
          <div className="relative">
            <Input id="floating-name" placeholder=" " className="peer" />
            <label
              htmlFor="floating-name"
              className="absolute text-sm text-muted-foreground duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Full Name
            </label>
          </div>
        </div>
      ),
      code: `import { Input } from "@/components/ui/input"

export function FloatingLabel() {
  return (
    <div className="relative">
      <Input id="floating-name" placeholder=" " className="peer" />
      <label htmlFor="floating-name" className="absolute text-sm text-muted-foreground duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
        Full Name
      </label>
    </div>
  )
}`,
    },
    {
      title: "Validation States",
      description: "Input fields with error and success states.",
      preview: (
        <div className="space-y-4 max-w-sm">
          <div>
            <Input placeholder="Valid input" className="border-green-500 focus:border-green-500" />
            <p className="text-sm text-green-600 mt-1">✓ Looks good!</p>
          </div>
          <div>
            <Input placeholder="Invalid input" className="border-red-500 focus:border-red-500" />
            <p className="text-sm text-red-600 mt-1">✗ This field is required</p>
          </div>
        </div>
      ),
      code: `import { Input } from "@/components/ui/input"

export function ValidationStates() {
  return (
    <div className="space-y-4">
      <div>
        <Input placeholder="Valid input" className="border-green-500" />
        <p className="text-sm text-green-600 mt-1">✓ Looks good!</p>
      </div>
      <div>
        <Input placeholder="Invalid input" className="border-red-500" />
        <p className="text-sm text-red-600 mt-1">✗ This field is required</p>
      </div>
    </div>
  )
}`,
    },
    {
      title: "Different Sizes",
      description: "Input fields in various sizes.",
      preview: (
        <div className="space-y-4 max-w-sm">
          <Input placeholder="Small input" className="h-8 text-sm" />
          <Input placeholder="Default input" />
          <Input placeholder="Large input" className="h-12 text-lg" />
        </div>
      ),
      code: `import { Input } from "@/components/ui/input"

export function DifferentSizes() {
  return (
    <div className="space-y-4">
      <Input placeholder="Small input" className="h-8 text-sm" />
      <Input placeholder="Default input" />
      <Input placeholder="Large input" className="h-12 text-lg" />
    </div>
  )
}`,
    },
  ],

  // LOGIN FORM - 5 Variants
  "Login Form": [
    {
      title: "Classic Login",
      description: "Traditional login form with email and password.",
      preview: (
        <div className="max-w-sm mx-auto p-6 border rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
          <div className="space-y-4">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button className="w-full">Sign In</Button>
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <a href="#" className="text-primary hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ClassicLogin() {
  return (
    <div className="max-w-sm mx-auto p-6 border rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
      <div className="space-y-4">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button className="w-full">Sign In</Button>
      </div>
    </div>
  )
}`,
    },
    {
      title: "Modern Login",
      description: "Contemporary login form with social options.",
      preview: (
        <div className="max-w-sm mx-auto p-8 bg-card rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-2">Welcome back</h2>
          <p className="text-muted-foreground mb-6">Sign in to your account</p>
          <div className="space-y-4">
            <Button variant="outline" className="w-full bg-transparent">
              Continue with Google
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button className="w-full">Sign In</Button>
          </div>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ModernLogin() {
  return (
    <div className="max-w-sm mx-auto p-8 bg-card rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-2">Welcome back</h2>
      <p className="text-muted-foreground mb-6">Sign in to your account</p>
      <div className="space-y-4">
        <Button variant="outline" className="w-full bg-transparent">Continue with Google</Button>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button className="w-full">Sign In</Button>
      </div>
    </div>
  )
}`,
    },
    {
      title: "Minimal Login",
      description: "Clean and minimal login design.",
      preview: (
        <div className="max-w-xs mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Login</h2>
          </div>
          <div className="space-y-3">
            <Input type="email" placeholder="Email" className="border-0 border-b rounded-none" />
            <Input type="password" placeholder="Password" className="border-0 border-b rounded-none" />
            <Button className="w-full mt-6">Login</Button>
          </div>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function MinimalLogin() {
  return (
    <div className="max-w-xs mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Login</h2>
      </div>
      <div className="space-y-3">
        <Input type="email" placeholder="Email" className="border-0 border-b rounded-none" />
        <Input type="password" placeholder="Password" className="border-0 border-b rounded-none" />
        <Button className="w-full mt-6">Login</Button>
      </div>
    </div>
  )
}`,
    },
    {
      title: "Split Screen Login",
      description: "Login form with split screen design.",
      preview: (
        <div className="flex max-w-2xl mx-auto border rounded-lg overflow-hidden">
          <div className="flex-1 bg-primary p-8 text-primary-foreground">
            <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
            <p>Sign in to access your account and continue your journey with us.</p>
          </div>
          <div className="flex-1 p-8">
            <h3 className="text-xl font-semibold mb-6">Sign In</h3>
            <div className="space-y-4">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Button className="w-full">Sign In</Button>
            </div>
          </div>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SplitScreenLogin() {
  return (
    <div className="flex max-w-2xl mx-auto border rounded-lg overflow-hidden">
      <div className="flex-1 bg-primary p-8 text-primary-foreground">
        <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
        <p>Sign in to access your account.</p>
      </div>
      <div className="flex-1 p-8">
        <h3 className="text-xl font-semibold mb-6">Sign In</h3>
        <div className="space-y-4">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button className="w-full">Sign In</Button>
        </div>
      </div>
    </div>
  )
}`,
    },
    {
      title: "Card Stack Login",
      description: "Login form with layered card design.",
      preview: (
        <div className="relative max-w-sm mx-auto">
          <div className="absolute inset-0 bg-card rounded-lg transform rotate-1 shadow-sm"></div>
          <div className="absolute inset-0 bg-card rounded-lg transform -rotate-1 shadow-sm"></div>
          <div className="relative bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
            <div className="space-y-4">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Button className="w-full">Sign In</Button>
            </div>
          </div>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CardStackLogin() {
  return (
    <div className="relative max-w-sm mx-auto">
      <div className="absolute inset-0 bg-card rounded-lg transform rotate-1 shadow-sm"></div>
      <div className="relative bg-card p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <div className="space-y-4">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button className="w-full">Sign In</Button>
        </div>
      </div>
    </div>
  )
}`,
    },
  ],

  // NAVBAR - 5 Variants
  Navbar: [
    {
      title: "Classic Navbar",
      description: "Traditional navigation bar with logo and menu items.",
      preview: (
        <nav className="flex items-center justify-between p-4 border-b">
          <div className="font-bold text-xl">Logo</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-primary">
              Home
            </a>
            <a href="#" className="hover:text-primary">
              About
            </a>
            <a href="#" className="hover:text-primary">
              Services
            </a>
            <a href="#" className="hover:text-primary">
              Contact
            </a>
          </div>
          <Button>Get Started</Button>
        </nav>
      ),
      code: `import { Button } from "@/components/ui/button"

export function ClassicNavbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="font-bold text-xl">Logo</div>
      <div className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-primary">Home</a>
        <a href="#" className="hover:text-primary">About</a>
        <a href="#" className="hover:text-primary">Services</a>
        <a href="#" className="hover:text-primary">Contact</a>
      </div>
      <Button>Get Started</Button>
    </nav>
  )
}`,
    },
    {
      title: "Centered Navbar",
      description: "Navigation with centered logo and balanced layout.",
      preview: (
        <nav className="flex items-center justify-center p-4 border-b relative">
          <div className="absolute left-4">
            <Button variant="ghost" size="sm">
              Menu
            </Button>
          </div>
          <div className="font-bold text-xl">LOGO</div>
          <div className="absolute right-4 flex space-x-2">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button size="sm">Sign Up</Button>
          </div>
        </nav>
      ),
      code: `import { Button } from "@/components/ui/button"

export function CenteredNavbar() {
  return (
    <nav className="flex items-center justify-center p-4 border-b relative">
      <div className="absolute left-4">
        <Button variant="ghost" size="sm">Menu</Button>
      </div>
      <div className="font-bold text-xl">LOGO</div>
      <div className="absolute right-4 flex space-x-2">
        <Button variant="ghost" size="sm">Login</Button>
        <Button size="sm">Sign Up</Button>
      </div>
    </nav>
  )
}`,
    },
    {
      title: "Navbar with Search",
      description: "Navigation bar with integrated search functionality.",
      preview: (
        <nav className="flex items-center justify-between p-4 border-b">
          <div className="font-bold text-xl">Brand</div>
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-10" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Profile</Button>
            <Button variant="ghost">Settings</Button>
          </div>
        </nav>
      ),
      code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

export function NavbarWithSearch() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="font-bold text-xl">Brand</div>
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="pl-10" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost">Profile</Button>
      </div>
    </nav>
  )
}`,
    },
    {
      title: "Dropdown Navbar",
      description: "Navigation with dropdown menus for categories.",
      preview: (
        <nav className="flex items-center justify-between p-4 border-b">
          <div className="font-bold text-xl">Company</div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center hover:text-primary">
                Products <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center hover:text-primary">
                Solutions <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#" className="hover:text-primary">
              Pricing
            </a>
            <a href="#" className="hover:text-primary">
              Contact
            </a>
          </div>
          <Button>Try Free</Button>
        </nav>
      ),
      code: `import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

export function DropdownNavbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="font-bold text-xl">Company</div>
      <div className="hidden md:flex items-center space-x-6">
        <div className="relative group">
          <button className="flex items-center hover:text-primary">
            Products <ChevronRight className="ml-1 h-4 w-4" />
          </button>
        </div>
        <a href="#" className="hover:text-primary">Pricing</a>
      </div>
      <Button>Try Free</Button>
    </nav>
  )
}`,
    },
    {
      title: "Mobile-First Navbar",
      description: "Responsive navigation with mobile hamburger menu.",
      preview: (
        <nav className="flex items-center justify-between p-4 border-b">
          <div className="font-bold text-xl">App</div>
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <div className="space-y-1">
                <div className="w-5 h-0.5 bg-current"></div>
                <div className="w-5 h-0.5 bg-current"></div>
                <div className="w-5 h-0.5 bg-current"></div>
              </div>
            </Button>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-primary">
              Dashboard
            </a>
            <a href="#" className="hover:text-primary">
              Projects
            </a>
            <a href="#" className="hover:text-primary">
              Team
            </a>
            <Button>Account</Button>
          </div>
        </nav>
      ),
      code: `import { Button } from "@/components/ui/button"

export function MobileFirstNavbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="font-bold text-xl">App</div>
      <div className="md:hidden">
        <Button variant="ghost" size="sm">
          <div className="space-y-1">
            <div className="w-5 h-0.5 bg-current"></div>
            <div className="w-5 h-0.5 bg-current"></div>
            <div className="w-5 h-0.5 bg-current"></div>
          </div>
        </Button>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="hover:text-primary">Dashboard</a>
        <Button>Account</Button>
      </div>
    </nav>
  )
}`,
    },
  ],

  // SIDEBAR - 5 Variants
  Sidebar: [
    {
      title: "Default Sidebar",
      description: "Standard sidebar with navigation items.",
      preview: (
        <div className="flex h-64 border rounded-lg overflow-hidden">
          <aside className="w-64 bg-card border-r p-4">
            <div className="font-semibold mb-4">Navigation</div>
            <nav className="space-y-2">
              <a href="#" className="block p-2 rounded hover:bg-accent">
                Dashboard
              </a>
              <a href="#" className="block p-2 rounded hover:bg-accent">
                Projects
              </a>
              <a href="#" className="block p-2 rounded hover:bg-accent">
                Team
              </a>
              <a href="#" className="block p-2 rounded hover:bg-accent">
                Settings
              </a>
            </nav>
          </aside>
          <main className="flex-1 p-4">
            <h1 className="text-xl font-semibold">Main Content</h1>
            <p className="text-muted-foreground">Content area</p>
          </main>
        </div>
      ),
      code: `export function DefaultSidebar() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-card border-r p-4">
        <div className="font-semibold mb-4">Navigation</div>
        <nav className="space-y-2">
          <a href="#" className="block p-2 rounded hover:bg-accent">Dashboard</a>
          <a href="#" className="block p-2 rounded hover:bg-accent">Projects</a>
        </nav>
      </aside>
      <main className="flex-1 p-4">Content</main>
    </div>
  )
}`,
    },
    {
      title: "Collapsible Sidebar",
      description: "Sidebar that can be collapsed to save space.",
      preview: (
        <div className="flex h-64 border rounded-lg overflow-hidden">
          <aside className="w-16 bg-card border-r p-2">
            <div className="space-y-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-primary-foreground text-xs">
                D
              </div>
              <div className="w-8 h-8 bg-muted rounded flex items-center justify-center text-xs">P</div>
              <div className="w-8 h-8 bg-muted rounded flex items-center justify-center text-xs">T</div>
            </div>
          </aside>
          <main className="flex-1 p-4">
            <h1 className="text-xl font-semibold">Collapsed Sidebar</h1>
            <p className="text-muted-foreground">Sidebar is collapsed</p>
          </main>
        </div>
      ),
      code: `export function CollapsibleSidebar() {
  return (
    <div className="flex h-screen">
      <aside className="w-16 bg-card border-r p-2">
        <div className="space-y-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">D</div>
          <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">P</div>
        </div>
      </aside>
      <main className="flex-1 p-4">Content</main>
    </div>
  )
}`,
    },
    {
      title: "Sidebar with Categories",
      description: "Organized sidebar with grouped navigation items.",
      preview: (
        <div className="flex h-64 border rounded-lg overflow-hidden">
          <aside className="w-64 bg-card border-r p-4">
            <div className="space-y-4">
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase mb-2">Main</div>
                <nav className="space-y-1">
                  <a href="#" className="block p-2 rounded hover:bg-accent">
                    Dashboard
                  </a>
                  <a href="#" className="block p-2 rounded hover:bg-accent">
                    Analytics
                  </a>
                </nav>
              </div>
              <div>
                <div className="text-xs font-semibold text-muted-foreground uppercase mb-2">Manage</div>
                <nav className="space-y-1">
                  <a href="#" className="block p-2 rounded hover:bg-accent">
                    Users
                  </a>
                  <a href="#" className="block p-2 rounded hover:bg-accent">
                    Settings
                  </a>
                </nav>
              </div>
            </div>
          </aside>
          <main className="flex-1 p-4">
            <h1 className="text-xl font-semibold">Categorized Navigation</h1>
          </main>
        </div>
      ),
      code: `export function SidebarWithCategories() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-card border-r p-4">
        <div className="space-y-4">
          <div>
            <div className="text-xs font-semibold text-muted-foreground uppercase mb-2">Main</div>
            <nav className="space-y-1">
              <a href="#" className="block p-2 rounded hover:bg-accent">Dashboard</a>
            </nav>
          </div>
        </div>
      </aside>
    </div>
  )
}`,
    },
    {
      title: "Sidebar with User Profile",
      description: "Sidebar featuring user profile section.",
      preview: (
        <div className="flex h-64 border rounded-lg overflow-hidden">
          <aside className="w-64 bg-card border-r p-4 flex flex-col">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
              <div>
                <div className="font-medium text-sm">John Doe</div>
                <div className="text-xs text-muted-foreground">Admin</div>
              </div>
            </div>
            <nav className="space-y-2 flex-1">
              <a href="#" className="block p-2 rounded hover:bg-accent">
                Dashboard
              </a>
              <a href="#" className="block p-2 rounded hover:bg-accent">
                Profile
              </a>
              <a href="#" className="block p-2 rounded hover:bg-accent">
                Settings
              </a>
            </nav>
            <Button variant="ghost" className="justify-start">
              Logout
            </Button>
          </aside>
          <main className="flex-1 p-4">
            <h1 className="text-xl font-semibold">User Profile Sidebar</h1>
          </main>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button"

export function SidebarWithUserProfile() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-card border-r p-4 flex flex-col">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-primary rounded-full"></div>
          <div>
            <div className="font-medium text-sm">John Doe</div>
            <div className="text-xs text-muted-foreground">Admin</div>
          </div>
        </div>
        <nav className="space-y-2 flex-1">
          <a href="#" className="block p-2 rounded hover:bg-accent">Dashboard</a>
        </nav>
        <Button variant="ghost" className="justify-start">Logout</Button>
      </aside>
    </div>
  )
}`,
    },
    {
      title: "Multi-level Sidebar",
      description: "Sidebar with nested navigation levels.",
      preview: (
        <div className="flex h-64 border rounded-lg overflow-hidden">
          <aside className="w-64 bg-card border-r p-4">
            <nav className="space-y-2">
              <a href="#" className="block p-2 rounded hover:bg-accent">
                Dashboard
              </a>
              <div>
                <a href="#" className="block p-2 rounded hover:bg-accent">
                  Projects
                </a>
                <div className="ml-4 space-y-1 mt-1">
                  <a href="#" className="block p-1 text-sm rounded hover:bg-accent">
                    Active
                  </a>
                  <a href="#" className="block p-1 text-sm rounded hover:bg-accent">
                    Completed
                  </a>
                </div>
              </div>
              <div>
                <a href="#" className="block p-2 rounded hover:bg-accent">
                  Team
                </a>
                <div className="ml-4 space-y-1 mt-1">
                  <a href="#" className="block p-1 text-sm rounded hover:bg-accent">
                    Members
                  </a>
                  <a href="#" className="block p-1 text-sm rounded hover:bg-accent">
                    Roles
                  </a>
                </div>
              </div>
            </nav>
          </aside>
          <main className="flex-1 p-4">
            <h1 className="text-xl font-semibold">Multi-level Navigation</h1>
          </main>
        </div>
      ),
      code: `export function MultiLevelSidebar() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-card border-r p-4">
        <nav className="space-y-2">
          <a href="#" className="block p-2 rounded hover:bg-accent">Dashboard</a>
          <div>
            <a href="#" className="block p-2 rounded hover:bg-accent">Projects</a>
            <div className="ml-4 space-y-1 mt-1">
              <a href="#" className="block p-1 text-sm rounded hover:bg-accent">Active</a>
            </div>
          </div>
        </nav>
      </aside>
    </div>
  )
}`,
    },
  ],

  // Continue with other components...
  // For brevity, I'll add a few more key ones

  "Contact Form": [
    {
      title: "Basic Contact Form",
      description: "Simple contact form with essential fields.",
      preview: (
        <div className="max-w-md mx-auto p-6 border rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <div className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Input placeholder="Subject" />
            <textarea className="w-full p-3 border rounded-md" rows={4} placeholder="Your Message"></textarea>
            <Button className="w-full">Send Message</Button>
          </div>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function BasicContactForm() {
  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <div className="space-y-4">
        <Input placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <Input placeholder="Subject" />
        <textarea className="w-full p-3 border rounded-md" rows={4} placeholder="Your Message"></textarea>
        <Button className="w-full">Send Message</Button>
      </div>
    </div>
  )
}`,
    },
    {
      title: "Two Column Contact",
      description: "Contact form with two-column layout.",
      preview: (
        <div className="max-w-2xl mx-auto p-6 border rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
              <Input type="email" placeholder="Email" />
              <Input type="tel" placeholder="Phone" />
            </div>
            <div className="space-y-4">
              <Input placeholder="Company" />
              <Input placeholder="Subject" />
              <textarea className="w-full p-3 border rounded-md" rows={6} placeholder="Message"></textarea>
            </div>
          </div>
          <Button className="w-full mt-6">Send Message</Button>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function TwoColumnContact() {
  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Get In Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <Input placeholder="First Name" />
          <Input type="email" placeholder="Email" />
        </div>
        <div className="space-y-4">
          <Input placeholder="Subject" />
          <textarea className="w-full p-3 border rounded-md" rows={6} placeholder="Message"></textarea>
        </div>
      </div>
      <Button className="w-full mt-6">Send Message</Button>
    </div>
  )
}`,
    },
    {
      title: "Contact with Info",
      description: "Contact form alongside contact information.",
      preview: (
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-card rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded"></div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded"></div>
                <span>hello@company.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-primary rounded"></div>
                <span>123 Business St, City, State</span>
              </div>
            </div>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Send Message</h3>
            <div className="space-y-4">
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <textarea className="w-full p-3 border rounded-md" rows={4} placeholder="Message"></textarea>
              <Button className="w-full">Send</Button>
            </div>
          </div>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactWithInfo() {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-6 bg-card rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
      </div>
      <div className="p-6 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Send Message</h3>
        <div className="space-y-4">
          <Input placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Button className="w-full">Send</Button>
        </div>
      </div>
    </div>
  )
}`,
    },
    {
      title: "Minimal Contact",
      description: "Clean and minimal contact form design.",
      preview: (
        <div className="max-w-sm mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-light">Contact</h2>
            <p className="text-muted-foreground text-sm mt-2">We'd love to hear from you</p>
          </div>
          <div className="space-y-4">
            <Input placeholder="Name" className="border-0 border-b rounded-none" />
            <Input type="email" placeholder="Email" className="border-0 border-b rounded-none" />
            <textarea
              className="w-full p-0 border-0 border-b rounded-none resize-none"
              rows={3}
              placeholder="Message"
            ></textarea>
            <Button className="w-full mt-6 bg-transparent" variant="outline">
              Send
            </Button>
          </div>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function MinimalContact() {
  return (
    <div className="max-w-sm mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-light">Contact</h2>
        <p className="text-muted-foreground text-sm mt-2">We'd love to hear from you</p>
      </div>
      <div className="space-y-4">
        <Input placeholder="Name" className="border-0 border-b rounded-none" />
        <Input type="email" placeholder="Email" className="border-0 border-b rounded-none" />
        <Button className="w-full mt-6 bg-transparent" variant="outline">Send</Button>
      </div>
    </div>
  )
}`,
    },
    {
      title: "Contact with Map",
      description: "Contact form with integrated map placeholder.",
      preview: (
        <div className="max-w-4xl mx-auto border rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <div className="space-y-4">
                <Input placeholder="Full Name" />
                <Input type="email" placeholder="Email Address" />
                <Input placeholder="Phone Number" />
                <textarea className="w-full p-3 border rounded-md" rows={4} placeholder="How can we help?"></textarea>
                <Button className="w-full">Send Message</Button>
              </div>
            </div>
            <div className="bg-muted flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4"></div>
                <p className="text-muted-foreground">Interactive Map</p>
                <p className="text-sm text-muted-foreground">123 Business Street</p>
              </div>
            </div>
          </div>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactWithMap() {
  return (
    <div className="max-w-4xl mx-auto border rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <div className="space-y-4">
            <Input placeholder="Full Name" />
            <Input type="email" placeholder="Email Address" />
            <Button className="w-full">Send Message</Button>
          </div>
        </div>
        <div className="bg-muted flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground">Interactive Map</p>
          </div>
        </div>
      </div>
    </div>
  )
}`,
    },
  ],

  // I'll add placeholders for all other components to prevent "not found" errors
  Textarea: [
    {
      title: "Basic Textarea",
      description: "Standard textarea component",
      preview: <textarea className="w-full p-3 border rounded-md" rows={4} placeholder="Enter text..."></textarea>,
      code: `<textarea className="w-full p-3 border rounded-md" rows={4} placeholder="Enter text..."></textarea>`,
    },
  ],
  Select: [
    {
      title: "Basic Select",
      description: "Standard select dropdown",
      preview: (
        <select className="w-full p-2 border rounded-md">
          <option>Choose option</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      ),
      code: `<select className="w-full p-2 border rounded-md"><option>Choose option</option></select>`,
    },
  ],
  Checkbox: [
    {
      title: "Basic Checkbox",
      description: "Standard checkbox input",
      preview: (
        <div className="flex items-center space-x-2">
          <input type="checkbox" className="rounded" />
          <label>Accept terms</label>
        </div>
      ),
      code: `<div className="flex items-center space-x-2"><input type="checkbox" /><label>Accept terms</label></div>`,
    },
  ],
  Radio: [
    {
      title: "Basic Radio",
      description: "Standard radio buttons",
      preview: (
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <input type="radio" name="option" />
            <label>Option 1</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="radio" name="option" />
            <label>Option 2</label>
          </div>
        </div>
      ),
      code: `<div className="flex items-center space-x-2"><input type="radio" name="option" /><label>Option 1</label></div>`,
    },
  ],
  Switch: [
    {
      title: "Basic Switch",
      description: "Toggle switch component",
      preview: (
        <div className="flex items-center space-x-2">
          <div className="w-11 h-6 bg-gray-200 rounded-full relative">
            <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform"></div>
          </div>
          <label>Enable notifications</label>
        </div>
      ),
      code: `<div className="w-11 h-6 bg-gray-200 rounded-full relative"><div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5"></div></div>`,
    },
  ],
  Slider: [
    {
      title: "Basic Slider",
      description: "Range slider component",
      preview: <input type="range" className="w-full" />,
      code: `<input type="range" className="w-full" />`,
    },
  ],
  Label: [
    {
      title: "Basic Label",
      description: "Form label component",
      preview: <label className="block text-sm font-medium mb-2">Email Address</label>,
      code: `<label className="block text-sm font-medium mb-2">Email Address</label>`,
    },
  ],
  Form: [
    {
      title: "Basic Form",
      description: "Complete form example",
      preview: (
        <form className="space-y-4 max-w-sm">
          <Input placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Button type="submit">Submit</Button>
        </form>
      ),
      code: `<form className="space-y-4"><Input placeholder="Name" /><Button type="submit">Submit</Button></form>`,
    },
  ],
  "Signup Form": [
    {
      title: "Basic Signup",
      description: "User registration form",
      preview: (
        <div className="max-w-sm mx-auto p-6 border rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <div className="space-y-4">
            <Input placeholder="Full Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button className="w-full">Create Account</Button>
          </div>
        </div>
      ),
      code: `<div className="max-w-sm mx-auto p-6 border rounded-lg"><h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2><div className="space-y-4"><Input placeholder="Full Name" /><Button className="w-full">Create Account</Button></div></div>`,
    },
  ],
  "Newsletter Form": [
    {
      title: "Basic Newsletter",
      description: "Email subscription form",
      preview: (
        <div className="max-w-md mx-auto p-6 border rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-4">Subscribe to Newsletter</h3>
          <div className="flex space-x-2">
            <Input placeholder="Enter your email" className="flex-1" />
            <Button>Subscribe</Button>
          </div>
        </div>
      ),
      code: `<div className="max-w-md mx-auto p-6 border rounded-lg text-center"><h3 className="text-xl font-semibold mb-4">Subscribe to Newsletter</h3><div className="flex space-x-2"><Input placeholder="Enter your email" className="flex-1" /><Button>Subscribe</Button></div></div>`,
    },
  ],

  // Add more placeholders for all other components to prevent "not found" errors
  Installation: [
    {
      title: "Installation Guide",
      description: "How to install the library",
      preview: (
        <div className="p-4">
          <h3 className="font-semibold mb-2">Installation</h3>
          <code className="bg-muted p-2 rounded">npm install onextel-ui</code>
        </div>
      ),
      code: `npm install onextel-ui`,
    },
  ],
  Theming: [
    {
      title: "Theme Configuration",
      description: "Customize the theme",
      preview: (
        <div className="p-4">
          <h3 className="font-semibold mb-2">Theming</h3>
          <p>Configure your theme colors and styles</p>
        </div>
      ),
      code: `// Configure theme`,
    },
  ],
  Changelog: [
    {
      title: "Version History",
      description: "Latest updates and changes",
      preview: (
        <div className="p-4">
          <h3 className="font-semibold mb-2">Changelog</h3>
          <p>v1.0.0 - Initial release</p>
        </div>
      ),
      code: `// Version 1.0.0`,
    },
  ],

  // Layout components
  Container: [
    {
      title: "Basic Container",
      description: "Content container",
      preview: (
        <div className="max-w-4xl mx-auto p-4 border rounded">
          <p>Container content</p>
        </div>
      ),
      code: `<div className="max-w-4xl mx-auto p-4">Content</div>`,
    },
  ],
  Grid: [
    {
      title: "Basic Grid",
      description: "CSS Grid layout",
      preview: (
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-muted rounded">1</div>
          <div className="p-4 bg-muted rounded">2</div>
          <div className="p-4 bg-muted rounded">3</div>
        </div>
      ),
      code: `<div className="grid grid-cols-3 gap-4"><div>1</div><div>2</div><div>3</div></div>`,
    },
  ],
  Stack: [
    {
      title: "Basic Stack",
      description: "Vertical stack layout",
      preview: (
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded">Item 1</div>
          <div className="p-4 bg-muted rounded">Item 2</div>
        </div>
      ),
      code: `<div className="space-y-4"><div>Item 1</div><div>Item 2</div></div>`,
    },
  ],
  Divider: [
    {
      title: "Basic Divider",
      description: "Content divider",
      preview: (
        <div>
          <p>Content above</p>
          <hr className="my-4" />
          <p>Content below</p>
        </div>
      ),
      code: `<hr className="my-4" />`,
    },
  ],
  Separator: [
    {
      title: "Basic Separator",
      description: "Visual separator",
      preview: <div className="w-full h-px bg-border"></div>,
      code: `<div className="w-full h-px bg-border"></div>`,
    },
  ],
  "Aspect Ratio": [
    {
      title: "Basic Aspect Ratio",
      description: "Maintain aspect ratio",
      preview: <div className="aspect-video bg-muted rounded flex items-center justify-center">16:9</div>,
      code: `<div className="aspect-video bg-muted rounded">Content</div>`,
    },
  ],
  Flex: [
    {
      title: "Basic Flex",
      description: "Flexbox layout",
      preview: (
        <div className="flex space-x-4">
          <div className="flex-1 p-4 bg-muted rounded">Flex 1</div>
          <div className="flex-1 p-4 bg-muted rounded">Flex 2</div>
        </div>
      ),
      code: `<div className="flex space-x-4"><div className="flex-1">Flex 1</div><div className="flex-1">Flex 2</div></div>`,
    },
  ],

  // Add more placeholders for remaining components...
  Avatar: [
    {
      title: "Basic Avatar",
      description: "User avatar component",
      preview: (
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
          JD
        </div>
      ),
      code: `<div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">JD</div>`,
    },
  ],
  Badge: [
    {
      title: "Basic Badge",
      description: "Status badge",
      preview: <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs">New</span>,
      code: `<span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs">New</span>`,
    },
  ],
  Card: [
    {
      title: "Basic Card",
      description: "Content card",
      preview: (
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold mb-2">Card Title</h3>
          <p className="text-muted-foreground">Card content goes here</p>
        </div>
      ),
      code: `<div className="border rounded-lg p-6"><h3 className="font-semibold">Card Title</h3><p>Card content</p></div>`,
    },
  ],

  // Continue with all other components to ensure no "not found" errors...
  Table: [
    {
      title: "Basic Table",
      description: "Data table",
      preview: (
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">John</td>
              <td className="border p-2">john@example.com</td>
            </tr>
          </tbody>
        </table>
      ),
      code: `<table className="w-full border-collapse border"><thead><tr><th className="border p-2">Name</th></tr></thead></table>`,
    },
  ],
  List: [
    {
      title: "Basic List",
      description: "Unordered list",
      preview: (
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <span>•</span>
            <span>Item 1</span>
          </li>
          <li className="flex items-center space-x-2">
            <span>•</span>
            <span>Item 2</span>
          </li>
        </ul>
      ),
      code: `<ul className="space-y-2"><li>Item 1</li><li>Item 2</li></ul>`,
    },
  ],
  Tooltip: [
    {
      title: "Basic Tooltip",
      description: "Hover tooltip",
      preview: (
        <Button className="relative group">
          Hover me
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Tooltip text
          </span>
        </Button>
      ),
      code: `<div className="relative group">Hover me<span className="tooltip">Tooltip text</span></div>`,
    },
  ],
  Popover: [
    {
      title: "Basic Popover",
      description: "Click popover",
      preview: <Button>Click me</Button>,
      code: `<Button>Click me</Button>`,
    },
  ],
  Progress: [
    {
      title: "Basic Progress",
      description: "Progress bar",
      preview: (
        <div className="w-full bg-muted rounded-full h-2">
          <div className="bg-primary h-2 rounded-full" style={{ width: "60%" }}></div>
        </div>
      ),
      code: `<div className="w-full bg-muted rounded-full h-2"><div className="bg-primary h-2 rounded-full" style={{width: '60%'}}></div></div>`,
    },
  ],
  Calendar: [
    {
      title: "Basic Calendar",
      description: "Date picker",
      preview: (
        <div className="border rounded p-4">
          <div className="text-center font-semibold mb-2">December 2024</div>
          <div className="grid grid-cols-7 gap-1 text-sm">
            <div className="p-1 text-center">S</div>
            <div className="p-1 text-center">M</div>
            <div className="p-1 text-center">T</div>
            <div className="p-1 text-center">W</div>
            <div className="p-1 text-center">T</div>
            <div className="p-1 text-center">F</div>
            <div className="p-1 text-center">S</div>
          </div>
        </div>
      ),
      code: `<div className="border rounded p-4">Calendar</div>`,
    },
  ],
  Chart: [
    {
      title: "Basic Chart",
      description: "Data visualization",
      preview: (
        <div className="h-32 bg-muted rounded flex items-end justify-center space-x-1">
          <div className="w-4 bg-primary" style={{ height: "60%" }}></div>
          <div className="w-4 bg-primary" style={{ height: "80%" }}></div>
          <div className="w-4 bg-primary" style={{ height: "40%" }}></div>
        </div>
      ),
      code: `<div className="h-32 bg-muted rounded">Chart</div>`,
    },
  ],
  Stats: [
    {
      title: "Basic Stats",
      description: "Statistics display",
      preview: (
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">1.2K</div>
            <div className="text-sm text-muted-foreground">Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">98%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>
      ),
      code: `<div className="text-center"><div className="text-2xl font-bold">1.2K</div><div className="text-sm text-muted-foreground">Users</div></div>`,
    },
  ],

  // Continue with all remaining components...
  Alert: [
    {
      title: "Basic Alert",
      description: "Alert message",
      preview: (
        <div className="border border-yellow-200 bg-yellow-50 p-4 rounded">
          <div className="font-medium">Warning</div>
          <div className="text-sm">This is a warning message</div>
        </div>
      ),
      code: `<div className="border border-yellow-200 bg-yellow-50 p-4 rounded">Warning message</div>`,
    },
  ],
  Toast: [
    {
      title: "Basic Toast",
      description: "Toast notification",
      preview: <div className="bg-black text-white p-3 rounded shadow-lg">Toast message</div>,
      code: `<div className="bg-black text-white p-3 rounded shadow-lg">Toast message</div>`,
    },
  ],
  Dialog: [
    {
      title: "Basic Dialog",
      description: "Modal dialog",
      preview: <Button>Open Dialog</Button>,
      code: `<Button>Open Dialog</Button>`,
    },
  ],
  Sheet: [
    {
      title: "Basic Sheet",
      description: "Side sheet",
      preview: <Button>Open Sheet</Button>,
      code: `<Button>Open Sheet</Button>`,
    },
  ],
  Loading: [
    {
      title: "Basic Loading",
      description: "Loading indicator",
      preview: <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>,
      code: `<div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>`,
    },
  ],
  Skeleton: [
    {
      title: "Basic Skeleton",
      description: "Loading skeleton",
      preview: (
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded animate-pulse"></div>
          <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
        </div>
      ),
      code: `<div className="h-4 bg-muted rounded animate-pulse"></div>`,
    },
  ],
  Spinner: [
    {
      title: "Basic Spinner",
      description: "Loading spinner",
      preview: <div className="w-8 h-8 border-4 border-muted border-t-primary rounded-full animate-spin"></div>,
      code: `<div className="w-8 h-8 border-4 border-muted border-t-primary rounded-full animate-spin"></div>`,
    },
  ],
  "Error Boundary": [
    {
      title: "Basic Error Boundary",
      description: "Error handling",
      preview: (
        <div className="border border-red-200 bg-red-50 p-4 rounded text-center">
          <div className="text-red-600 font-medium">Something went wrong</div>
        </div>
      ),
      code: `<div className="border border-red-200 bg-red-50 p-4 rounded">Error boundary</div>`,
    },
  ],

  // Media components
  Image: [
    {
      title: "Basic Image",
      description: "Responsive image",
      preview: <img src="/placeholder.svg?height=200&width=300" alt="Placeholder" className="rounded" />,
      code: `<img src="/image.jpg" alt="Description" className="rounded" />`,
    },
  ],
  Video: [
    {
      title: "Basic Video",
      description: "Video player",
      preview: <div className="aspect-video bg-muted rounded flex items-center justify-center">Video Player</div>,
      code: `<video controls className="w-full rounded"><source src="/video.mp4" type="video/mp4" /></video>`,
    },
  ],
  Gallery: [
    {
      title: "Basic Gallery",
      description: "Image gallery",
      preview: (
        <div className="grid grid-cols-3 gap-2">
          <div className="aspect-square bg-muted rounded"></div>
          <div className="aspect-square bg-muted rounded"></div>
          <div className="aspect-square bg-muted rounded"></div>
        </div>
      ),
      code: `<div className="grid grid-cols-3 gap-2"><img src="/image1.jpg" /><img src="/image2.jpg" /></div>`,
    },
  ],
  Carousel: [
    {
      title: "Basic Carousel",
      description: "Image carousel",
      preview: (
        <div className="relative aspect-video bg-muted rounded flex items-center justify-center">
          Carousel
          <Button className="absolute left-2" size="sm">
            ‹
          </Button>
          <Button className="absolute right-2" size="sm">
            ›
          </Button>
        </div>
      ),
      code: `<div className="relative">Carousel content<button className="absolute left-2">‹</button></div>`,
    },
  ],
  Lightbox: [
    {
      title: "Basic Lightbox",
      description: "Image lightbox",
      preview: (
        <img src="/placeholder.svg?height=100&width=100" alt="Click to expand" className="rounded cursor-pointer" />
      ),
      code: `<img src="/image.jpg" alt="Click to expand" className="cursor-pointer" />`,
    },
  ],
  "File Upload": [
    {
      title: "Basic File Upload",
      description: "File upload component",
      preview: (
        <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
          <div className="text-muted-foreground">Drop files here or click to upload</div>
        </div>
      ),
      code: `<div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">Drop files here</div>`,
    },
  ],

  // Continue with all remaining components to ensure complete coverage...
  Modal: [
    {
      title: "Basic Modal",
      description: "Modal overlay",
      preview: <Button>Open Modal</Button>,
      code: `<Button>Open Modal</Button>`,
    },
  ],
  Drawer: [
    {
      title: "Basic Drawer",
      description: "Side drawer",
      preview: <Button>Open Drawer</Button>,
      code: `<Button>Open Drawer</Button>`,
    },
  ],
  Dropdown: [
    {
      title: "Basic Dropdown",
      description: "Dropdown menu",
      preview: <Button>Dropdown ▼</Button>,
      code: `<Button>Dropdown ▼</Button>`,
    },
  ],
  "Context Menu": [
    {
      title: "Basic Context Menu",
      description: "Right-click menu",
      preview: <div className="p-4 border rounded">Right-click me</div>,
      code: `<div className="p-4 border rounded">Right-click me</div>`,
    },
  ],
  "Hover Card": [
    {
      title: "Basic Hover Card",
      description: "Hover card",
      preview: <Button>Hover me</Button>,
      code: `<Button>Hover me</Button>`,
    },
  ],
  Combobox: [
    {
      title: "Basic Combobox",
      description: "Searchable select",
      preview: (
        <div className="relative">
          <Input placeholder="Search..." />
          <div className="absolute top-full left-0 right-0 border rounded mt-1 bg-background hidden">Options</div>
        </div>
      ),
      code: `<div className="relative"><Input placeholder="Search..." /></div>`,
    },
  ],

  // E-commerce components
  "Product Card": [
    {
      title: "Basic Product Card",
      description: "Product display card",
      preview: (
        <div className="border rounded-lg p-4 max-w-sm">
          <div className="aspect-square bg-muted rounded mb-4"></div>
          <h3 className="font-semibold">Product Name</h3>
          <p className="text-muted-foreground text-sm">Product description</p>
          <div className="flex items-center justify-between mt-4">
            <span className="font-bold">$99.99</span>
            <Button size="sm">Add to Cart</Button>
          </div>
        </div>
      ),
      code: `<div className="border rounded-lg p-4"><div className="aspect-square bg-muted rounded mb-4"></div><h3 className="font-semibold">Product Name</h3><p className="text-muted-foreground">Description</p><div className="flex items-center justify-between mt-4"><span className="font-bold">$99.99</span><Button size="sm">Add to Cart</Button></div></div>`,
    },
  ],
  "Shopping Cart": [
    {
      title: "Basic Shopping Cart",
      description: "Shopping cart component",
      preview: (
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-4">Shopping Cart</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Product 1</span>
              <span>$29.99</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Product 2</span>
              <span>$39.99</span>
            </div>
            <hr className="my-2" />
            <div className="flex items-center justify-between font-bold">
              <span>Total</span>
              <span>$69.98</span>
            </div>
          </div>
          <Button className="w-full mt-4">Checkout</Button>
        </div>
      ),
      code: `<div className="border rounded-lg p-4"><h3 className="font-semibold mb-4">Shopping Cart</h3><Button className="w-full mt-4">Checkout</Button></div>`,
    },
  ],
  Checkout: [
    {
      title: "Basic Checkout",
      description: "Checkout form",
      preview: (
        <div className="max-w-md mx-auto p-6 border rounded-lg">
          <h2 className="text-xl font-bold mb-4">Checkout</h2>
          <div className="space-y-4">
            <Input placeholder="Full Name" />
            <Input placeholder="Email" />
            <Input placeholder="Address" />
            <Button className="w-full">Complete Order</Button>
          </div>
        </div>
      ),
      code: `<div className="max-w-md mx-auto p-6 border rounded-lg"><h2 className="text-xl font-bold mb-4">Checkout</h2><div className="space-y-4"><Input placeholder="Full Name" /><Button className="w-full">Complete Order</Button></div></div>`,
    },
  ],
  "Price Display": [
    {
      title: "Basic Price Display",
      description: "Price formatting",
      preview: (
        <div className="text-center">
          <div className="text-3xl font-bold">
            $99<span className="text-lg">.99</span>
          </div>
          <div className="text-muted-foreground line-through">$129.99</div>
          <div className="text-green-600 text-sm">Save 23%</div>
        </div>
      ),
      code: `<div className="text-center"><div className="text-3xl font-bold">$99<span className="text-lg">.99</span></div><div className="text-muted-foreground line-through">$129.99</div></div>`,
    },
  ],
  Rating: [
    {
      title: "Basic Rating",
      description: "Star rating",
      preview: (
        <div className="flex items-center space-x-1">
          <span className="text-yellow-400">★★★★☆</span>
          <span className="text-sm text-muted-foreground">(4.0)</span>
        </div>
      ),
      code: `<div className="flex items-center space-x-1"><span className="text-yellow-400">★★★★☆</span><span className="text-sm text-muted-foreground">(4.0)</span></div>`,
    },
  ],
  Wishlist: [
    {
      title: "Basic Wishlist",
      description: "Wishlist button",
      preview: (
        <Button variant="ghost" size="sm">
          ♡ Add to Wishlist
        </Button>
      ),
      code: `<Button variant="ghost" size="sm">♡ Add to Wishlist</Button>`,
    },
  ],

  // Marketing components
  "CTA Section": [
    {
      title: "Basic CTA Section",
      description: "Call-to-action section",
      preview: (
        <div className="text-center p-8 bg-primary text-primary-foreground rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="mb-6">Join thousands of satisfied customers today.</p>
          <Button variant="secondary">Get Started Now</Button>
        </div>
      ),
      code: `<div className="text-center p-8 bg-primary text-primary-foreground rounded-lg"><h2 className="text-2xl font-bold mb-4">Ready to get started?</h2><Button variant="secondary">Get Started Now</Button></div>`,
    },
  ],
  "Feature Grid": [
    {
      title: "Basic Feature Grid",
      description: "Features grid layout",
      preview: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold mb-2">Feature 1</h3>
            <p className="text-muted-foreground text-sm">Description of feature 1</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold mb-2">Feature 2</h3>
            <p className="text-muted-foreground text-sm">Description of feature 2</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold mb-2">Feature 3</h3>
            <p className="text-muted-foreground text-sm">Description of feature 3</p>
          </div>
        </div>
      ),
      code: `<div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="text-center"><h3 className="font-semibold mb-2">Feature 1</h3><p className="text-muted-foreground text-sm">Description</p></div></div>`,
    },
  ],
  Testimonials: [
    {
      title: "Basic Testimonials",
      description: "Customer testimonials",
      preview: (
        <div className="max-w-md mx-auto text-center p-6 border rounded-lg">
          <p className="text-muted-foreground mb-4">
            "This product has completely transformed our workflow. Highly recommended!"
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-muted rounded-full"></div>
            <div>
              <div className="font-medium text-sm">John Doe</div>
              <div className="text-xs text-muted-foreground">CEO, Company</div>
            </div>
          </div>
        </div>
      ),
      code: `<div className="max-w-md mx-auto text-center p-6 border rounded-lg"><p className="text-muted-foreground mb-4">"Great product!"</p><div className="font-medium text-sm">John Doe</div></div>`,
    },
  ],
  Pricing: [
    {
      title: "Basic Pricing",
      description: "Pricing table",
      preview: (
        <div className="max-w-sm mx-auto border rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Pro Plan</h3>
          <div className="text-3xl font-bold mb-4">
            $29<span className="text-sm font-normal">/month</span>
          </div>
          <ul className="space-y-2 mb-6 text-sm">
            <li>✓ Feature 1</li>
            <li>✓ Feature 2</li>
            <li>✓ Feature 3</li>
          </ul>
          <Button className="w-full">Choose Plan</Button>
        </div>
      ),
      code: `<div className="max-w-sm mx-auto border rounded-lg p-6 text-center"><h3 className="text-xl font-bold mb-2">Pro Plan</h3><div className="text-3xl font-bold mb-4">$29<span className="text-sm font-normal">/month</span></div><Button className="w-full">Choose Plan</Button></div>`,
    },
  ],
  FAQ: [
    {
      title: "Basic FAQ",
      description: "Frequently asked questions",
      preview: (
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">What is included in the free plan?</h3>
            <p className="text-muted-foreground text-sm">The free plan includes basic features and limited usage.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Can I upgrade anytime?</h3>
            <p className="text-muted-foreground text-sm">Yes, you can upgrade or downgrade your plan at any time.</p>
          </div>
        </div>
      ),
      code: `<div className="space-y-4"><div className="border rounded-lg p-4"><h3 className="font-semibold mb-2">Question?</h3><p className="text-muted-foreground text-sm">Answer here.</p></div></div>`,
    },
  ],
  Team: [
    {
      title: "Basic Team",
      description: "Team member cards",
      preview: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-muted-foreground text-sm">CEO & Founder</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold">Jane Smith</h3>
            <p className="text-muted-foreground text-sm">CTO</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4"></div>
            <h3 className="font-semibold">Mike Johnson</h3>
            <p className="text-muted-foreground text-sm">Designer</p>
          </div>
        </div>
      ),
      code: `<div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="text-center"><div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4"></div><h3 className="font-semibold">John Doe</h3><p className="text-muted-foreground text-sm">CEO</p></div></div>`,
    },
  ],
  "Logo Cloud": [
    {
      title: "Basic Logo Cloud",
      description: "Company logos display",
      preview: (
        <div className="text-center">
          <p className="text-muted-foreground mb-6">Trusted by leading companies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="h-8 bg-muted rounded"></div>
            <div className="h-8 bg-muted rounded"></div>
            <div className="h-8 bg-muted rounded"></div>
            <div className="h-8 bg-muted rounded"></div>
          </div>
        </div>
      ),
      code: `<div className="text-center"><p className="text-muted-foreground mb-6">Trusted by leading companies</p><div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"><div className="h-8 bg-muted rounded"></div></div></div>`,
    },
  ],

  // Blog components
  "Article Card": [
    {
      title: "Basic Article Card",
      description: "Blog article card",
      preview: (
        <div className="max-w-sm border rounded-lg overflow-hidden">
          <div className="aspect-video bg-muted"></div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">Article Title</h3>
            <p className="text-muted-foreground text-sm mb-4">Brief description of the article content...</p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Dec 21, 2024</span>
              <span>5 min read</span>
            </div>
          </div>
        </div>
      ),
      code: `<div className="max-w-sm border rounded-lg overflow-hidden"><div className="aspect-video bg-muted"></div><div className="p-4"><h3 className="font-semibold mb-2">Article Title</h3><p className="text-muted-foreground text-sm">Description...</p></div></div>`,
    },
  ],
  "Blog Header": [
    {
      title: "Basic Blog Header",
      description: "Blog post header",
      preview: (
        <div className="max-w-2xl mx-auto text-center py-8">
          <h1 className="text-3xl font-bold mb-4">How to Build Better UIs</h1>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
            <span>By John Doe</span>
            <span>•</span>
            <span>Dec 21, 2024</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>
      ),
      code: `<div className="max-w-2xl mx-auto text-center py-8"><h1 className="text-3xl font-bold mb-4">Article Title</h1><div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground"><span>By Author</span><span>Date</span></div></div>`,
    },
  ],
  "Author Bio": [
    {
      title: "Basic Author Bio",
      description: "Author information",
      preview: (
        <div className="flex items-center space-x-4 p-4 border rounded-lg">
          <div className="w-12 h-12 bg-muted rounded-full"></div>
          <div>
            <h4 className="font-semibold">John Doe</h4>
            <p className="text-muted-foreground text-sm">
              Senior Developer with 10+ years of experience in web development.
            </p>
          </div>
        </div>
      ),
      code: `<div className="flex items-center space-x-4 p-4 border rounded-lg"><div className="w-12 h-12 bg-muted rounded-full"></div><div><h4 className="font-semibold">Author Name</h4><p className="text-muted-foreground text-sm">Bio description</p></div></div>`,
    },
  ],
  "Related Posts": [
    {
      title: "Basic Related Posts",
      description: "Related articles",
      preview: (
        <div>
          <h3 className="text-xl font-bold mb-4">Related Posts</h3>
          <div className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-16 h-16 bg-muted rounded"></div>
              <div>
                <h4 className="font-medium">Related Article 1</h4>
                <p className="text-muted-foreground text-sm">Brief description...</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-16 h-16 bg-muted rounded"></div>
              <div>
                <h4 className="font-medium">Related Article 2</h4>
                <p className="text-muted-foreground text-sm">Brief description...</p>
              </div>
            </div>
          </div>
        </div>
      ),
      code: `<div><h3 className="text-xl font-bold mb-4">Related Posts</h3><div className="space-y-4"><div className="flex space-x-4"><div className="w-16 h-16 bg-muted rounded"></div><div><h4 className="font-medium">Article Title</h4></div></div></div></div>`,
    },
  ],
  Comments: [
    {
      title: "Basic Comments",
      description: "Comment section",
      preview: (
        <div>
          <h3 className="text-xl font-bold mb-4">Comments</h3>
          <div className="space-y-4">
            <div className="border-l-2 border-muted pl-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-muted rounded-full"></div>
                <span className="font-medium text-sm">User Name</span>
                <span className="text-xs text-muted-foreground">2 hours ago</span>
              </div>
              <p className="text-sm">This is a great article! Thanks for sharing.</p>
            </div>
          </div>
        </div>
      ),
      code: `<div><h3 className="text-xl font-bold mb-4">Comments</h3><div className="space-y-4"><div className="border-l-2 border-muted pl-4"><div className="flex items-center space-x-2 mb-2"><span className="font-medium text-sm">User</span></div><p className="text-sm">Comment text</p></div></div></div>`,
    },
  ],
  Tags: [
    {
      title: "Basic Tags",
      description: "Content tags",
      preview: (
        <div className="flex flex-wrap gap-2">
          <span className="bg-muted px-2 py-1 rounded-full text-xs">React</span>
          <span className="bg-muted px-2 py-1 rounded-full text-xs">JavaScript</span>
          <span className="bg-muted px-2 py-1 rounded-full text-xs">Web Development</span>
        </div>
      ),
      code: `<div className="flex flex-wrap gap-2"><span className="bg-muted px-2 py-1 rounded-full text-xs">Tag</span></div>`,
    },
  ],

  // Navigation components
  Breadcrumb: [
    {
      title: "Basic Breadcrumb",
      description: "Navigation breadcrumb",
      preview: (
        <nav className="flex items-center space-x-2 text-sm">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Home
          </a>
          <span className="text-muted-foreground">/</span>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Category
          </a>
          <span className="text-muted-foreground">/</span>
          <span className="font-medium">Current Page</span>
        </nav>
      ),
      code: `<nav className="flex items-center space-x-2 text-sm"><a href="#" className="text-muted-foreground hover:text-foreground">Home</a><span>/</span><span className="font-medium">Current</span></nav>`,
    },
  ],
  Menu: [
    {
      title: "Basic Menu",
      description: "Navigation menu",
      preview: (
        <nav className="space-y-2">
          <a href="#" className="block p-2 rounded hover:bg-accent">
            Home
          </a>
          <a href="#" className="block p-2 rounded hover:bg-accent">
            About
          </a>
          <a href="#" className="block p-2 rounded hover:bg-accent">
            Services
          </a>
          <a href="#" className="block p-2 rounded hover:bg-accent">
            Contact
          </a>
        </nav>
      ),
      code: `<nav className="space-y-2"><a href="#" className="block p-2 rounded hover:bg-accent">Home</a></nav>`,
    },
  ],
  Pagination: [
    {
      title: "Basic Pagination",
      description: "Page navigation",
      preview: (
        <nav className="flex items-center justify-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button size="sm">2</Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </nav>
      ),
      code: `<nav className="flex items-center justify-center space-x-2"><Button variant="outline" size="sm">Previous</Button><Button size="sm">1</Button><Button variant="outline" size="sm">Next</Button></nav>`,
    },
  ],
  Tabs: [
    {
      title: "Basic Tabs",
      description: "Tab navigation",
      preview: (
        <div>
          <div className="flex border-b">
            <button className="px-4 py-2 border-b-2 border-primary">Tab 1</button>
            <button className="px-4 py-2 text-muted-foreground">Tab 2</button>
            <button className="px-4 py-2 text-muted-foreground">Tab 3</button>
          </div>
          <div className="p-4">Content for Tab 1</div>
        </div>
      ),
      code: `<div><div className="flex border-b"><button className="px-4 py-2 border-b-2 border-primary">Tab 1</button></div><div className="p-4">Tab content</div></div>`,
    },
  ],
  Command: [
    {
      title: "Basic Command",
      description: "Command palette",
      preview: (
        <div className="border rounded-lg p-4 max-w-sm">
          <Input placeholder="Type a command..." className="mb-2" />
          <div className="space-y-1">
            <div className="p-2 rounded hover:bg-accent cursor-pointer">Search files</div>
            <div className="p-2 rounded hover:bg-accent cursor-pointer">Open settings</div>
            <div className="p-2 rounded hover:bg-accent cursor-pointer">Create new</div>
          </div>
        </div>
      ),
      code: `<div className="border rounded-lg p-4"><Input placeholder="Type a command..." /><div className="space-y-1"><div className="p-2 rounded hover:bg-accent cursor-pointer">Command</div></div></div>`,
    },
  ],
  "Navigation Menu": [
    {
      title: "Basic Navigation Menu",
      description: "Main navigation menu",
      preview: (
        <nav className="flex items-center space-x-6">
          <a href="#" className="font-medium hover:text-primary">
            Home
          </a>
          <a href="#" className="font-medium hover:text-primary">
            Products
          </a>
          <a href="#" className="font-medium hover:text-primary">
            About
          </a>
          <a href="#" className="font-medium hover:text-primary">
            Contact
          </a>
        </nav>
      ),
      code: `<nav className="flex items-center space-x-6"><a href="#" className="font-medium hover:text-primary">Home</a></nav>`,
    },
  ],
}

interface ComponentShowcaseProps {
  activeComponent: string
}

export function ComponentShowcase({ activeComponent }: ComponentShowcaseProps) {
  const [activeTab, setActiveTab] = useState("preview")
  const [activeVariant, setActiveVariant] = useState(0)
  const [copied, setCopied] = useState(false)

  const componentVariants = componentExamples[activeComponent as keyof typeof componentExamples]

  const copyCode = async () => {
    if (componentVariants && componentVariants[activeVariant]) {
      await navigator.clipboard.writeText(componentVariants[activeVariant].code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (!componentVariants || componentVariants.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold mb-2">Component not found</h3>
        <p className="text-muted-foreground">The selected component "{activeComponent}" is not available yet.</p>
      </div>
    )
  }

  const currentVariant = componentVariants[activeVariant]

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{activeComponent}</h1>
          <p className="text-muted-foreground mt-2">{currentVariant.description}</p>
        </div>

        {/* Variant Selector */}
        {componentVariants.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {componentVariants.map((variant, index) => (
              <Button
                key={index}
                variant={activeVariant === index ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveVariant(index)}
              >
                {variant.title}
              </Button>
            ))}
          </div>
        )}

        {/* Tabs */}
        <div className="border-b">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab("preview")}
              className={cn(
                "py-2 px-1 border-b-2 font-medium text-sm",
                activeTab === "preview"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground",
              )}
            >
              Preview
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={cn(
                "py-2 px-1 border-b-2 font-medium text-sm",
                activeTab === "code"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground",
              )}
            >
              Code
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="space-y-4">
          {activeTab === "preview" && (
            <div className="border rounded-lg p-8 bg-background">
              <div className="flex items-center justify-center min-h-[200px]">{currentVariant.preview}</div>
            </div>
          )}

          {activeTab === "code" && (
            <div className="relative">
              <Button onClick={copyCode} size="sm" className="absolute top-4 right-4 z-10">
                {copied ? "Copied!" : "Copy"}
              </Button>
              <CodeBlock code={currentVariant.code} />
            </div>
          )}
        </div>

        {/* Installation */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Installation</h2>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Copy and paste the following code into your project.</p>
            <div className="bg-muted p-3 rounded-lg">
              <code className="text-sm">npm install @onextel/ui</code>
            </div>
          </div>
        </div>

        {/* Usage */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Usage</h2>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>{currentVariant.code}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
