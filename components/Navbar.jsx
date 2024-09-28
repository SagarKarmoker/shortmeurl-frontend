import Link from 'next/link'
import React from 'react'
import { ArrowDownUp, LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-10">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center">
                    <LinkIcon className="h-8 w-8 text-blue-600" />
                    <span className="ml-2 text-xl font-bold text-gray-900">
                        <Link href="/">
                            ShortMeURL
                        </Link>
                    </span>
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="#features" className="text-gray-500 hover:text-gray-900">Features</a>
                    <a href="#pricing" className="text-gray-500 hover:text-gray-900">Pricing</a>
                    <a href="#testimonials" className="text-gray-500 hover:text-gray-900">Testimonials</a>
                    <a href="#faq" className="text-gray-500 hover:text-gray-900">FAQ</a>
                </div>
                {/* <button className='btn btn-outline'>Sign Up</button> */}
                <Button>Sign Up</Button>
            </nav>
        </header>
    )
}
