import Image from "next/image";
import officeImage from '../../../assets/officeDesk.jpg'
import officeImage2 from '../../../assets/officeDesk2.jpg'

export default function Experience() {
    return (
        <div className="container mb-5">
            <p className="sectionHeading fs-xll roboto-regular ">Experience</p>
            <div className="d-flex justify-content-evenly align-items-start flex-wrap gap-3 mb-5 pb-5">
                <div className="exImageContainer">
                    <Image src={officeImage} alt="not found" className="img-fluid rounded-2" width={550} height={550}></Image>

                </div>
                <div className="exTextContainer">
                    <p className="roboto-medium fs-lgg p-0 m-0 ">BookMyAi <span className="fs-mdd">(Indore)</span> </p>
                    <p className="fs-mdd fw-500 p-0 m-0">Front-End Web-Developer (<span className="fs-smm p-0 m-0">July 2023 - June 2024</span>)</p>
                    <p><span className="fw-500 fd-mdd">Leveraged React.js and Next.js to build responsive UIs that seamlessly adapt across devices</span>. Worked closely with backend developers to integrate APIs, ensuring smooth data flow throughout the application.</p>
                    <p><span className="fw-500 fd-mdd">Architected and developed a robust admin panel from scratch</span>. This panel empowered efficient user data management, allowing for easy manipulation and oversight. Optimized API calls by implementing option chaining, streamlining data access and enhancing code readability.</p>
                    <p><span className="fw-500 fd-mdd">Further enriched the user experience by introducing real-time chat functionality.</span> Employed socket programming to enable effortless communication between the admin and user interfaces, fostering a more interactive environment.</p>

                   


                </div>

            </div>
            <div className="d-flex justify-content-evenly align-items-end flex-wrap-reverse gap-3 mt-5 ">
                
                <div className="exTextContainer">
                    <p className="roboto-medium fs-lgg p-0 m-0 "> Aasmo digital PVT.LTD <span className="fs-mdd">(Indore)</span> </p>
                    <p className="fs-mdd fw-500 p-0 m-0">Front-End Developer ( Intern ) (<span className="fs-smm p-0 m-0">April 2023 - June 2023</span>)</p>
                    <p><span className="fw-500 fd-mdd">Built engaging user experiences with responsive UIs in React.js.</span>. This ensured seamless navigation across all devices, from desktops to mobiles.  I spearheaded the development of product funnels and multi-page websites, crafting user journeys that effectively convert visitors into customers</p>
                    <p><span className="fw-500 fd-mdd">Leveraged my front-end expertise to optimize website conversions.</span>By meticulously designing product funnels and crafting engaging website layouts, I played a key role in driving successful user interactions and increasing conversion rates.</p>
                   

                   


                </div>
                <div className="exImageContainer">
                    <Image src={officeImage2} alt="not found" className="img-fluid rounded-2" width={500} height={500}></Image>

                </div>

            </div>

        </div>
    )
}