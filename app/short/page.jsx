"use client"
import React, { useState } from 'react'
import { RefreshCcw } from 'lucide-react';

export default function ShortUrl() {
    const [clicked, setClicked] = useState(false);

    return (
        <main className='container mx-auto'>
            <input type="text" placeholder="https://example.com" className="input input-bordered w-full max-w-xs" />
            <button className="btn" onClick={() => setClicked(true)}>
                {
                    clicked ? <RefreshCcw className='w-5 h-5 animate-spin' />
                        : <RefreshCcw className='w-5 h-5' />
                }
                Short it
            </button>
        </main>
    )
}