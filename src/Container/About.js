
import React from 'react'
import Customabout1 from '../Components/Customabout1/Index'
import Customabout2 from '../Components/Customabout2/Index'
import Customabout3 from '../Components/Customabout3/Index'
import Customabout4 from '../Components/Customabout4/Index'
import Title from '../Components/Title/Index'

const About = () => {
    return (<>
    <div className="spaceother"></div>
        <Title title="Our purpose" subtitle="To drive integrity by being honest & transparent in every interaction." />
        <Customabout1 />
        <Customabout2 />
       
        <Customabout3 />
        <Customabout4 />
        </>
    )
}

export default About
