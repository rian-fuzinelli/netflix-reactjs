import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

    const [signState, setSignState] =  useState("Entrar");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const user_auth = async (event) => {
      event.preventDefault();
      setLoading(true);
      if(signState==="Entrar"){
        await login(email, password);
      }else {
        await signup(name, email, password);
      }
      setLoading(false);
    }

  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==="Registrar"?
          <input value={name} onChange={(e) =>{setName(e.target.value)}} type="text" placeholder='Nome do Usuário' />:<></>}
          <input value={email} onChange={(e) =>{setEmail(e.target.value)}}  type="email" placeholder='Email' />
          <input value={password} onChange={(e) =>{setPassword(e.target.value)}} type="password" placeholder='Senha' />
          <button onClick={user_auth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Lembrar de mim</label>
            </div>
            <p>Precisa de ajuda?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Entrar"?<p>Novo por aqui? <span onClick={() => {setSignState("Registrar")}}>Criar conta.</span></p>:<p>Já possui uma conta? <span  onClick={() => {setSignState("Entrar")}}>Entrar Agora</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
