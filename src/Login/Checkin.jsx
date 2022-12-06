import React from "react";
import '../styles/Login-Checkin.css'
import { useState } from "react";
import { useAuth } from './Context/authContext'
import { useNavigate } from "react-router-dom";
const Checkin = () => {

    const [user, setUser] = useState({
        email: '',
        password:'',
    })

    const [error, setError] = useState('');
    
    const { signup,loginWithGoogle } = useAuth() 
    const navigate = useNavigate()
    
    const handelChange = ( { target: {name, value} } ) => {
        setUser({...user, [name]: value}) 
    }

    const handleSumbit = async (e) => {
        e.preventDefault() 
        try {
            await signup(user.email, user.password)
            navigate('/')  
            
        } catch (error) {
            if (error.code === 'auth/invalid-email') {
               setError('EMAIL INVALIDO')
              } else if (error.code === 'auth/weak-password') {
                setError('CONTRASEÑA MENOR A 6 CARACTERES')
            }
        }
    }

    const handleGoogle = async () => {
        try {
          await loginWithGoogle();
          navigate("/");
        } catch (error) {
            console.log(error)
        //   setError(error.message);
        }
    };

    return ( 
        <React.Fragment>
            <div id="contenedor">
                <div id="central">
                    <div id="login">
                        <div className="titulo">
                            Bienvenido
                        </div>
                        <div className="ing">
                            Por favor, ingrese su cuenta
                            <h1>{error && <p>{error}</p>}</h1>
                        </div>

                        <form id="loginform" onSubmit={handleSumbit}>
                            <input 
                            onChange={handelChange}
                            type="email" 
                            name="email" 
                            placeholder="email" 
                            required
                            />
                            
                            <input
                            onChange={handelChange}
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            required
                            />
                            
                            <button type="submit" title="Ingresar" name="Ingresar">REGISTRARME</button>
                        </form>

                        <div className="google">
                            <div className="ing">
                                Continuar con Google
                            </div>
                        
                            <button onClick={handleGoogle} type="submit" title="Ingresar" name="Ingresar">Registrarme con Google</button>

                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment> 
        );
        }
 
export default Checkin;