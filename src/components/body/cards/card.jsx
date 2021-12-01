import React from 'react'

import './card.css'


import Normal from '../../../assets/cards/cardNormal.svg'
import Silver from '../../../assets/cards/cardSilver.svg'
import Black from '../../../assets/cards/cardBlack.svg'

export default function cardArea() {
    return(
        <>
            <section className="cardBody">
            <div className="cardHead">
                    <h1 className="cardTitle">Cartões</h1>
                <div className="cardArea">
                <div>
                    <img className="card" src={Normal} alt="" />
                    <p className="cardName" id="Normal">Normal</p>
                </div>
                    <div>
                    <img className="card" src={Silver} alt="" />
                    <p className="cardName" id="Silver">Silver</p>
                </div>
                <div>
                    <img className="card" src={Black} alt="" />
                    <p className="cardName" id="Black">Black</p>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}