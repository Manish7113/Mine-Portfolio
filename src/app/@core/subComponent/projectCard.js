'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


 function ProjectCardOne(){
    const router = useRouter()
    return(
    <div className="projectCard projectCardImage-1">
        <div className="subProjectCard d-flex flex-column justify-content-end align-items-start">
        <div className='aboutProject p-2 '>
                <p className='name fs-lgg  fw-500 w-100'>Real Estate Landing page</p>
              
                <button className='button' onClick={(e)=>{
                    e.stopPropagation()
                    router.push('https://www.google.com/')
                }}>Get Code</button>
            </div>

        </div>
    </div>
        
    )
}
 function ProjectCardTwo(){
    const router = useRouter()
    return(<div className="projectCard projectCardImage-2">
        <div className="subProjectCard d-flex flex-column justify-content-end align-items-start">
        <div className='aboutProject p-2 '>
                <p className='name fs-lgg  fw-500 w-100'>Real Estate Landing page</p>
              
                <button className='button' onClick={(e)=>{
                    e.stopPropagation()
                    router.push('https://www.google.com/')
                }}>Get Code</button>
            </div>

        </div>
    </div>
        
    )
}
 function ProjectCardThree(){
    const router = useRouter()
    return(
        <div className="projectCard projectCardImage-1">
        <div className="subProjectCard d-flex flex-column justify-content-end align-items-start">
        <div className='aboutProject p-2 '>
                <p className='name fs-lgg  fw-500 w-100'>Real Estate Landing page</p>
              
                <button className='button' onClick={(e)=>{
                    e.stopPropagation()
                    router.push('https://www.google.com/')
                }}>Get Code</button>
            </div>

        </div>
    </div>
        
    )
}

export {ProjectCardOne , ProjectCardTwo , ProjectCardThree}