import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon(){
    const [id,setId] = useState('')
    const history = useHistory()
    async function handLeLogin(e){
        e.preventDefault()
        
        try{
            const response = await api.post('session',{id:id})

            localStorage.setItem('ongId',id)
            localStorage.setItem('ongName',response.data.name)

            history.push('/profile')
        }catch(err){
            alert("falha no login, tente novamente")
        }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the hero"/>

                <form onSubmit={handLeLogin}>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)}></input>
                    <button className="button" type="submit">Entrar</button>
                </form>

                <Link classname="back-link" to="/register">
                    <FiLogIn size={15} color="E0241"/>
                    Não tenho cadastro
                </Link>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    
    )
}