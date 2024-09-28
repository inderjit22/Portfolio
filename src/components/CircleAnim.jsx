import React, { useRef } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function CircleAnim(){

    const circleAN =useRef()

    function CircleHandleRotate(){
        gsap.to(circleAN.current ,{
            rotate:360,
            duration:1
        })
    }
    function CirclePreRotate(){
        gsap.to(circleAN.current ,{
            rotate:0,
            duration:1
        })
    }

    return(
        <>
        <div ref={circleAN} onMouseEnter={CircleHandleRotate} onMouseLeave={CirclePreRotate} className="circleAnim w-[50px] h-[50px] cursor-pointer bg-white rounded-full flex justify-center items-center mb-4">
            <LuArrowUpRight className=" text-[30px]  text-[#FE5F25]" />
        </div>
        </>
    )
}

export default CircleAnim;