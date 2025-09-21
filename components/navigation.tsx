"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Github, Menu } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <div className="h-6 w-6 bg-primary rounded-sm" />
            <span className="hidden font-bold sm:inline-block">Onextel UI</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/components">
              Components
            </Link>
            <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/templates">
              Templates
            </Link>
            <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/docs">
              Docs
            </Link>
            <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/examples">
              Examples
            </Link>
          </nav>
        </div>
        <Button
          className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:R15hja:"
          data-state="closed"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search components..." className="pl-8 md:w-[300px] lg:w-[400px]" />
            </div>
          </div>
          <nav className="flex items-center">
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com/onextel/ui" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
