import PageComponent from "@/components/Page/PageComponent";
import img1 from "./img/analysisFeature_rezied-1080x675.jpg"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Financial Analysis',
    description: 'Find out more about financial analysis',
}

const description = [
    "What is finance in its essence? The best analogy we can ever declare is that finance is the blood system of your business. The same as blood provides nutrients to all parts of your body, a function provides money while operating your business. Finance is a resource by itself and at the same time it provides resources to all your business links. Like blood, cash always flows, and it is a very important task to detect and eliminate all the blocks on its way to boost its streaming and to control its direction efficiently.",
    "Financial analysis is the process of evaluating businesses, projects, budgets and other finance-related transactions to determine their performance and suitability. Typically, financial analysis is used to analyze whether an entity is stable, solvent, liquid or profitable enough to warrant monetary investment.",
    `<h6 className='font-bold mb-2'>Common types of financial analysis are the following: </h6>
    <ul className='list-disc list-inside'>
        <li>Horizontal analysis</li>
        <li>Vertical analysis</li>
        <li>Plan-actual analysis</li>
        <li>Analysis of liquidity and solvency</li>
        <li>Assets management analysis</li>
        <li>Business activity analysis</li>
        <li>Financial stability analysis</li>
        <li>Profitability analysis</li>
        <li>Growth analysis</li>
    </ul>`,
    "Financial analysis should be performed on a permanent basis with stable periodicity. We surely can satisfy your needs in this domain and help your business become more sustainable and growth-oriented."
]

export default function FaPage() {
    return (
        <PageComponent title={'Financial analysis'}
            intro={'Money loves to be counted'}
            description={description}
            images={[img1]}
        />
    );
}