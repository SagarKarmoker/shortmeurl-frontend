"use client"
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function UrlRedirect() {
    const [originalUrl, setOriginalUrl] = useState('')
    const [url, setUrl] = useState('')
    const param = useParams();
    const router = useRouter()

    const redirect = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/get-original/${param.shortcode}`)

            if(response.status === 200){
                router.replace(response.data)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        redirect();
    }, [param, url])

    return (
        <div>page</div>
    )
}
