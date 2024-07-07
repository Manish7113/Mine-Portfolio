'use client'

import { Icon } from "@iconify/react"
import { useState } from "react"

export default function Skill() {

    const [skillShowCount, setSkillShowCount] = useState(3)
    const [showMoreHeading, setShowMoreHeading] = useState(
        'Show More'
    )


    const skills = [
        {
            icon: 'nonicons:html-16',
            heading: "HTML",
            description: 'Ex: 1 Year'
        },
        {
            icon: 'streamline:css-three',
            heading: "CSS",
            description: 'Ex: 1 Year'
        },
        {
            icon: 'ri:javascript-line',
            heading: "Javascript",
            description: 'Ex: 1 Year'
        },
        {
            icon: 'grommet-icons:reactjs',
            heading: "React JS",
            description: 'Ex: 1 Year'
        },
        {
            icon: 'teenyicons:nextjs-outline',
            heading: "Next JS",
            description: 'Ex: 1 Year'
        },
        {
            icon: "bi:bootstrap",
            heading: "Bootstrap",
            description: 'Ex: 1 Year'
        },
        {
            icon: 'teenyicons:git-outline',
            heading: "Git/Git Hub",
            description: 'Ex: 1 Year'
        },
    ]


    const handleShowMore = () => {
        if (skillShowCount === skills.length) {
            setSkillShowCount(3)
            setShowMoreHeading('Show More')
        }

        else {
            setSkillShowCount(skills.length)
            setShowMoreHeading('Show Less')

        }




    }
    return (
        <div className="container skillSection mb-5">
            <p className="sectionHeading fs-xll roboto-regular ">Skills</p>
            <div className="skillsContainer  ">
                <div className="skillCardContainer d-flex justify-content-center align-items-start flex-wrap gap-5">
                    {skills.slice(0, skillShowCount)?.map((item, index) => {
                        return (

                            <div key={index} className="skillCard d-flex flex-column justify-content-center align-items-center ">
                                <Icon icon={item?.icon} className="icon mb-3" />
                                <p className="heading">{item?.heading}</p>
                                <p className="experience">{item?.description}</p>

                            </div>
                        )
                    })}



                </div>
                <div className="container pb-3 d-flex justify-content-center align-items-center ">
                    <button className="showMoreButton" onClick={handleShowMore}>{showMoreHeading}</button>
                </div>

            </div>


        </div>
    )
}