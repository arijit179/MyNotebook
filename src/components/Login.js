import React , {useState} from 'react'
import { useHistory } from 'react-router-dom'
const Login = (props) => {
    let history = useHistory();
    const [credentials, setCredentials] = useState({email: "" , password: ""})
    const handleSubmit  = async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          },
        body: JSON.stringify({ email: credentials.email , password: credentials.password }),
      });
    const json = await response.json();
    console.log(json);
    if(json.success){
        localStorage.setItem('token', json.authtoken);
        props.showAlert("Logged in successfully","success");
        history.push("/");
    }
    else{
        props.showAlert("Invalid credentials","danger");
    }
    setCredentials({email:"" , password:""});
    }
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    return (
        <div className = "container mt-4">
            <h2  >Login to continue to iNotebook</h2>
            <form onSubmit = {handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name = "email" value = {credentials.email} onChange = {onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="current-password" className="form-control" name = "password"  value = {credentials.password} onChange = {onChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login