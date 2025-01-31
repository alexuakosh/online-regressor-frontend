import PageComponent from "@/components/Page/PageComponent";
import img1 from "./img/0_RC41_1dzkTm_zMeF.jpg"
import img2 from "./img/shutterstock_119233999.jpg"
import img3 from "./img/regression-of-machine-learning.jpg"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Data Analysis and Machine Learning',
    description: 'Find out more about data analysis and machine learning',
}


const description = [
    "Data doesn’t lie. To many entrepreneurs make a mistake by believing their gut feeling instead of analyzing data deeply and circumstantially. Data analysis rocks nowadays. Usually, during business process we have much more useful data than it seems. And if you are, let’s say, data-thrifty business owner we can surely help you utilize this “oil of 21th century” to discover beautiful insights and make your processes well-organized and more conscious.",
    `<h6 className='font-bold mb-2'>What we can offer is:</h6>
    <ul className='list-disc list-inside'>
        <li>Exploratory Data Analysis, with detailed description and visualizations</li>
        <li>Searching statistical patterns in different data features and hypothesis testing</li>
        <li>Building Machine Learning model, if needed, by applying the whole data transformation pipeline (including feature selection, value imputation, scaling, relevant statistical model selection and others)</li>
    </ul>`,
    "All mentioned actions will be implemented by using modern instruments such as Python programming language and its flagship libraries - NumPy, Pandas, Matplotlib, Seaborn, Scipy, Scikit-learn, etc. And results will be represented in a clear communication-oriented manner."
]

export default function DaPage() {
    return (
        <PageComponent title={'Data analysis and Machine learning'}
            intro={'Everything is data...'}
            description={description}
            images={[img1, img2, img3]}
        />
    );
}