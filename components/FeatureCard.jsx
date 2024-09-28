import React from 'react'
import { Card, CardContent } from '@/components/ui/card';

export default function FeatureCard({
    icon,
    title,
    description
}) {
    return (
        (<Card>
            <CardContent className="p-6">
                <div
                    className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-50 mb-4">
                    {icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                <p className="mt-2 text-base text-gray-500">{description}</p>
            </CardContent>
        </Card>)
    );
}