import React from 'react'

import './limit.css'

export default function LimitArea() {

    return (
        <>
            <section className="limitArea">
                <div className="infoArea">
                    <h1 className="infoArea-title">CredFácil</h1>
                    <p className="infoArea-paragraph">Limite liberado em até <span id="days">10</span> dias</p>
                </div>
                <div className="staticsArea">
                   <div className="contentSlider"><p className="money">R$ 0</p><div  className="slider" ><div className="content" id="initialpercent" /></div><p>R$ 10k</p></div>
                   <div className="contentSlider"><p className="money">R$ 10k</p><div  className="slider" ><div className="content" id="fivepercent" /></div><p>R$ 100k</p></div>
                   <div className="contentSlider"><p className="money">R$ 100k</p><div  className="slider" ><div className="content" id="millionpercent" /></div><p>R$ 1m</p></div>
                </div>
            </section>
        </>
    )
}