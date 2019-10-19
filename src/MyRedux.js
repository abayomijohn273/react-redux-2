import React from "react"
import {createStore, combineReducers} from "redux"


function MyRedux() {
    //First phase is to create the form creator and form and it is a function
const createClaim = (name, amount) => {
    return {
        type: "CREATE_CLAIM",
        payload: {
            name: name,
            amount: amount
        }
    };
}
const createPolicy = (name) => {
    return {
        type: "CREATE_POLICY",
        payload: {
            name: name,
            amount: 120
        }
    };
}
const deletePolicy = (name) => {
    return {
        type: "DELETE_POLICY",
        payload: {
            name:name
        }
    };
}

//Create the Reducer which is a function holding each department
const claimHistory = (oldListOfClaims = [], action) => {
    if(action.type === "CREATE_POLICY"){
        return [...oldListOfClaims, action.payload]
    }
    return oldListOfClaims
}
const accounting = (bagOfMoney = [], action) => {
    if(action.type === "CREATE_CLAIM"){
        return bagOfMoney - action.payload.amount
    } else if(action.type === "CREATE_POLICY") {
        return bagOfMoney + action.payload.amount
    }
    return bagOfMoney
}
const policies = (listOfPolicies = [], action) => {
    if(action.type === "CREATE_POLICY"){
        return [...listOfPolicies, action.payload.name]
    } else if(action.type === "DELETE_POLICY"){
        return listOfPolicies.filter(policy => policy !== action.payload.name)
    }
    return listOfPolicies
}

//Company setup (combining thee reducer into a placeholder for easy form reach)
const ourDepartment = combineReducers({
    accounting: accounting,
    claimHistory: claimHistory,
    policies: policies
})


//CREATE A STORE FOR DISPATCHING with the combine reducer that is ourDepartment
const store = createStore(ourDepartment)

store.dispatch(createPolicy("Alex"))
store.dispatch(createClaim("Alex", 50))
store.dispatch(deletePolicy("Alex"))
console.log(store.getState())
let s = store.getState()
document.body.append(s.accounting)



    return (
        <div>
            <h1>I AM WORKING ON REDUX NOW</h1>
        </div>
    )
}

export default MyRedux;
