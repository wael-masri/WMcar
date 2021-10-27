import React from 'react'
import Cardteam from '../Cardteam/Index'
import './Style.css';
const Customteam = () => {
    return (
        <div className="container-fluid divteam">
            <div className="row">
                <div className="col-md-4 divinnerteam">
                <Cardteam card="1" fistname="Abigail" lastname="Lyer" partposition1="Senior" partposition2="Programmer" />
                </div>
                <div className="col-md-4 divinnerteam">
                <Cardteam card="2" fistname="Naik" lastname="Smith" partposition1="General" partposition2="Manager" />
                </div>
                <div className="col-md-4 divinnerteam">
                <Cardteam card="3" fistname="Riya" lastname="Rai" partposition1="Graphic" partposition2="Designer" />
                </div>
            </div>
           
        </div>
    )
}

export default Customteam
