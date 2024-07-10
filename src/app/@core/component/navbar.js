'use client'
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AnalogClock from 'analog-clock-react';
import { Button, Tooltip} from '@mui/material'
import { useRouter } from 'next/navigation'


export default function Navbar() {
    
    const router = useRouter() 

    const [themeLoaded, setThemeLoaded] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false)


    const [mode, setMode] = useState('light')
    useEffect(() => {
        const theme = localStorage.getItem('theme')
        if (theme) {
            document.querySelector('body').setAttribute('theme', theme);
            console.log(theme)
            setMode(theme)

        }
        setThemeLoaded(true);

    }, [])
    const handleMode = (mode = 'light') => {
        setMode(mode)
        document.querySelector('body').setAttribute('theme', mode);
        localStorage.setItem('theme', mode)

    }


    const handleClose = () => {
        setShowSideBar(false)
    }




    let options = {

        useCustomTime: false,
        width: "110px",
        border: true,
        borderColor: "#000000",
        baseColor: "#000000",
        centerColor: "#000000",
        centerBorderColor: "#ffffff",
        handColors: {
            second: "#ff1900",
            minute: "#ffffff",
            hour: "#fafafa"

        }
    }

    if (!themeLoaded) {
        return null;
    }


    const socialMediaHandlers = [
        {
            icon : 'skill-icons:instagram',
            handleClick : ()=>{
           
               window.open('https://www.instagram.com/kumawatmanish7125/?next=%2F')
            },
            title : 'Instagram'
            
        },
        {
            icon : 'skill-icons:git',
            handleClick : ()=>{
                
                window.open('https://github.com/Manish7113')
            },
            title : 'Git Hub'
        },
        {
            icon : 'skill-icons:linkedin',
            handleClick : ()=>{
                // router.push('https://www.linkedin.com/in/manish-kumawat-ab15b823a/')
                window.open('https://www.linkedin.com/in/manish-kumawat-ab15b823a/')
            },
            title : 'Linked In'
        },
        {
            icon : 'skill-icons:gmail-dark',
            handleClick : ()=>{
                router.push('mailto:kumawatji7113@gmail.com')
                
            },
            title : 'Mail'
        }
    ]



    return (
        <header >
            <nav className=' row p-0 m-0 header py-3 '>
                <aside className='col-8 col-xl-10 col-lg-10 col-md-10 col-sm-8 col-xs-8 d-flex align-items-center'>
                    <h4 className='m-0 p-0 ps-2' >Manish</h4>
                </aside>
                <div className='col-4 col-xl-2 col-lg-2 col-md-2 col-sm-4 col-xs-4 navbar fs-lgg cur-pointer fw-500 d-flex align-items-center justify-content-around px-3'>
                    {/* <Link href='/' className='p-0 m-0 LinkHeading'>Resume</Link> */}

                    <div className='mb-1'>
                        {
                            mode === 'light' ? <Tooltip  title={'Dark'}>
                                 <button onClick={() => {
                                handleMode('dark')
                            }} >
                                <Icon icon="ph:moon-bold" className='m-0 p-0 ' />
                            </button>

                            </Tooltip> :   <Tooltip  title={'Light'}><button onClick={() => {
                                handleMode('light')
                            }} >
                                <Icon icon="uil:sun" className='m-0 p-0 ' />
                            </button></Tooltip>
                        }
                    </div>

                    <Tooltip  title={'Know More'}>

                    <Icon icon="icon-park-outline:hamburger-button" className='m-0 p-0 fs-xll ' onClick={() => {
                        setShowSideBar(true)
                    }} />

                    </Tooltip>

                </div>

            </nav>
            <Offcanvas show={showSideBar} onHide={handleClose} placement='end' className='sideBar'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Know More</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='d-flex flex-column'>
                        <div className='d-flex flex-column justify-content-center align-items-center gap-2'>
                            <AnalogClock {...options} />
                            <p className='fs-mdd fw-500'>Prioritize what matters...</p>
                        </div>
                        
                        <div className='d-flex justify-content-center align-items-center gap-3 mt-3'>
                            
                            <Button variant='contained' color='warning' className='px-4 sideBarButton' onClick={()=>{
                                window.open('https://drive.google.com/file/d/1kifuVPzdu8zcLvqNFsL80MYi25PjjQSo/view?usp=drivesdk')
                            }} >
                               Resume
                            </Button>
                            <Button variant='outlined' color='secondary' className='px-4 sideBarButton' onClick={()=>{
                                window.open('https://drive.google.com/file/d/1knewNKs9sTKoUfHePzbaeRSO8g9A_wZO/view?usp=drivesdk ')
                            }}>
                               Cover Letter
                            </Button>
                        </div>

                        <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
                            <p className='fs-mdd fw-500 mb-3 '>Follow On </p>
                            <div className='container d-flex jusitfy-content-center align-items-center gap-3'>
                                {
                                    socialMediaHandlers.map((item, index)=>{
                                        return(
                                            <Tooltip key={index} title={item?.title}>
                                            <div  onClick={item?.handleClick} className='socialContainer d-flex justify-content-center align-items-center'>
                                            <Icon icon={item?.icon} />
            
                                            </div>
                                            </Tooltip>

                                        )
                                    })
                                }
                               
                               

                            </div>

                        </div>
                        <div className='d-flex justify-content-center align-items-center '>
                        <div className='line mt-5' > 

                        </div>

                        </div>
                       

                    </div>
                </Offcanvas.Body>
            </Offcanvas>

        </header>
    )
}