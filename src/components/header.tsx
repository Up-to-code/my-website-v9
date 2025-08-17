'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'

const menuItems = [
    { name: 'Features', href: '#features' },
    { name: 'Solution', href: '#solution' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
]

export const HeroHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024 && isMenuOpen) {
                setIsMenuOpen(false)
            }
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [isMenuOpen])

    return (
        <header className="fixed z-50 w-full">
            <nav 
                className={`transition-all duration-300 ${
                    isScrolled 
                        ? 'bg-background/90 backdrop-blur-md border-b' 
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" aria-label="home" className="flex items-center">
                                {/* <Logo /> */}
                                <span className="ml-2 text-lg font-semibold">Up-to-code</span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:block">
                            <div className="ml-10 flex items-center space-x-8">
                                {/* {menuItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                                    >
                                        {item.name}
                                    </Link>
                                ))} */}
                            </div>
                        </div>

                        {/* Desktop Buttons */}
                        <div className="hidden lg:flex items-center space-x-4">
                            {/* <Button variant="ghost" asChild>
                                <Link href="#login">Login</Link>
                            </Button>
                            <Button asChild>
                                <Link href="#signup">Sign Up</Link>
                            </Button> */}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            {/* <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none"
                                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            >
                                {isMenuOpen ? (
                                    <X className="block h-6 w-6" />
                                ) : (
                                    <Menu className="block h-6 w-6" />
                                )}
                            </button> */}
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
                        {/* {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="text-muted-foreground hover:text-foreground block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))} */}
                        <div className="flex flex-col gap-2 px-3 pt-4">
                            {/* <Button asChild variant="outline" onClick={() => setIsMenuOpen(false)}>
                                <Link href="#login">Login</Link>
                            </Button>
                            <Button asChild onClick={() => setIsMenuOpen(false)}>
                                <Link href="#signup">Sign Up</Link>
                            </Button> */}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}