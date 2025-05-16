"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className="text-[#0A4D68]">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="text-xl font-bold text-[#0A4D68]">Mrstudio</div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-[#0A4D68]">
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-8 p-4">
              <Link href="/" className="text-xl font-medium text-[#0A4D68]" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-xl font-medium text-[#0A4D68]" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link href="/services" className="text-xl font-medium text-[#0A4D68]" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Button
                className="bg-[#F27127] hover:bg-[#e05e15] text-white mt-4 w-full max-w-xs"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Button>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
