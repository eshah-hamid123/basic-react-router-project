import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();
    
    const handleLogin = () => {
        
        navigate('home');
    }
    return (
        <div>
            <h1>The 11'z</h1>
            <label> Username</label>
            <br />  
            <input type="text" placeholder="Enter Username" />
            <br />
            <label> Password</label>
            <br />
            <input type="password" placeholder="Enter Password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login