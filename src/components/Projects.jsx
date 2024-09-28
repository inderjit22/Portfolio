import React from "react";
import './allC.css'
import PI1 from '../projectimg/text-animation.png'
import PI2 from '../projectimg/BMW.png'
import PI3 from '../projectimg/todo.png'
import PI4 from '../projectimg/iE.png'

function Projects() {

    let projectArr = [
        {
            title: 'Text Effect',
            proImg: PI1,
            liveLinke: `https://text-animation-ashy.vercel.app/`,
            codeLink: `https://github.com/inderjit22/text-animation`,
        },
        {
            title: 'BMW Website',
            proImg: PI2,
            liveLinke: `https://bmw-landing-page-codsoft.vercel.app/`,
            codeLink: `https://github.com/inderjit22/BMW-Landing-Page-CodSoft`,
        },
        {
            title: 'ToDo',
            proImg: PI3,
            liveLinke: `https://todo-list-olive-nu.vercel.app/`,
            codeLink: `https://github.com/inderjit22/todo-list`,
        },
        {
            title: 'Image Effect',
            proImg: PI4,
            liveLinke: `https://img-effect-display.vercel.app/`,
            codeLink: `https://github.com/inderjit22/img-effect-display`,
        },
        
    ]



    return (
        <>
            {projectArr.map((item, index) => (
                <div key={index} className="max-sm:w-[90%]  rounded-lg overflow-hidden relative max-sm:h-[300px] w-[300px] h-[350px]  xl:w-[600px]  xl:h-[450px]">
                    <div className="w-full h-[80%]">
                        <img src={item.proImg} className=" rounded-lg object-cover w-full h-full z-10" />
                    </div>
                    <div className="w-full h-fit flex pt-[10px] items-center  px-[7px] justify-between">

                        <h1 className="ptitle leading-[18px] pl-[4px]">{item.title}</h1>

                        <div className="w-fit h-fit flex gap-7px] justify-center items-center">
                            <a href={item.liveLinke}>
                                <button type="button" class="text-white h-fit bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
                                    Live
                                </button>
                            </a>

                            <a href={item.codeLink}>
                                <button type="button" className="text-white h-fit bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                    </svg>
                                    <p className="max-sm:hidden">Github</p>
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            ))
            }
        </>
    )
}

export default Projects;