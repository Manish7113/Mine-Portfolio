'use client'
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function Navbar() {

    const [themeLoaded, setThemeLoaded] = useState(false);
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

    if (!themeLoaded) {
        return null;
    }
    return (
        <header >
            <nav className=' row p-0 m-0 header py-3 '>
                <aside className='col-12 col-xl-10 col-lg-10 col-md-10 col-sm-12 col-xs-12 d-flex align-items-center'>
                    <h4 className='m-0 p-0 ps-2' >Manish</h4>
                </aside>
                <div className='col-12 col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 navbar fs-lgg cur-pointer fw-500 d-flex align-items-center justify-content-between px-3'>
                    <Link href='/' className='p-0 m-0 LinkHeading'>Resume</Link>

                    <div>
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

                </div>

            </nav>
            
        </header>
    )
}