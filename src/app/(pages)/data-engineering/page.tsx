import PageComponent from "@/components/Page/PageComponent";
import img1 from "./img/3da79af7-d41b-4060-950d-787978da6fab-Data-Governance-Graphic-600x600.png"
import img2 from "./img/Data_engineering_dwh_datalake_etl.jpg"
import img3 from "./img/1_PsnGY7NGiSg7rF2TkVFEUA.png"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Data Engineering',
    description: 'Find out more about data engineering',
}


const description = [
    "At Datarminism we unlock the full potential of your data through expert data and database engineering services. We're not just data wranglers – we're data architects, crafting custom solutions that turn raw information into actionable insights.",
    `<h6 className='font-bold mb-2'>Here's what makes us your data harmony partner:</h6>
    <ul className='list-disc list-inside'>
        <li>Data Engineering Experts: From building robust data pipelines to wrangling massive datasets, our data engineers ensure your data flows smoothly and efficiently.</li>
        <li>Database Architects: We craft secure, scalable databases that house your information, maximizing performance and accessibility.</li>
        <li>Seamless Collaboration: We foster a collaborative environment where data and database engineers work in sync, optimizing every step of the data journey.</li>
        <li>Cutting-Edge Technologies: We embrace the latest advancements in data lakes, real-time analytics, and cloud solutions to keep your data infrastructure future-proof.</li>
        <li>Proven Results: We boast a track record of success, helping businesses across industries make data-driven decisions and achieve measurable results.</li>
    </ul>`,
    "Ready to compose a data symphony that drives success? Let us be your conductor. We'll guide you through every stage, from designing your data infrastructure to unlocking actionable insights."
]

export default function DePage() {
    return (
        <PageComponent title={'Data engineering'}
            intro={'Real miners!'}
            description={description}
            images={[img1, img2, img3]}
        />
    );
}