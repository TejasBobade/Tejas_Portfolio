import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('tejasbobade2002@gmail.com');

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        },2000)
    }
  return (
    <section className='c-space my-20' id='about'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext'>Hi, I'm Tejas</p>
                        <p className='grid-subtext'>With hands-on experience as a web development intern, I have honed my expertise in both frontend and backend development. My skill set is particularly focused on creating dynamic and visually engaging animated 3D websites, delivering innovative and interactive user experiences.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:w-[276px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext'>Tech Stack</p>
                        <p className='grid-subtext'>I specialize in JavaScript/TypeScript with a focus on React and Next.js ecosystems. I have knowledge of HTML, CSS, Tailwind CSS, Shadcn-UI, Aceternity-UI, SQL, Python, Express, Mongoose, TanStack Query , Three.js, Git, Github. </p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-4'>
                <div className='grid-container'>
                    <div className='rounded-3xl w-full sm:h-[326px] h-flex flex justify-center items-center'>
                        <Globe
                        height={326}
                        width={326}
                        backgroundColor='rgba(0, 0, 0, 0)'
                        backgroundImageOpacity={0.5}
                        showAtmosphere
                        showGraticules
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        labelsData={[{
                            lat: 18.5204, lng: 73.8567, 
                            text: "I'm Here at Pune", 
                            color: '#F1F1F1',
                            size: 20,
                        }]}
                        />
                    </div>
                    <div>
                        <p className='grid-headtext'>
                            I'm ready to work On-site, Hybrid or Remote.
                        </p>
                        <p className='grid-subtext'>
                            I'm based in pune, with On-site, Hybrid or Remote work availabel.
                        </p>
                        <Button name="Contact Me" isBeam containerClass='w-full mt-10'/>
                    </div>
                </div>
            </div>

            <div className='xl:col-span-2 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext'>My Passion for Coding</p>
                        <p className='grid-subtext'>I love solving problems and building things through code. Coding isn't just my profession - it is my passion.</p>
                    </div>
                </div>          
            </div>

            <div className='xl:col-span-1 xl:row-span-2' >
                <div className='grid-container'>
                    <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />
                    <div className='space-y-2'>
                        <p className='grid-subtext text-center'>Contact Me</p>
                        <div className='copy-container' onClick={handleCopy}>
                            <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" />
                            <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>tejasbobade2002@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About