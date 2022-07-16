import React, {useState, useEffect} from 'react'
//import fire from './firebase'
import LoginPage from './components/LoginPage';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function App() {
  // const adminUser = {
  //   email: "abc@admin.com",
  //   password: "abc123"
  // }

  //const [user, setUser] = useState({email: "", password: ""});
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }
  const handleLogin = () =>   {
    clearErrors();
    firebase 
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    firebase 
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/email-alredy-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/week-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    firebase.auth().singOut();
  };

  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    })
  }

  useEffect(() => {
    authListener();
  }, []);



//   const Login = details => {
//     console.log(details);
// //lưu input ng dùng nhập 
//     if(details.email == adminUser.email && details.password == adminUser.password) {
//       console.log("Logged in!"); //chỉ hiện ở console 
//       setUser({
//         name: details.name,
//         email: details.email
//       })
//     }
//     else {
//       console.log("Error! Please try again.");
//       setError("Error! Please try again.");
//     }
//   }

//   const Logout = details => {
//     console.log("Logout");

//chuyển về trạng thái mặc định
  //   setUser({name: "", email: ""});
  // }

  return (
    // <div className="App">
    //   {(user.email != "") ? (
    //     <div className = "welcome">
    //       <h2>Welcome, <span>{user.name}!</span> Wish you all the best.</h2>
    //       <button onClick={Logout}>Sign Out</button>
    //     </div>
    //   ) : (
      <div className="App">
        <LoginPage 
          handleLogin={handleLogin} 
          handleSignUp = {handleSignUp}
          //handleLogout = {handleLogout}
          hasAccount = {hasAccount} setHasAccount = {setHasAccount}
          email={email} setEmail={setEmail} emailError = {emailError}
          password = {password} setPassword = {setPassword} passwordError = {passwordError}/> 
    </div>
  );
}

export default App;
