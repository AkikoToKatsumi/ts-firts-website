import {useState} from "react";
import "./styles.css";

interface LoginProps {
    onLogin: (email:string, password:string)=> void;
}

const Login: React.FC<LoginProps>=({onLogin})=>{
    const [email, setEmail] =useState("");
    const [password, setPassword] = useState("");

    const handleSumit = (event: React.FormEvent)=>{
        event.preventDefault();
        onLogin(email, password);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-image"></div>
            <div className="login-form">
                <h2>Iniciar Sección</h2>
                <form onSubmit={handleSumit}>

                    <div className="input-group">
                        <label>Email:</label>
                        <input
                         type="email"
                         value={email}
                         onChange={(e)=>setEmail(e.target.value)}
                         required
                         className="input-field"
                         />
                    </div>
                 <div className="input/group">
                 <label>Contraseña</label>
                 <input 
                 type="password"
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                 required
                 className="input-field"
                 />
                 </div>
                 <button type="submit" className="login-button">Iniciar Sesion</button>
                </form>
                <div className="login-links">

                    <a href="#">¿Olvidaste tu contraseña?</a>
                    <a href="#">Registrate</a>
                </div>
            </div>
        </div>
        </div>
    )
};

export default Login