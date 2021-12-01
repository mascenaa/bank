import React from 'react'
import Header from '../header/header'
import IntroArea from './initial/intro'
import LimitArea from './cred/limit'
import CardArea from './cards/card'

export default function Body() {

    return(
        <>
        <Header />
        <IntroArea />
        <LimitArea />
        <CardArea />
        </>
    )
}