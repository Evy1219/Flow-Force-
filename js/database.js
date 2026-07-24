import { db, auth } from "./firebase.js";

import {
    doc,
    getDoc,
    setDoc,
    updateDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

let userData = {

    schedule: [],
    projects: [],
    tasks: [],
    expenses: [],
    createdAt: null,
    updatedAt: null

};

// Returns currently loaded data
export function getUserData(){

    return userData;

}

// Loads the logged-in user's database
export async function loadDatabase(){

    const user = auth.currentUser;

    if(!user) return;

    const ref = doc(db,"users",user.uid);

    const snap = await getDoc(ref);

    if(snap.exists()){

        userData = snap.data();

    }else{

        userData = {

            schedule: [],
            projects: [],
            tasks: [],
            expenses: [],
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()

        };

        await setDoc(ref,userData);

    }

    return userData;

}

// Saves everything
export async function saveDatabase(){

    const user = auth.currentUser;

    if(!user) return;

    await updateDoc(

        doc(db,"users",user.uid),

        {

            schedule:userData.schedule,

            projects:userData.projects,

            tasks:userData.tasks,

            expenses:userData.expenses,

            updatedAt:serverTimestamp()

        }

    );

}

// -------------------------
// Schedule
// -------------------------

export async function addSchedule(item){

    userData.schedule.push(item);

    await saveDatabase();

}

export async function removeSchedule(index){

    userData.schedule.splice(index,1);

    await saveDatabase();

}

// -------------------------
// Projects
// -------------------------

export async function addProject(item){

    userData.projects.push(item);

    await saveDatabase();

}

export async function removeProject(index){

    userData.projects.splice(index,1);

    await saveDatabase();

}

// -------------------------
// Tasks
// -------------------------

export async function addTask(item){

    userData.tasks.push(item);

    await saveDatabase();

}

export async function removeTask(index){

    userData.tasks.splice(index,1);

    await saveDatabase();

}

// -------------------------
// Expenses
// -------------------------

export async function addExpense(item){

    userData.expenses.push(item);

    await saveDatabase();

}

export async function removeExpense(index){

    userData.expenses.splice(index,1);

    await saveDatabase();

}
