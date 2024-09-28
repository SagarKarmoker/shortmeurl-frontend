import React from 'react'
import { Card, CardContent } from './ui/card';
import { StarIcon } from 'lucide-react';

export default function TestimonialCard({
    quote,
    author,
    company
}) {
    return (
        (<Card>
            <CardContent className="p-6">
                <div className='flex gap-4 justify-center'>
                    <StarIcon className="h-5 w-5 text-yellow-400" />
                    <StarIcon className="h-5 w-5 text-yellow-400" />
                    <StarIcon className="h-5 w-5 text-yellow-400" />
                    <StarIcon className="h-5 w-5 text-yellow-400" />
                    <StarIcon className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="mt-4 text-lg text-gray-600">{quote}</p>
                <div className="mt-6">
                    <p className="text-base font-medium text-gray-900">{author}</p>
                    <p className="text-base text-gray-500">{company}</p>
                </div>
            </CardContent>
        </Card>)
    );
}