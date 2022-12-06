import '../styles/Login-Checkin.css'
import { useState } from "react";
import { useAuth } from './Context/authContext'
import { useNavigate } from "react-router-dom";

const Login = () => {

    
    const [user, setUser] = useState({
        email: '',
        password:'',
    })

    const [error, setError] = useState('');

    const { login, loginWithGoogle, resetPassword } = useAuth() 
    const navigate = useNavigate()
    
    const handelChange = ( { target: {name, value} } ) => {
        setUser({...user, [name]: value}) 
    }

    const handleSumbit = async (e) => {
        e.preventDefault() 
        try {
            await login(user.email, user.password)
            navigate('/')
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                setError('USUARIO NO ENCONTRADO')
            }
        }
    }

    const handleGoogle = async () => {
        try {
          await loginWithGoogle();
          navigate("/");
        } catch (error) {
          setError(error.message);
        }
    };

    const handleResetPassword = async () => {
        if(!user.email) return setError('Ingrese email')
        try {
            await resetPassword(user.email)
            setError('¡¡¡ CHEQUEE SU EMAIL !!!')

        } catch (error) {
            setError('EMAIL NO ENCONTRADO')
        }
    }

    return ( 
        <nav> 
        <div id="contenedor">
            <div id="central">
                <div id="login">
                    <div className="titulo">
                        Bienvenido
                    </div>
                    <div className="ing">
                        Por favor, ingrese con su cuenta
                        <h1>{error && <p>{error}</p>}</h1>
                    </div>
                    <form id="loginform" onSubmit={handleSumbit} >
                        <input 
                        onChange={handelChange}
                        type="email" 
                        name="email" 
                        placeholder="Ingrese su email" 
                        required/>
                        
                        <input 
                        onChange={handelChange}
                        type="password" 
                        placeholder="Password" 
                        name="password" 
                        required/>
                        
                        <button type="submit" title="Ingresar" name="Ingresar">Login</button>
                    </form>
                    <div className="pie-form">
                         <a 
                        href="#"
                         onClick={handleResetPassword}
                        >
                            Recuperar contraseña
                        </a>                     
                        <a href="./checkin">¿No tienes Cuenta? Registrate</a>
                    </div>
                    <div className="google">
                        <div className="ing">
                            Continuar con Google
                        </div>
                    
                        <button   
                         onClick={handleGoogle}
                         type="submit" 
                         title="Ingresar" 
                         name="Ingresar"
                        >
                            Login with Google
                        </button>

                    </div>

                </div>
                <div className="inferior">
                    <a href="#">Volver</a>
                </div>
            </div>
        </div>
        
            
        </nav>
     );
}
 
export default Login;