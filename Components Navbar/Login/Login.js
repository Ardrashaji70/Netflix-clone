import React,{useState} from "react";
import './Login.css';

function Login({ setIsLoggedIn }) {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

     const handleLogin = () => {
    if(email && password){
      setIsLoggedIn(true);
    }else{
      alert("Enter email and password");
    }
   console.log("login clicked")
  };

    return (
        <div className="login">
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                <p>Don't have an account? <a href="/signup">Sign up</a></p>

            </form>
        </div>
        
    );
}

export default Login;