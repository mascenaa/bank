import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import Logo from '../../assets/logos/logo.svg'
import Arrow from '../../assets/logos/arrow.svg'



export default function Login() {


    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');

    return (
        <section className="login">
            <div className="LoginHeader">
                <img className="login-logo" src={Logo} alt="#" />
                <h1 className="login-title">Cadastre-se agora e aproveite sua conta</h1>
            </div>
            <div>
                <form className="LoginForm">
                    <div className="form-group">
                        <input
                            value={nome}
                            name="nome"
                            type="text"
                            id="nome"
                            placeholder="Nome"
                            className="login-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                                value={email}
                                name="email"
                                className="login-input"
                                id="email"
                                type="email"
                                placeholder="Email"
                                required
                            />
                    </div>

                    <div className="form-group">
                        <input
                            value={senha}
                            name="senha"
                            id="senha"
                            type="password"
                            placeholder="Senha"
                            className="login-input"
                            required
                        />
                    </div>

                    <button className="submit-button"><img src={Arrow} alt="#" /></button>
                </form>
            </div>
        </section>
    )
}