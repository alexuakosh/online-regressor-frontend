import React from 'react';
import Image from "next/image";
import parse from 'html-react-parser';

interface PageProps {
    title: string;
    description: string;
    images: [];
}

export default function PageComponent({ title = '', intro = '', description = '', images = [] }: PageProps | any) {
    const picSize = images.length > 1 ? 300 : 400;

    return (
        <>
            <div className='flex flex-col max-w-3xl'>
                <h1 className='text-4xl font-bold my-6'>{title}</h1>
                {intro != '' && <div className='mb-6 italic font-bold'>{intro}</div>}
                {description.map((paragraph: string, i: number) => {
                    return <div key={i} className='mb-4'>{parse(paragraph)}</div>
                })}
                <div className='flex justify-center my-6'>
                    <div className='w-96 h-px bg-slate-600'></div>
                </div>
            </div>
            <div className='my-2 flex gap-4 flex-col lg:flex-row lg:h-72'>
                {images.map((img: any, i: number) => {
                    if (i == 0) {
                        return <Image key={i}
                        className='lg:self-end'
                        width={picSize}
                        height={picSize}
                        src={img}
                        alt="bi-pic"
                        priority
                    /> 
                    }
                    if (i % 2 == 0) {
                        return <Image key={i}
                            className='hidden lg:block lg:self-end'
                            width={picSize}
                            height={picSize}
                            src={img}
                            alt="bi-pic"
                            priority
                        />
                    }
                    else {
                        return <Image key={i}
                            className='hidden lg:block lg:self-start'
                            width={300}
                            height={300}
                            src={img}
                            alt="bi-pic"
                            priority
                        />
                    }
                })}
            </div>
        </>


    )
}