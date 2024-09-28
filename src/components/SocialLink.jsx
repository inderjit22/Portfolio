import React, { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);


function SocialLink({text}) {

    const sp = useRef()

    function HandelOver() {
        gsap.to(sp.current, {
            y: '-30px'
        })
    }

    function PreOver() {
        gsap.to(sp.current, {
            y: '0vw'
        })
    }


    return (
        <>
            <div onMouseEnter={HandelOver} onMouseLeave={PreOver} className="slbox w-fit h-[30px] overflow-hidden z-20">
                <div ref={sp} className="w-fit h-fit z-20">
                    <span className="text-[20px] flex text-center justify-end px-2 z-20 ">{text}</span>
                    <span className="text-[20px] flex text-center justify-end px-2 z-20 text-[#f86e3c] ">{text}</span>
                </div>
            </div>
        </>
    )
}

export default SocialLink