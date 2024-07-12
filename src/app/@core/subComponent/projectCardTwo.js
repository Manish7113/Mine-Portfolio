'use client'

import Image from 'next/image'

import ProjectOne from '../../../assets/projectOne.jpg'
import ProjectTwo from '../../../assets/projectTwo.jpg'

import { Button } from '@mui/material'

function ProjectCardTwoMain() {
    return (
        <div className="ProjectCardContainer">
            <Image src={ProjectOne} className=' projectImage' width={100} height={100} alt='image not found' ></Image>
            <div className='d-flex flex-column justify-content-start aling-items-start p-3'>
                <p className='fs-lgg fw-500 roboto-regular p-0 m-0 pb-1'>Guess The Number</p>
                <p className='fs-mdd fw-500'>The Guess the Number game is a simple game where you try to identify a secret number hidden by the computer</p>
                <div className='d-flex justify-content-start align-items-center gap-2 mt-2'>
                    <Button variant='outlined' color='secondary' className='px-4' onClick={()=>{
                        window.open('https://manish7113.github.io/guessTheNumberGame/')
                    }} >
                        View
                    </Button>
                    <Button variant='contained' color='warning' className='px-4' onClick={()=>{
                        window.open('https://github.com/Manish7113/guessTheNumberGame')
                    }}>
                        Code
                    </Button>
                </div>

            </div>

        </div>
    )
}
function ProjectCardTwo() {
    return (
        <div className="ProjectCardContainer">
            <Image src={ProjectTwo} className=' projectImage' width={100} height={100} alt='image not found' ></Image>
            <div className='d-flex flex-column justify-content-start aling-items-start p-3'>
                <p className='fs-lgg fw-500 roboto-regular p-0 m-0 pb-1'>Body Mass Index</p>
                <p className='fs-mdd fw-500'>Body mass index (BMI) is a common health screening tool that estimates body fat based on height and weight
                </p>
                <div className='d-flex justify-content-start align-items-center gap-2 mt-2'>
                    <Button variant='outlined' color='secondary' className='px-4'onClick={()=>{
                        window.open('https://manish7113.github.io/BodyMaskIndex/')
                    }} >
                        View
                    </Button>
                    <Button variant='contained' color='warning' className='px-4' onClick={()=>{
                        window.open('https://github.com/Manish7113/BodyMaskIndex')
                    }}>
                        Code
                    </Button>
                </div>

            </div>

        </div>
    )
}

export { ProjectCardTwoMain, ProjectCardTwo }