import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Boost Forcing',
    description: 'The goals and principles of Boost Forcing',
}

export default function AboutUs() {
    return (
        <div className="max-w-3xl">
            <h1 className="text-2xl font-bold text-center my-4">May the force be with you. Set of actions to boost your business growing.</h1>
            <p className="italic font-bold my-4">Who are we? What a comprehensive question.</p>
            <p className="my-2">How we can definitely answer it is to describe our mission through the prism of our skills.</p>
            <p className="my-2">Our team consists of well-educated and experienced professionals who have the aim to perform almost full-cycle and multilayer support of your business by developing, maintaining and adjusting your business framework. Let us first, so to say, get our vocabulary straight. </p>
            <p className="my-2">When we say “developing” it means we can be there for you from the very start, by helping you form and estimate your business idea, helping you create your business plan, advise you regarding your financial model, help with the web appearance, etc.</p>
            <p className="my-2">When we say “maintaining” we mean that we are ready to help you with current financial assessment, creating your budget, applying modern business intelligence tools so that you would be able to stay aligned with the internal and external factors your business get in touch with, could monitor your current state and perform your regular activity in an optimized manner.</p>
            <p className="my-2">When we say “adjusting” we mean consistent consulting process from the deep and substantive analysis and searching for the insights, to implementing those to your business model.When we say “adjusting” we mean consistent consulting process from the deep and substantive analysis and searching for the insights, to implementing those to your business model.</p>
            <p className="my-2">All businesses are unique and various, and we are truly passionate to figure out everything and upgrade all the mechanism. It’s important to emphasize that what we offer is not an audit, when there is always the risk to drown in documents and excessive details and lose the whole picture. Our activity is focused on the key points and very determined to build/rebuild your strategy and boost your performance.</p>
        </div>
    )
}