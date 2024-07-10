'use client'
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import AnalogClock from 'analog-clock-react';
import AnalogClock from 'analog-clock-react';


export default function Navbar() {

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


    const handleClose = ()=>{
        setShowSideBar(false)
    }

   


    let options = {
        
            useCustomTime: false,
            width: "100px",
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
                            mode === 'light' ? <button onClick={() => {
                                handleMode('dark')
                            }} >
                                <Icon icon="ph:moon-bold" className='m-0 p-0 ' />
                            </button> : <button onClick={() => {
                                handleMode('light')
                            }} >
                                <Icon icon="uil:sun" className='m-0 p-0 ' />
                            </button>
                        }
                    </div>
                  
                    <Icon icon="icon-park-outline:hamburger-button" className='m-0 p-0 fs-xll ' onClick={()=>{
                        setShowSideBar(true)
                    }} />

                </div>

            </nav>
            <Offcanvas show={showSideBar} onHide={handleClose} placement='end' className='sideBar'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <AnalogClock {...options} />
                </Offcanvas.Body>
            </Offcanvas>

        </header>
    )
}