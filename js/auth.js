import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Elements
const email = document.getElementById("email");
const password = document.getElementById("password");

const loginBtn = document.getElementById("loginBtn");
const createBtn = document.getElementById("createBtn");
const forgot = document.getElementById("forgot");

const error = document.getElementById("error");
const loading = document.getElementById("loading");

// Show loading spinner
function setLoading(show){

    loading.style.display = show ? "block" : "none";

    loginBtn.disabled = show;
    createBtn.disabled = show;

}

// Login

loginBtn.addEventListener("click", async ()=>{

    error.innerHTML = "";

    if(email.value==="" || password.value===""){

        error.innerHTML="Please enter your email and password.";

        return;

    }

    try{

        setLoading(true);

        await signInWithEmailAndPassword(

            auth,
            email.value,
            password.value

        );

    }

    catch(e){

        error.innerHTML=e.message;

    }

    finally{

        setLoading(false);

    }

});

// Create Account

createBtn.addEventListener("click", async ()=>{

    error.innerHTML="";

    if(password.value.length<6){

        error.innerHTML="Password must be at least 6 characters.";

        return;

    }

    try{

        setLoading(true);

        await createUserWithEmailAndPassword(

            auth,
            email.value,
            password.value

        );

    }

    catch(e){

        error.innerHTML=e.message;

    }

    finally{

        setLoading(false);

    }

});

// Forgot Password

forgot.addEventListener("click",async()=>{

    if(email.value===""){

        error.innerHTML="Enter your email first.";

        return;

    }

    try{

        await sendPasswordResetEmail(

            auth,
            email.value

        );

        error.style.color="#22c55e";

        error.innerHTML="Password reset email sent.";

    }

    catch(e){

        error.style.color="#ef4444";

        error.innerHTML=e.message;

    }

});

// Auto Login

onAuthStateChanged(auth,(user)=>{

    if(user){

        window.location.href="index.html";

    }

});
