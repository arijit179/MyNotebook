import React ,{useState} from 'react'
import { useHistory } from 'react-router-dom'

const Signup = (props) => {
    let history = useHistory();
    const [credentials, setCredentials] = useState({name: "" , email: "" , password: ""})
    const handleSubmit  = async (e)=>{
        e.preventDefault();
        const {name , email , password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          },
        body: JSON.stringify({name, email , password}),
      });
    const json = await response.json();
    console.log(json);
    if(json.success){
        localStorage.setItem('token', json.authtoken);
        props.showAlert("Account created successfully","success");
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
            <h2>Create an account to use iNotebook</h2>
            <form onSubmit = {handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="name" className="form-control" id="name" name = "name" onChange = {onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name = "email" onChange = {onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="current-password" className="form-control" id="password" name = "password" onChange = {onChange} minLength = {5} required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup