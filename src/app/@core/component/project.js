'use client'

import { useState } from 'react'
import { ProjectCardOne, ProjectCardTwo, ProjectCardThree } from '../subComponent/projectCard'

export default function Project() {


    const [activeTab, setActiveTab]= useState('html')

    const tabs = [
        {
            value: 'html',
            label: 'HTML'
        },
        {
            value: 'css',
            label: 'CSS - 3'
        },
        {
            value: 'js',
            label: 'JavaScript'
        },
        {
            value: 'react',
            label: 'React'
        },
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
                <ProjectCardOne></ProjectCardOne>
                <ProjectCardTwo></ProjectCardTwo>
                <ProjectCardThree></ProjectCardThree>
            </div>




        </div>
    )
}