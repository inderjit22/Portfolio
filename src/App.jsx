import './App.css'
import Nav from './components/Nav'
import CircleAnim from './components/CircleAnim'
import Mode from './components/Mode'
import '../src/components/allC.css'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import mac from '../src/img/mac.png'
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { useState } from 'react'
gsap.registerPlugin(ScrollTrigger);
import img1 from '../src/img/1.png'
import img2 from '../src/img/2.png'
import img3 from '../src/img/3.png'
import img4 from '../src/img/4.png'
import img5 from '../src/img/5.png'
import img6 from '../src/img/6.png'
import img7 from '../src/img/7.png'
import SocialLink from './components/SocialLink'
import Projects from './components/Projects'
import Lenis from 'lenis'
import imgMe from '../src/img/meInderjit.png'


gsap.registerPlugin(useGSAP);

function App() {

  useGSAP(() => {

    const perTL = gsap.timeline()

    perTL.from('.firstTitle', {
      x: -100,
      duration: 0.5,
      opacity: 0,
      ease: "circ.out",
    })
    perTL.from('.secTitle ', {
      x: -100,
      duration: 0.5,
      opacity: 0,
      ease: "circ.out",
    })
    perTL.from('.MMAD ', {
      scale: 0,
      duration: 0.3,
      opacity: 0,
      ease: "circ.out",
    })

  }, [])


  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  window.addEventListener('mousemove', (dets) => {
    gsap.to('.cir', {
      x: dets.x,
      y: dets.y
    })
  })


  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.slideBox',
        start: 'top 80%',
        end: 'top top',
        // markers: true, 
        scrub: true,
      },
    });
    tl.to('.innerSlide', {
      xPercent: -20,
      ease: "circ.out",
    }, 'a')
    tl.from('.aro', {
      rotate: 180,
      ease: "circ.out",
    }, 'a')



    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.aboutCont',
        start: 'top 40%',
        end: 'top top',
        // markers: true, 
        scrub: true,
      },
    });
    tl1.to('body', {
      backgroundColor: `#161616`,
      color: `#F5F5F5`,
      ease: "circ.out",
    }, 'a1')
    tl1.to('.backText', {
      color: `rgb(100, 100, 100)`,
      ease: "circ.out",
    }, 'a1')


    const l1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.SkillCont',
        start: 'top 40%',
        end: 'top top',
        // markers: true, 
        scrub: true,
      },
    });
    l1.to('body', {
      backgroundColor: `#F5F5F5`,
      color: `#161616`,
      ease: "circ.out",
    })


    const l = gsap.timeline({
      scrollTrigger: {
        trigger: '.SkillCont',
        start: 'top 80%',
        end: 'top top',
        // markers: true, 
        scrub: true,
      },
    });
    l.to('.skillSlide', {
      xPercent: -20,
      ease: "circ.out",
    }, 'b')
    l.from('.aroAR', {
      rotate: 180,
      ease: "circ.out",
    }, 'b')

  }, [])


  useGSAP(() => {


    const l3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.projectsCont',
        start: 'top 80%',
        end: 'top top',
        scrub: true,
      },
    });
    l3.to('.proSlide', {
      xPercent: -20,
      ease: "circ.out",
    }, 'c')
    l3.from('.AR', {
      rotate: 180,
      ease: "circ.out",
    }, 'c')

    const l4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.aboutCont',
        start: 'top 50%',
        end: 'top 10%',
        scrub: true,
      },
    });

    l4.from('.imgdiv', {
      x: -100,
      opacity: 0,
      duration: 0.5,
      ease: "circ.out",
    })
    l4.from('.titleName', {
      x: 100,
      opacity: 0,
      duration: 0.5,
      ease: "circ.out",
    })

    l4.from('.titleDis', {
      x: 100,
      opacity: 0,
      duration: 0.5,
      ease: "circ.out",
    })



    const l5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.SkillCont',
        start: 'top 50%',
        end: 'top top',
        scrub: 2,
      },
    });
    l5.from('.skillText', {
      x: -100,
      opacity: 0,
      scrub: 2,
      stagger: 0.2,
      ease: "circ.out",
    })



  }, [])




  const titleName = 'Hey, I`m Inderjit Singh.';
  const FinalTitleName = titleName.split(' ')


  const TitleDesc = "I on an exciting journey to become a proficient Full Stack Web Developer. Currently I`m pursuing MCA. Which is further enhancing my Knowledge and expertisesin the field. I am continuosly honing my skills in essential technologies through various online courses and handson project building, I am immersing my self in the nuances of web technologies, gaining proficiency in frontend & backend.Feel free to reach out me on LinkedIn or Through my personalemail at me.inderjit21@gmail.com.Thanks You for visiting my Portfolio."
  const FinalDesc = TitleDesc.split(' ')


  function ScaleCir() {
    gsap.to('.cir', {
      scale: 4,
    })
  }

  function PreCir() {
    gsap.to('.cir', {
      scale: 1,
      onComplete: () => SetImgCir(false),
    })
  }

  const [ImgCir, SetImgCir] = useState(false)

  const imgArr = [
    img1, 
    img2,
    img3,
    img4,
    img7,
    img5,
    img6,
  ];


  return (
    <>
      <div className="mainCont w-full h-fit relative">

        <div className="cir max-sm:hidden z-19 w-[30px] h-[30px] border-[2px] border-[#FE5F25] rounded-full fixed 
         translate-x-[-50%] translate-y-[-50%] overflow-hidden">
          {ImgCir !== false &&
            <img src={imgArr[ImgCir]} />
          }
        </div>
        <div className="cont1 w-full h-[40vh] flex flex-col max-sm:h-[60vh] mt-[10px]">
          <Nav className='navAni' />
          {/* Title */}
          <div className=" z-20  max-sm:mt-[50px] TitleBox w-full h-fit flex justify-between items-end px-[3vw] mt-8">
            <h1 className=' max-sm:text-[14vw] max-sm:leading-[50px] max-sm:mb-[18px] text-[7vw] tracking-[-2px] mix-blend-difference max-md:text-[9vw] max-lg:text-[10vw] firstTitle'>Web Developer</h1>
            {/* circle-Animation */}
            <div className='circleAnimationBox flex gap-2 max-sm:hidden'>
              <CircleAnim />
              <CircleAnim />
            </div>
          </div>
          {/* Desc */}
          <div className="desc z-20  descBox w-full h-fit  px-[3vw] flex items-center  max-2xl:flex-col-reverse max-2xl:items-start ">
            <Mode />
            <h1 className=' secTitle max-sm:text-[9vw] z-20  max-sm:leading-[40px] max-sm:mb-[18px] max-2xl:ml-[0px] ml-[20px] text-[3vw] font-[200]  max-md:text-[6vw] max-lg:text-[6vw] max-lg:leading-[70px] max-xl:text-[6vw] max-xl:leading-[70px]  max-xl:mb-[20px] max-2xl:text-[5vw] '>Turning Ideas Into Digital Reality</h1>
          </div>
        </div>
        <div className="MMAD bg-cover w-full h-[60vh] max-sm:h-[40vh] bg-white mt-[30px] relative overflow-hidden">
          <div className='bg1 w-full h-full absolute z-0'>
          </div>
          <div className="MTop  relative w-full h-full flex justify-center items-center z-10">
            <div className='mac z-[22] w-fit h-fit'>
              <img className='' src={mac} alt="" />
            </div >
          </div >
        </div >
        <div className="aboutCont w-full sm:h-fit min-h-[100vh] overflow-hidden ">
          <div className="slideBox mt-[20px] w-full h-fit overflow-hidden">
            <div className='innerSlide w-fit h-fit flex gap-7 justify-center items-center'>
              <h1 className='text-[6vw] bt tracking-[-2px] max-md:text-[12vw] '>ABOUT</h1>
              < HiOutlineArrowSmLeft className='text-[6vw] max-md:text-[12vw] aro text-[#FE5F25] ' />
              <h1 className='text-[6vw] bt tracking-[-2px] max-md:text-[12vw]'>ABOUT</h1>
              < HiOutlineArrowSmLeft className='text-[6vw] max-md:text-[12vw] aro text-[#FE5F25] ' />
              <h1 className='text-[6vw] bt tracking-[-2px] max-md:text-[12vw]'>ABOUT</h1>
              < HiOutlineArrowSmLeft className='text-[6vw] max-md:text-[12vw] aro text-[#FE5F25] ' />
              <h1 className='text-[6vw] bt tracking-[-2px] max-md:text-[12vw]'>ABOUT</h1>
              < HiOutlineArrowSmLeft className='text-[6vw] max-md:text-[12vw] aro text-[#FE5F25] ' />
              <h1 className='text-[6vw] bt tracking-[-2px] max-md:text-[12vw]'>ABOUT</h1>
              < HiOutlineArrowSmLeft className='text-[6vw] max-md:text-[12vw] aro text-[#FE5F25] ' />
              <h1 className='text-[6vw] bt tracking-[-2px] max-md:text-[12vw]'>ABOUT</h1>
              < HiOutlineArrowSmLeft className='text-[6vw] max-md:text-[12vw] aro text-[#FE5F25] ' />
              <h1 className='text-[6vw] bt tracking-[-2px] max-md:text-[12vw]'>ABOUT</h1>
              < HiOutlineArrowSmLeft className='text-[6vw] max-md:text-[12vw] aro text-[#FE5F25] ' />
            </div>
          </div>
          {/* About Me */}
          <div className="aboutMeCont mt-[40px] z-20 w-full flex px-[3vw] max-md:flex-col max-xl:flex-col">
            <div className="imgdiv w-[500px] h-[600px] bg-orange-500 flex justify-center overflow-hidden z-20 m-auto rounded-xl max-md:w-[70%] max-sm:h-[300px] max-xl:w-[50%] max-xl:mt-[20px]">
              <img src={imgMe} className=' object-cover ' />
            </div>

            <div className="aboutBox w-[60%] h-fit px-[3vw] z-20 m-auto max-md:w-[100%] max-md:mt-[40px] max-xl:w-[100%] max-xl:mt-[100px]">
              <h1 className='titleName tracking-[-2px] flex gap-[7px] z-20 max-sm:text-[2rem] max-md:text-[2.7rem] max-xl:text-[3.7rem]'>
                {
                  FinalTitleName.map((item, index) => {
                    return (
                      <span key={index} >{item}</span>
                    )
                  })
                }
              </h1>
              <div className='titleDis flex flex-wrap gap-[7px] z-20 max-sm:text-[16px] max-sm:leading-[17px] max-md:text-[20px] max-xl:text-[27px]'>
                {
                  FinalDesc.map((item, index) => {
                    return (
                      <span key={index}>{item}</span>
                    )
                  })
                }
                <div className='w-full h-fit mt-[20px] flex gap-[18px] max-xl:justify-end max-xl:mt-[20px] '>
                  <CircleAnim />
                  <CircleAnim />
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-fit py-2 px-[3vw] max-sm:gap-4 flex justify-around max-sm:mt-[30px] sm:mt-[100px] flex-wrap '>
          <a href="https://www.linkedin.com/in/inderjit-singh-web-developer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><SocialLink text={'LinkedIn'} /></a>
            <SocialLink text={'Instagram'} />
            <a href="https://x.com/inderjit_in/"><SocialLink text={'X/Twiter'} /></a>
            <a href="https://github.com/inderjit22?tab=repositories"><SocialLink text={'Github'} /></a>
            <a href="mailto:me.inderjit21@gmail.com"><SocialLink text={'Email'} /></a>
          </div>
          {/* SKILL */}
          <div className="SkillCont w-full sm:min-h-[100vh]  max-sm:mt-[30px] mt-[70px] flex flex-col z-22 ">

            <div className="SkillBox mt-[20px] w-full h-fit overflow-hidden">
              <div className='skillSlide w-fit h-fit flex gap-7 justify-center items-center'>
                <h1 className='text-[6vw] bt tracking-[-2px] max-md:text-[12vw] '>Skill</h1>
                < HiOutlineArrowSmLeft className='text-[6vw] max-md:text-[12vw] aroAR text-[#FE5F25]' />
                <h1 className='text-[6vw] bt tracking-[-2px] max-md:text-[12vw]'>Skill</h1>
                < HiOutlineArrowSmLeft className='text-[6vw] max-md:text-[12vw] aroAR text-[#FE5F25]' />
                <h1 className='text-[6vw] bt tracking-[-2px] max-md:text-[12vw]'>Skill</h1>
                < HiOutlineArrowSmLeft className='text-[6vw] max-md:text-[12vw] aroAR text-[#FE5F25]' />
                <h1 className='text-[6vw] bt tracking-[-2px] max-md:text-[12vw]'>Skill</h1>
                < HiOutlineArrowSmLeft className='text-[6vw] max-md:text-[12vw] aroAR text-[#FE5F25]' />
                <h1 className='text-[6vw] bt tracking-[-2px] max-md:text-[12vw]'>Skill</h1>
                < HiOutlineArrowSmLeft className='text-[6vw] max-md:text-[12vw] aroAR text-[#FE5F25]' />
                <h1 className='text-[6vw] bt tracking-[-2px] max-md:text-[12vw]'>Skill</h1>
                < HiOutlineArrowSmLeft className='text-[6vw] max-md:text-[12vw] aroAR text-[#FE5F25]' />
                <h1 className='text-[6vw] bt tracking-[-2px] max-md:text-[12vw]'>Skill</h1>
                < HiOutlineArrowSmLeft className='text-[6vw] max-md:text-[12vw] aroAR text-[#FE5F25]' />
              </div>
            </div>
            <div onMouseEnter={ScaleCir} onMouseLeave={PreCir} className="ddivCont w-full h-fit flex flex-col">
              <div onMouseEnter={() => SetImgCir(0)} className="SKILLOX html w-full h-fit py-2 mt-[50px] px-[3vw] border-b-[2px] border-b-gray-300 z-20 ">
                <h1 className='skillText z-20 max-sm:text-[2rem]'>HTML</h1>
              </div>
              <div onMouseEnter={() => SetImgCir(1)} className="SKILLOX css w-full h-fit py-2  px-[3vw] border-b-[2px] border-b-gray-300  z-20  ">
                <h1 className='skillText z-20 max-sm:text-[2rem] '>CSS</h1>
              </div>
              <div onMouseEnter={() => SetImgCir(2)} className="SKILLOX tw w-full h-fit py-2  px-[3vw] border-b-[2px] border-b-gray-300  z-20  ">
                <h1 className='skillText z-20 max-sm:text-[2rem] '>Tailwind CSS</h1>
              </div>
              <div onMouseEnter={() => SetImgCir(3)} className="SKILLOX js w-full h-fit py-2  px-[3vw] border-b-[2px] border-b-gray-300  z-20  ">
                <h1 className='skillText z-20 max-sm:text-[2rem] '>JavaScript</h1>
              </div>
              <div onMouseEnter={() => SetImgCir(4)} className="SKILLOX gg w-full h-fit py-2  px-[3vw]  border-b-[2px] border-b-gray-300 z-20  ">
                <h1 className='skillText z-20 max-sm:text-[2rem] '>Git-GitHub</h1>
              </div>
              <div onMouseEnter={() => SetImgCir(5)} className="SKILLOX rj w-full h-fit py-2  px-[3vw] border-b-[2px] border-b-gray-300  z-20  ">
                <h1 className='skillText z-20 max-sm:text-[2rem] '>React JS</h1>
              </div>
              <div onMouseEnter={() => SetImgCir(6)} className="SKILLOX gsap w-full h-fit py-2  px-[3vw] border-b-[2px] border-b-gray-300  z-20  ">
                <h1 className='skillText z-20 max-sm:text-[2rem] '>GSAP</h1>
              </div>
            </div>
          </div>
          {/* Projects */}
          <div className="projectsCont w-full min-h-[100vh] max-sm:mt-[40px] mt-[70px] flex flex-col">
            <div className="proBox mt-[20px] w-full h-fit overflow-hidden">
              <div className='proSlide w-fit h-fit flex gap-7 justify-center items-center'>
                <h1 className='text-[6vw] bt tracking-[-2px] max-md:text-[12vw] '>Projects</h1>
                < HiOutlineArrowSmLeft className='text-[6vw] max-md:text-[12vw] AR text-[#FE5F25]' />
                <h1 className='text-[6vw] bt tracking-[-2px] max-md:text-[12vw]'>Projects</h1>
                < HiOutlineArrowSmLeft className='text-[6vw] max-md:text-[12vw] AR text-[#FE5F25]' />
                <h1 className='text-[6vw] bt tracking-[-2px] max-md:text-[12vw]'>Projects</h1>
                < HiOutlineArrowSmLeft className='text-[6vw] max-md:text-[12vw] AR text-[#FE5F25]' />
                <h1 className='text-[6vw] bt tracking-[-2px] max-md:text-[12vw]'>Projects</h1>
                < HiOutlineArrowSmLeft className='text-[6vw] max-md:text-[12vw] AR text-[#FE5F25]' />
                <h1 className='text-[6vw] bt tracking-[-2px] max-md:text-[12vw]'>Projects</h1>
                < HiOutlineArrowSmLeft className='text-[6vw] max-md:text-[12vw] AR text-[#FE5F25]' />
                <h1 className='text-[6vw] bt tracking-[-2px] max-md:text-[12vw]'>Projects</h1>
                < HiOutlineArrowSmLeft className='text-[6vw] max-md:text-[12vw] AR text-[#FE5F25]' />
                <h1 className='text-[6vw] bt tracking-[-2px] max-md:text-[12vw]'>Projects</h1>
                < HiOutlineArrowSmLeft className='text-[6vw] max-md:text-[12vw] AR text-[#FE5F25]' />
              </div>
            </div>
            <div className="porjectDiv w-full h-fit flex flex-wrap justify-center items-center mt-[70px] mb-[50px] gap-[20px] overflow-hidden">
              <Projects />
            </div>
          </div>
        </div>
        <hr className='mb-4' />
        <div className='w-full h-fit py-2 px-[3vw] max-sm:gap-4 flex justify-around  flex-wrap '>
          <a href="https://www.linkedin.com/in/inderjit-singh-web-developer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><SocialLink text={'LinkedIn'} /></a>
          <SocialLink text={'Instagram'} />
          <a href="https://x.com/inderjit_in/"><SocialLink text={'X/Twiter'}/></a>
          <a href="https://github.com/inderjit22?tab=repositories"><SocialLink text={'Github'} /></a>
          <a href="mailto:me.inderjit21@gmail.com"><SocialLink text={'Email'} /></a>
        </div>
      </div >

    </>
  )
}

export default App
