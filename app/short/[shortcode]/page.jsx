"use client"
import axios from 'axios'
import { Loader2 } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function UrlRedirect() {
    const [error, setError] = useState('')
    const param = useParams();
    const router = useRouter()

    const redirect = async () => {
        try {
            const response = await axios.get(`https://spring-boot-shortmeurl-production.up.railway.app:8080:8080/api/v1/get-original/${param.shortcode}`)

            if (response.status === 200) {
                router.replace(response.data) 
            }
        } catch (error) {
            console.error(error)
            setError(error.response?.data?.message || 'Something went wrong!') 
        }
    }

    useEffect(() => {
        if (param.shortcode) {
            redirect();
        }
    }, [param?.shortcode]) // Added param.shortcode in dependency array for better reactivity

    return (
        <>
            {
                error ? (
                    <div className='min-h-screen flex flex-col justify-center items-center'>
                        <p>{error}</p>
                        <br />
                        <p>Please Check the URL</p>
                    </div>
                ) : (
                    <div className='min-h-screen flex justify-center items-start mt-60'>
                        <Loader2 className='w-10 h-10 animate-spin' /> <p>Redirecting....</p>
                    </div>
                )
            }
        </>
    )
}
