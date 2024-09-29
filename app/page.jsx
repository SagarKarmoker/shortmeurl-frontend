'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ZapIcon, ChartBarIcon, LockIcon } from 'lucide-react'
import Footer from '@/components/Footer'
import FeatureCard from '@/components/FeatureCard'
import PricingCard from '@/components/PricingCard'
import TestimonialCard from '@/components/TestimonialCard'

export default function Home() {
  const [url, setUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the URL to your backend for shortening
    console.log('URL to shorten:', url)
    // Reset the input
    setUrl('')
  }

  return (
    (<div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="bg-blue-50 py-20">
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Shorten Your URLs, Expand Your Reach
            </h1>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Create short, memorable links in seconds. Track clicks and optimize your online presence.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 flex max-w-2xl mx-auto">
              <Input
                type="url"
                placeholder="Paste your long URL here"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-grow"
                required />
              <Button type="submit" className="ml-3 flex-shrink-0">
                Shorten
              </Button>
            </form>
          </div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-gray-900">
              Why Choose ShortMeURL?
            </h2>
            <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<ZapIcon className="h-6 w-6 text-blue-600" />}
                title="Lightning Fast"
                description="Generate short URLs in milliseconds. Speed up your workflow and save time." />
              <FeatureCard
                icon={<ChartBarIcon className="h-6 w-6 text-blue-600" />}
                title="Detailed Analytics"
                description="Track clicks, geographic data, and more. Make data-driven decisions." />
              <FeatureCard
                icon={<LockIcon className="h-6 w-6 text-blue-600" />}
                title="Secure & Reliable"
                description="Bank-level encryption and 99.9% uptime. Your links are safe and always accessible." />
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
              Simple, Transparent Pricing
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
              <PricingCard
                title="Basic"
                price="$0"
                description="Perfect for personal use"
                features={[
                  "100 links per month",
                  "Basic analytics",
                  "30-day link history"
                ]} />
              <PricingCard
                title="Pro"
                price="$19"
                description="Great for small businesses"
                features={[
                  "Unlimited links",
                  "Advanced analytics",
                  "Custom short domains",
                  "API access"
                ]}
                highlighted={true} />
              <PricingCard
                title="Enterprise"
                price="Custom"
                description="For large organizations"
                features={[
                  "Everything in Pro",
                  "Dedicated support",
                  "SLA guarantees",
                  "Custom integrations"
                ]} />
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
              What Our Customers Say
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                quote="ShortMeURL has revolutionized our marketing campaigns. The analytics are invaluable!"
                author="Jane Doe"
                company="Tech Innovators Inc." />
              <TestimonialCard
                quote="I've tried many URL shorteners, but ShortMeURL is by far the most reliable and user-friendly."
                author="John Smith"
                company="Global Media Group" />
              <TestimonialCard
                quote="The custom domains feature has helped us maintain our brand consistency across all channels."
                author="Emily Johnson"
                company="BrandMasters LLC" />
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How long do shortened links last?</AccordionTrigger>
                <AccordionContent>
                  Our shortened links dont expire. They will remain active as long as your account is active.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I customize my shortened URLs?</AccordionTrigger>
                <AccordionContent>
                  Yes, Pro and Enterprise users can create custom short domains and choose custom back-halves for their URLs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is there an API available?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer a RESTful API for Pro and Enterprise users to programmatically create and manage short URLs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How accurate are the click analytics?</AccordionTrigger>
                <AccordionContent>
                  Our analytics are highly accurate and updated in real-time. We use advanced techniques to filter out bot traffic for more reliable data.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section className="bg-blue-600 py-20">
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white">
              Ready to supercharge your links?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Sign up now and get 100 free URL shortens. No credit card required.
            </p>
            <Button className="mt-8 bg-white text-blue-600 hover:bg-blue-50">
              Get Started for Free
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>)
  );
}
