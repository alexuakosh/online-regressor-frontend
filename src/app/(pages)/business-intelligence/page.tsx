import PageComponent from "@/components/Page/PageComponent";
import img1 from "./img/bi-concepts-datapine.png"
import img2 from "./img/16495408181641831480.png"
import img3 from "./img/man-touching-financial-analysis-concept-touch-screen-pen-man-touching-financial-analysis-concept-140559880.webp"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Business Intelligence',
    description: 'Find out more about business intelligence',
}


const description = [
    "Nowadays, small or medium size of business is no longer an excuse for not providing smart, information-oriented solutions to your activity. A lot of companies are suffering from lack of sufficient and relevant information provided in an appropriate manner to make strong, game-changing decisions but instead move at random in many cases. Can some unconscious actions provide results? Apparently, sometimes yes. But what they provide more often is missed opportunities, and sometimes disaster. That’s why business intelligence tools come to the top.",
    "We can offer you to integrate your business information to one of two most common solutions – Tableau or Power BI, domain leaders and get through the entire process of informational transforming so that you have guaranteed access to full and high-quality information and take full control and command of what’s happening in your business. From data preparation through the data model building and necessary calculations to the fascinating dashboards, providing the whole picture.",
    "We have a special offer for small business to make intellectual systems widely affordable. Life took a tremendous path from the cell to complex miscellaneous informational systems. Intellectual and conscious actions push world forward. Evolve, not linger."
]
export default function BiPage() {
    return (
        <PageComponent title={'Business Intelligence tools integration'}
            intro={'Information is a Power.'}
            description={description}
            images={[img1, img2, img3]}
        />
    );
}