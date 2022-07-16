import React, {useState} from 'react'

function LoginPage(props) {

    const [
        email, setEmail, emailError,
        password, setPassword, passwordError,
        handleLogin, 
        handleSignUp, 
        hasAccount, 
        setHasAccount] = props;

    // const [details, setDetails] = useState({name: "", email: ""});
    
    // const submitHandler = e => {
    //     e.preventDefault();

    //     Login(details);
    // }

    return (
        // <form onSubmit = {submitHandler} >
        //     <div className="form-inner">
        //         <h2>Sign in account</h2>
        //         {(error != "") ? (<div className="error">{error}</div>) : ""}
        //         <div className="form-group">
        //             <label htmlFor="name">Name:</label>
        //             <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
        //         </div>            

        //         <div className="form-group">
        //             <label htmlFor="email">Email:</label>
        //             <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
        //         </div> 

        //         <div className="form-group">
        //             <label htmlFor="password">Password:</label>
        //             <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
        //         </div> 
        //         <input type="submit" value="Sign in"/>
        //     </div>
        // </form>
    
    <section className="Login">
        <div className="loginContainer">
            <label>Username</label>
        </div>
    </section>    
    
    )
}

export default LoginPage;