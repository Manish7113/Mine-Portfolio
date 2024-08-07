'use client'

import { useState } from 'react'

import {ProjectCardTwoMain, ProjectCardTwo, WeatherProject} from '../subComponent/projectCardTwo'

import { useRouter } from 'next/navigation'

export default function Project() {
    const router = useRouter()



    const [activeTab, setActiveTab]= useState('js')

    const tabs = [
        // {
        //     value: 'html',
        //     label: 'HTML'
        // },
        // {
        //     value: 'css',
        //     label: 'CSS - 3'
        // },
        {
            value: 'js',
            label: 'All'
        },
        // {
        //     value: 'react',
        //     label: 'React'
        // },
    ]
    return (
        <div className="container projectSection mb-5">
            <p className="sectionHeading fs-xll roboto-regular ">Projects</p>
            <div className='d-flex justify-content-start align-items-center flex-wrap  mb-5 tabContainer'>
                {
                    tabs?.map((item, index)=>(
                        <button className={activeTab === item?.value ? `tab activeTab` : 'tab'  } key={index} onClick={()=>{
                            setActiveTab(item?.value)
                        }}>{item?.label}</button>
                        
                    ))
                }


            </div>
            <div className='d-flex justify-content-center align-items-center flex-wrap gap-3'>
                <ProjectCardTwoMain></ProjectCardTwoMain>
                <ProjectCardTwo></ProjectCardTwo>
                <WeatherProject></WeatherProject>
                {/* <ProjectCardTwoMain></ProjectCardTwoMain> */}
               
            </div>

            {/* <div className="container pb-3 d-flex justify-content-center align-items-center pt-5">
                    <button className="showMoreButton" onClick={()=>{
                        router.push('/[radhe]')
                    }} >View More</button>
                </div> */}




        </div>
    )
}