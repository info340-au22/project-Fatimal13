import React from 'react';
import { useMemo, useState } from "react";  
// npm install react-select
import Select from 'react-select';

function PersonalInfo(props){

    const [typedFNameInput, setTypedFNameInput] = useState("");
    const [typedLNameInput, setTypedLNameInput] = useState("");
    const [typedEmailInput, setTypedEmailInput] = useState("business@email.com");
    const [typedPhoneInput, setTypedPhoneInput] = useState("000-000-0000");


    const handleFNameChange = (event) => {
        const value = event.target.value; //what user typed in
        setTypedFNameInput(value);
    }

    const handleLNameChange = (event) => {
        const value = event.target.value; //what user typed in
        setTypedLNameInput(value);
    }

    const handleEmailChange = (event) => {
        const value = event.target.value; //what user typed in
        setTypedEmailInput(value);
    }

    const handlePhoneChange = (event) => {
        const value = event.target.value; //what user typed in
        setTypedPhoneInput(value);
    }

    let PersonalInfoArray = [];

    const Fname = (
        <div className='formquestion mb-3'>
            <label>First name:
                <input 
                type='text'
                id='firstName'
                value={typedFNameInput}
                onChange={handleFNameChange}
                required
                />
            </label>
        </div>
    )

    const Lname = (
        <div className='formquestion mb-3'>
            <label>Last name:
                <input 
                type='text'
                id='lastName'
                value={typedLNameInput}
                onChange={handleLNameChange}
                required
                />
            </label>
        </div>
    )

    const email = (
        <div className='formquestion mb-3'>
            <label>Email:  
                <input 
                type='email'
                id='email'
                value={typedEmailInput}
                onChange={handleEmailChange}
                required
                />
            </label>
        </div>
    )

    const phone = (
        <div className='formquestion mb-3 align-baseline'>
            <label>Phone number:  
                    <input 
                    type="tel" 
                    id="number"
                    value={typedPhoneInput}
                    onChange={handlePhoneChange}
                    required
                    />
            </label>
        </div>
    )
    
    PersonalInfoArray.push(Fname);
    PersonalInfoArray.push(Lname);
    PersonalInfoArray.push(email);
    PersonalInfoArray.push(phone);

    return PersonalInfoArray;
}

function BusinessInfo(props){

    const [typedBizNameInput, setTypedBizNameInput] = useState("");
    const [typedBizDescInput, setTypedBizDescInput] = useState("");


    const handleBizNameChange = (event) => {
        const value = event.target.value; //what user typed in
        setTypedBizNameInput(value);
    }

    const handleBizDescChange = (event) => {
        const value = event.target.value; //what user typed in
        setTypedBizDescInput(value);
    }

    const businessArray = [];

    const bizName = (
        <div className='formquestion mb-3 align-baseline'>
            <label>Business name:  
                <input 
                type="text"
                id='title'
                value={typedBizNameInput}
                onChange={handleBizNameChange}
                required
                />
            </label>
        </div>
    )
    
    const bizTypes = [{ label: "hotel" },
    { label: "dining" },
    { label: "activity" }];

    const bizType = (
        <div className='formquestion mb-3'>
            <label>Business Type:  
                <div className="container">
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <Select options={bizTypes}/>
                    </div>
                </div>
            </label>
        </div>
    )
    
    const bizLoc = [{ label: "Maui" },
    { label: "Hawaiʻi" },
    { label: "Oahu" },
    { label: "Kaua'i" },
    { label: "Lāna‘i & Molokai" }];

    const bizLocs = (
        <div className='formquestion mb-3'>
            <label>Location:  
                <div className="container">
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <Select options={bizLoc}/>
                    </div>
                </div>
            </label>
        </div>
    )

    const bizDesc = (
        <div className='formquestion mb-3'>
            <label>Business description:  
                <textarea className="form-control" id="description" 
                placeholder="Tell us about your business" 
                value={typedBizDescInput}
                onChange={handleBizDescChange}
                required>
                </textarea>
            </label>
        </div>
    )
    
    businessArray.push(bizName);
    businessArray.push(bizType);
    businessArray.push(bizLocs);
    businessArray.push(bizDesc);


    return businessArray;
}

export function FormPage(props) {
    const [typedAllValues, setAllTypedValues] = useState("");

    // const handleSubmit = (event) => {
    //     props.addBusinessCallback(typedInput);
    // }  

    return (
        <div>
            <header>
                <h1>FORM</h1>
            </header>
            <form>
                <div className="input-group">
                    <PersonalInfo/>
                    <BusinessInfo />
                    <button 
                    className="btn btn-primary" 
                    type="button">Submit form
                    {/* onClick={handleSubmit} */}
                    </button>
                </div>
            </form>
        </div>
    )
}

