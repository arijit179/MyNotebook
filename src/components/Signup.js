import React ,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
    if(json.success){
        localStorage.setItem('token', json.authtoken);
        props.showAlert("Account created successfully","success");
        history.push("/notes");
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
        <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{"fontFamily":'Lato' }}>
    <div className="px-8 py-4 mx-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
        </div>
        <h3 className="text-2xl font-bold text-center">Join us</h3>
        <form onSubmit={handleSubmit}>
            <div className="mx-2">
                <div>
                    <label className="block" htmlFor="Name">Name</label>
                            <input type="text" placeholder="Name" id="name" name = "name" onChange = {onChange}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block" htmlFor="email">Email</label>
                            <input type="text" placeholder="Email" id="email" name = "email" onChange = {onChange}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block">Password</label>
                            <input type="password" placeholder="Password" id="password" name = "password" onChange = {onChange}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block">Confirm Password</label>
                            <input type="password" placeholder="Password" id="cpassword" name = "cpassword" onChange = {onChange}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <span className="text-xs text-red-400">Password must be same!</span>
                <div className="flex">
                    <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Create
                        Account</button>
                </div>
                <div className="mt-6 text-grey-dark">
                    Already have an account?
                    <Link className="text-blue-600 hover:underline ml-2" to="/login">
                        Log in
                    </Link>
                </div>
            </div>
        </form>
    </div>
</div>
    )
}

export default Signup