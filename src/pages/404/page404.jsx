import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
    return(
    <>
        <h1>Ops, acho que você se perdeu...</h1>
        <Link to="/">Clique aqui e volte para a página inicial</Link>
    </>
    )
}