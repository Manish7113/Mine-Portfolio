'use client'

import Image from 'next/image'
import JSProject from '../../../assets/JsProjectOne.png'
import officeDeskImage from '../../../assets/officeDesk.jpg'
import { Button } from '@mui/material'

export default function ProjectCardTwoMain(){
    return(
        <div className="ProjectCardContainer">
            <Image src={officeDeskImage} className='img-fluid projectImage' width={100} height={100} alt='image not found' ></Image> 
            <div className='d-flex flex-column justify-content-start aling-items-start p-3'>
                <p className='fs-lgg fw-500 roboto-regular p-0 m-0 pb-1'>Project Name</p>
                <p className='fs-mdd fw-500'>Project description that means what the project dos and what dont and if you needed to be toher thins that required</p>
                <div className='d-flex justify-content-start align-items-center gap-2 mt-2'>
                    <Button variant='outlined' color='secondary' className='px-4' >
                        View 
                    </Button>
                    <Button variant='contained' color='warning' className='px-4'>
                        Code 
                    </Button>
                </div>

            </div>

        </div>
    )
}