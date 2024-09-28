import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import imgMe from '../../src/img/meInderjit.png'


gsap.registerPlugin(useGSAP);


function Nav() {
    const [showArrow, SetShowArrow] = useState(false);

    useGSAP(()=>{
        const aTM = gsap.timeline()
        aTM.from('.naneCont',{
            y:-100,
            duration:0.5,
            opacity:0
        })
        aTM.from('.ConnectCont',{
            y:-100,
            duration:0.5,
            opacity:0
        })
    },[])

    function ArrowSet(){
        SetShowArrow(true)
    }

    function ArrowLeav(){
        SetShowArrow(false)
    }

    return (
        <>
            {/* Nav-Cont */}
            <div className="navDiv w-full h-[70px] px-[3vw] flex justify-between items-center z-20">

                {/* Name-Cont */}
                <div className="naneCont w-[180px] h-[45px] bg-[#EDEEF0] rounded-full flex items-center">

                    {/* LogoCircle */}
                    <div className="logoCircle w-[40px] h-[40px] bg-[#696969] rounded-full ml-[2px] overflow-hidden"> 
                        <img src={imgMe} alt="" />
                    </div>

                    {/* logoText */}
                    <div className="logoText w-fit h-[55px] flex justify-center items-center ml-2 font-semibold">
                        <h1 className="logoAni">Inderjit Singh</h1>
                    </div>
                </div>


                {/* Connect-Cont */}
                <div onMouseEnter={ArrowSet} onMouseLeave={ArrowLeav} className="ConnectCont z-20 w-fit h-fit flex gap-2 justify-center items-center cursor-pointer">
                    { showArrow == true &&
                        <FaArrowRight />
                    }
                    <a href="mailto:me.inderjit21@gmail.com"><h1 className=" talkAni font-semibold text-[18px] mr-[10px] z-20">Let`s Talk</h1></a>
                </div>

            </div>
        </>
    )
}

export default Nav;