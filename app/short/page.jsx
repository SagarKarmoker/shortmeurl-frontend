"use client"
import React, { useState } from 'react'
import { RefreshCcw, X } from 'lucide-react';
import axios from 'axios';

export default function ShortUrl() {
    const [clicked, setClicked] = useState(false);
    const [originalUrl, setOriginalUrl] = useState('');
    const [error, setError] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    const handleGenerate = async () => {
        setClicked(true);
        setError(''); // Clear any previous errors

        if (!originalUrl) {
            setError("Please enter a valid URL");
            setClicked(false); // Stop the loading animation
            return; // Prevent further execution
        }

        try {
            const response = await axios.post("spring-boot-shortmeurl-production.up.railway.app/api/v1/create", {
                originalUrl: originalUrl
            });

            if (response.status === 201) {
                setShortUrl(response.data); 
            } else {
                setError("Failed to generate short URL. Try again.");
            }
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || "An error occurred while generating the short URL.");
        } finally {
            setClicked(false); // Stop the loading animation
        }
    };

    const closeAlert = () => {
        setError('');
    };

    return (
        <main className='container mx-auto'>
            <div className="card bg-base-100 border shadow-xl mt-10">
                <div className="card-body">
                    <h1 className='text-center font-bold text-4xl my-5'>Welcome to Short The URL</h1>
                    <div className='flex gap-x-5'>
                        <input type="text" placeholder="https://example.com" className="input input-bordered w-full"
                            value={originalUrl}
                            onChange={(e) => setOriginalUrl(e.target.value)}
                        />
                        <button className="btn" onClick={handleGenerate}>
                            {
                                clicked ? <RefreshCcw className='w-5 h-5 animate-spin' />
                                    : <RefreshCcw className='w-5 h-5' />
                            }
                            Short it
                        </button>
                    </div>

                    {shortUrl && (
                        <div className="mt-4">
                            <span className="font-bold">Short URL: </span>
                            <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="link link-primary">
                                {shortUrl}
                            </a>
                        </div>
                    )}
                </div>
            </div>

            {
                error && (
                    <div role="alert" className="alert alert-error mt-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 shrink-0 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Error! {error}</span>
                        <button onClick={closeAlert}>
                            <X className='w-5 h-5' />
                        </button>
                    </div>
                )
            }
        </main>
    );
}
