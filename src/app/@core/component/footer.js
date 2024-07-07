'use client'
import { Icon } from "@iconify/react";
import { Grid } from "@mui/material";
import { useRouter } from 'next/navigation'

export default function Footer() {


    const router = useRouter()

    const socialAccounts = [
        {
            icon: 'mingcute:github-line',
            url: 'https://github.com/Manish7113'
        },
        {
           
            icon: 'mingcute:linkedin-line',
            url: 'https://www.linkedin.com/in/manish-kumawat-ab15b823a/'
        },
        {
            
            icon: 'mdi:instagram',
            url: 'https://www.instagram.com/kumawatmanish7125/?next=%2F'
        },

    ]
    return (
        <div className="skillsContainer">
            <div className="container">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <div className="d-flex flex-column justify-content-start align-items-start gap-2">
                            <p className="m-0 p-0 fs-xll roboto-regular">Manish Kumawat</p>
                            <p className="roboto-regular nm-1">kumawatji7113@gmail.com</p>
                            <p className="roboto-regular nm-3">Front-End Developer</p>

                        </div>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="d-flex justify-content-center align-items-center flex-wrap flex-column" >
                        <p className="m-0 p-0 mb-2 fs-mdd fw-600 gray">Get Connect</p>

                        <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
                            {socialAccounts?.map((item, index) => (

                                <button key={index} className="bg-black fs-xll white rounded-circle d-flex justify-content-center align-items-center footerIconConatiner" onClick={() => {
                                    router.push(item?.url)
                                }}>
                                    <Icon icon={item?.icon} />
                                </button>
                            ))}


                        </div>

                    </Grid>

                </Grid>


            </div>

        </div>
    )
}