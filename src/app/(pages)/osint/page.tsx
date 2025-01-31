import PageComponent from "@/components/Page/PageComponent";
import img1 from "./img/1_AD_to_2008_AD_trends_in___GDP_contribution_by_major_economies_of_the_world.png"
import img2 from "./img/marketing.png"
import img3 from "./img/ffd18b19.png"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'OSINT',
    description: 'Find out more about analysis of open sources',
}

const description = [
    "Sometimes it’s not necessary to provide in depth-analysis and obtain any inside information to get a picture of the subject of your interest. What you need in such a situation is just to take a look at relevant fragments of the information available to the general public. All the trick is just to look where needed. It may be an analysis of your competitors, or let’s say you need to confirm the reputation of your counterparty, or maybe you need to obtain some government statistics, or to get general overview of some particular market, get a professional slice of the world media regarding some topic of your interest, etc.  Those are some examples of the situations when you can mine a lot of data just using analysis based on the public information.",
    "It’s reasonable to say that you could obtain almost all this information by yourself. However, there are some specific cases when it’s better to acquire the third-party analyst who can conduct this process in the most professional manner. Or maybe your stakeholders require some independent professional to provide this research and to represent their own conclusions.",
    "It is worth admitting a web scrapping separately. If you have some need to get such an automated process of data obtaining from the Web, we also can organize it for you.",
    "Anyway, the analysis of sources is not limited by just searching for information. In most cases it also requires professional interpretation, an opinion that we can definitely provide you based on our knowledge and experience."
]

export default function OsPage() {
    return (
        <PageComponent title={'Analysis of open sources'}
            intro={'Answer on the surface'}
            description={description}
            images={[img1, img2, img3]}
        />
    );
}