"use client"

interface CodeBlockProps {
  code: string
  language?: string
}

export function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  return (
    <div className="relative">
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
        <code className="text-foreground font-mono">{code}</code>
      </pre>
    </div>
  )
}
