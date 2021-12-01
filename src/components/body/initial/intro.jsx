import React from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../../../assets/logos/arrow.svg'
import Hand from '../../../assets/logos/hand.svg'
import './intro.css'

export default function introArea() {
    return (
    <section className="initial">
        <div className="intro">
            <h1 className="initialTitle">Digital Bank</h1>
            <h2 className="subTitle">Sua conta em suas mãos</h2>
        <div className="redirect-login">
                <Link to="/login" className="login-button">entre agora</Link>
            <img 
            id="arrow"
            src={Arrow} 
            alt="->"/>
        </div>
        </div>
        <div className="intro-hand">
            <img
            id="hand" 
            src={Hand} 
            alt="" />
        </div>
    </section>
    )
}