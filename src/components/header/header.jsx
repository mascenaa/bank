import React from 'react'

import './header.css'
import Logo from '../../assets/logos/logo.svg'


export default function Header() {
     return(
        <section className="header">
         <div className="header-body">
                <img
                id="logo" 
                src={Logo} 
                alt="Logo MB, MascenaBank" />

                <ul className="header-nav">
                    <li className="header-nav--item">home</li>
                    <li className="header-nav--item">about</li>
                </ul>
         </div>
        </section>
     )
}