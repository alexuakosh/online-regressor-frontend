import PageComponent from "@/components/Page/PageComponent";
import img from "../../public/240_F_353995594_6AW7CYzgqkSTCMktfFSm2XyjvLDzauDX.jpg"


const description = [
    "At Datarminism we bridge the gap between data and decisive action. We offer a comprehensive suite of financial and investment analysis, business consulting, business intelligence (BI) integration, and data analysis services, designed to unlock your full potential. Whether you're seeking strategic guidance, optimized operations, or actionable insights, we empower you to make informed decisions and navigate the market with confidence.",
    "At Datarminism, data transforms from raw potential to your unwavering compass. We empower you to navigate market trends, optimize operations, and achieve strategic growth with a comprehensive suite of solutions.",
    "Dive deep into financial and investment opportunities, fueled by expert analysis and unwavering clarity, to make decisions with unshakeable confidence. We craft robust data infrastructure, a future-proof foundation for your analytics and insights to thrive. Leverage data-driven consulting to unlock hidden efficiencies, streamline processes, and empower your team with actionable strategies. Foster an information-rich environment through seamless BI integration, making data accessible and actionable across all levels of your organization. Bridge the gap between data and decisions with custom-built web applications, dashboards, and interactive tools, driving impactful results with every click.",
    "Datarminism your trusted partner for data-driven success."
]

export default function HomePage() {
    return (
        <PageComponent title={'Datarminism'}
            intro={''}
            description={description}
            images={[img]}
        />
    );
}