import React from 'react'
import { Card, CardContent } from './ui/card';
import { CheckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PricingCard({
    title,
    price,
    description,
    features,
    highlighted = false
}) {
    return (
        (<Card
            className={`flex flex-col ${highlighted ? 'border-blue-500 border-2' : ''}`}>
            <CardContent className="p-6 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                <p className="mt-4 text-5xl font-extrabold text-gray-900">{price}</p>
                <p className="mt-2 text-gray-500">{description}</p>
                <ul className="mt-6 space-y-4">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" />
                            <span className="ml-3 text-base text-gray-500">{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <div className="p-6 bg-gray-50 border-t border-gray-100">
                <Button
                    className={`w-full ${highlighted ? 'bg-blue-500 hover:bg-blue-600' : ''}`}>
                    {highlighted ? 'Start your free trial' : 'Get started'}
                </Button>
            </div>
        </Card>)
    );
}
