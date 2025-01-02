import React, { useEffect, useState } from 'react';
import Balancer from 'react-wrap-balancer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { slideAnimation } from '@/lib/motion';


const AboutMe = () => {

    const AboutMeConstans = [
        {
            title: 'Who I am',
            desc: 'Hello, I`m Dipro Paul, a passionate and innovative Software Engineer based in Bangladesh. At just 24 years old, I`ve already embarked on an exciting journey in the world of Tech Industry. I`m driven by my love for coding, creativity, and the ever-evolving tech,research & Business landscape.'
        },
        {
            title: 'What I Do',
            desc: 'As a software engineer and entrepreneur, I seamlessly merge technical expertise with strategic insight. My work spans software development, business analysis, and market research, alongside conducting research for academic and industry-focused papers. I excel at crafting innovative solutions, analyzing market trends, and turning complex ideas into impactful results, whether through digital applications or scholarly contributions.'
        }
       , 
       {
        title: 'My Journey',
        desc: 'My journey in the tech industry has been both exciting and transformative. I began as a software engineer, where I honed my technical expertise and built a strong foundation in development. Soon after, I received seed funding of 10 lakh TK for my startup, marking the beginning of my entrepreneurial journey. This led to the creation of Web Waiver, a thriving software development agency, where I focus on delivering innovative solutions. Alongside my entrepreneurial pursuits, I also took on the role of Product Executive (Research & Development), contributing to groundbreaking research and product development. Each step has been a milestone in my quest for growth and impact.'
    }
,    
        {
            title: 'My Goal',
            desc: 'Looking ahead, my goal is to make a meaningful impact in the world of technology. I aspire to contribute to innovative projects, create user-centric applications, and engage in collaborations that push the boundaries of technology. My ultimate aim is to become a respected figure in the tech community and inspire the next generation of developers from Bangladesh and beyond.'
        },
        {
            title: 'Bachelor Degree',
            desc: 'Currently, I am pursuing my Bachelor of Science (BSc) in Computer Science and Engineering at Daffodil International University, expected to graduate in 2025.'
        }
,{
    title: 'HSC',
    desc: 'I earned my Higher Secondary Certificate (HSC) from Mahilara Degree College in 2020, maintaining an outstanding GPA of 5.00.'
}
,{
    title: 'SSC',
    desc: 'I completed my Secondary School Certificate (SSC) from Palordi Model High School and College in 2018 with a perfect GPA of 5.00.'
}
        
    ]




    const [sectionRef, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    // State to control whether animations should play
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (inView) {
            setAnimate(true);
        }
    }, [inView]);


    return (
        <section id='about' className='pb-20 pt-32 pl-6 pr-6 lg:pl-32 overflow-hidden relative'>
            <div>
                <motion.div
                    initial='initial'
                    animate={animate ? 'animate' : 'initial'}
                    exit='exit'
                    variants={slideAnimation('up')}>
                    <h2 className='head-text'>About Me</h2>
                    <p className="subtitle">
    Hi, Iam Dipro Paul, a Software Engineer and Entrepreneur with a diverse skill set. I specialize in software development and have a strong focus on business analysis and market research. My work also extends to conducting research for academic papers, where I explore innovative solutions and contribute to the tech industrys knowledge base. I am passionate about building impactful digital products while driving strategic growth through data-driven insights.
</p>

                </motion.div>

                <div ref={sectionRef} className='relative md:pl-10 pl-0  pt-10 w-full'>
                    <motion.div
                        initial='initial'
                        animate={animate ? 'animate' : 'initial'}
                        exit='exit'
                        variants={slideAnimation('left')}
                        className='pt-6   relative z-30 flex flex-wrap gap-8 lg:gap-14'>
                        {
                            AboutMeConstans.slice(0, 2).map((data, i) => <AboutMeCard data={data} key={i} />)
                        }
                    </motion.div>
                    <motion.div

                        initial='initial'
                        animate={animate ? 'animate' : 'initial'}
                        exit='exit'
                        variants={slideAnimation('right')}
                        className='pt-8 relative z-30 lg:pt-12 lg:pl-10 flex flex-wrap gap-8 lg:gap-14'>
                        {
                            AboutMeConstans.slice(2, 4).map((data, i) => <AboutMeCard data={data} key={i} />)
                        }
                    </motion.div>
                    <motion.div

                        initial='initial'
                        animate={animate ? 'animate' : 'initial'}
                        exit='exit'
                        variants={slideAnimation('right')}
                        className='pt-8 relative z-30 lg:pt-12 lg:pl-20 flex flex-wrap gap-8 lg:gap-14'>
                        {
                            AboutMeConstans.slice(4, 6).map((data, i) => <AboutMeCard data={data} key={i} />)
                        }
                    </motion.div>
                    <motion.div

                        initial='initial'
                        animate={animate ? 'animate' : 'initial'}
                        exit='exit'
                        variants={slideAnimation('right')}
                        className='pt-8 relative z-30 lg:pt-12 lg:pl-96 flex flex-wrap gap-8 lg:gap-14'>
                        {
                            AboutMeConstans.slice(6, 7).map((data, i) => <AboutMeCard data={data} key={i} />)
                        }
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutMe;

const AboutMeCard = ({ data }) => {
    return <div className='max-w-[320px] lg:max-w-[490px] z-30   pt-4 pb-6 px-6 lg:px-12 rounded w-full bg-[#010f161f]  border-2 border-opacity-30 border-gray-700'>
        <h2 className='Secordary-Title'>{data.title} </h2>
        <p className='small-text py-2 '><Balancer>
            {data.desc}
        </Balancer>
        </p>
    </div>
}