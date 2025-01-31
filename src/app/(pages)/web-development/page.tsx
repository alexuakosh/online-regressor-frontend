import PageComponent from "@/components/Page/PageComponent";
import img1 from "./img/Mobile-app1.jpg"
import img2 from "./img/web-application-development-process.png"
import img3 from "./img/How-To-Choose-A-Web-And-Mobile-App-Development-Company.jpg"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Web Application Development',
    description: 'Find out more about web application development',
}

const description = [
    "Let’s assume you’ve made the whole setup from business concept creation to legal issues fulfillment and ready to release your company out on a long voyage. What shouldn’t be forgotten? Right, Internet…",
    "In modern world the majority of companies existentially need a representation in the internet either way. Sometimes they need Social Media pages, sometimes Website business card, and sometimes you need full-fledged Web Application to provide your customer with particular products or services.",
    "Anyway, our team can provide you with customized solution in the Web world according to your business model and needs. We can participate at any stage, from building a concept and UI creation to application development and deployment. This can be the harmonious addition to our business development full-cycle services or just a particular task to implement. All you need is to ask and receive qualified service."
]

export default function WdPage() {
    return (
        <PageComponent title={'Web app development'}
            intro={'Must have.'}
            description={description}
            images={[img1, img2, img3]}
        />
    );
}