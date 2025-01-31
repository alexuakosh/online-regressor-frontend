import PageComponent from "@/components/Page/PageComponent";
import img1 from "./img/Dika-Blog-Banner-CW-4.png"
import img2 from "./img/62a5ee3a-36b2-4e9f-b5a6-567ef816f2a0.jpg"
import img3 from "./img/images.jpg"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Budgeting',
    description: 'Find out more about budgeting',
}


const description = [
    "Feeling financially adrift? Budgeting can be your anchor. It's not about punishment, but understanding where your money goes and steering it towards what matters most. Track income, expenses, and set realistic goals. It's a flexible journey, adjust as needed, and watch your financial confidence rise with every step. Budget wisely, sail smoothly.",
    `<h6 className='font-bold mb-2'>Problems that the budgeting system solves:</h6>
    <ul className='list-disc list-inside'>
        <li>Business analysis and synthesis – understanding the business, setting development goals and analyzing alternatives;</li>
        <li>Financial accounting – forces you to take into account and think about actions taken earlier, and this helps you make the right decisions in the future;</li>
        <li>Financial planning – involves drawing up more or less detailed plans and thereby makes it possible to think about the future;</li>
        <li>Financial control – makes it possible to compare goals and results obtained, identify strengths and weaknesses of the business;</li>
        <li>Motivation – involves participation of various managers in development of plans, ensures clarity of goals, punishment for failure, reward for overfulfillment;</li>
        <li>Communication – coordination of plans of departments, searching for compromises, assigning responsibilities to performers, coordination of functional planning blocks.</li>
    </ul>`
]

export default function BpPage() {
    return (
        <PageComponent title={'Budgeting'}
            intro={'Taking control'}
            description={description}
            images={[img1, img2, img3]}
        />
    );
}