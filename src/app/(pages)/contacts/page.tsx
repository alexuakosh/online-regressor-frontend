import PageComponent from "@/components/Page/PageComponent";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contacts of Boost Forcing',
    description: 'Find the easy ways how to contact Boost Forcing',
}

const description = [
    "Telephone number: +380738975515 (including WhatsApp)",
    "Telegram: @intelligentles",
    "Email: intelligentle.team@gmail.com"
]

export default function ContactsPage() {
    return (
        <PageComponent title={'Contacts'}
            intro={'Power of connection -->'}
            description={description}
            images={[]}
        />
    );
}