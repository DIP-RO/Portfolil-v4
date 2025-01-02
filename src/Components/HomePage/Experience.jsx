import React from 'react';
import line from '../../../public/Assets/line.webp';
import { ExperienceData } from '@/Constants/Constants';
import Image from 'next/image';

const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};

const Experience = () => {
    const experienceChunks = chunkArray(ExperienceData, 3);

    return (
        <div id="experience1" className="px-6 lg:px-32 py-20">
            <h2 className="head-text">Experience</h2>
            <div className="flex flex-col gap-12 mt-14">
                {experienceChunks.map((chunk, rowIndex) => (
                    <div key={rowIndex} className="flex flex-col md:flex-row gap-12">
                        {chunk.map((data, i) => (
                            <div
                                className="flex justify-center items-center md:w-1/3"
                                key={`${rowIndex}-${i}`}
                            >
                                <Image
                                    className="w-[120px] h-full rotate-90 block md:hidden"
                                    src={line}
                                    alt="progress-line"
                                />
                                <div className="text-white w-full text-start">
                                    <p className="text-sm">{data.duration}</p>
                                    <Image
                                        className="py-2 md:block hidden"
                                        src={line}
                                        alt="progress-line"
                                    />
                                    <h2 className="text-xl md:text-2xl">{data.jobTitle}</h2>
                                    <h3 className="text-[14px] md:text-[16px]">{data.company}</h3>
                                    <p className="text-xs">{data.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
