import React, { useState } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function Mode() {
    const [modeChange, SetModeChange] = useState(true)

    useGSAP(()=>{
        gsap.from('.mos',{
            x:-100,
            duration:0.4,
            opacity:0
        })
    })

    function modeChangeHandler(){
        if(modeChange == true){
            SetModeChange(false)
        }
        else{
            SetModeChange(true)
        }
    }

    return (
        <>
            {modeChange == false ?
                (
                    <div className=" mos w-[180px] h-[60px] bg-[#EDEEF0] rounded-full flex items-center">

                        <div onClick={modeChangeHandler} className=" w-[55px] h-[55px] font-semibold bg-black rounded-full ml-[2px] flex justify-center items-center">
                            <h1 className="text-white" >Off</h1>
                        </div>

                        <div className="cursor-pointer w-fit h-[55px] flex justify-center items-center ml-2 ">
                            <h1>Coding Mode</h1>
                        </div>
                    </div>
                ) :
                (
                    <div className=" mos w-[180px] h-[60px] bg-[#EDEEF0] rounded-full flex justify-between items-center">

                        <div className=" w-fit h-[55px]  flex justify-center items-center ml-4 ">
                            <h1>Coding Mode</h1>
                        </div>

                        <div onClick={modeChangeHandler} className=" cursor-pointer w-[55px] h-[55px] font-semibold bg-[#FE5F25] rounded-full mr-[2px] flex justify-center items-center">
                            <h1 className="text-white">ON</h1>
                        </div>
                    </div>
                )

            }


        </>
    )
}

export default Mode;