import React from 'react';
import { useMemo, useState } from "react";  
// npm install react-select
import Select from 'react-select';

    // Feedback: build everything to one component
    // all variables should have lower cap 
    // upload images (wait till last of class)

function FormComponents(props) {

    // Peronsal Info
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


    // Business Info
    const [typedBizNameInput, setTypedBizNameInput] = useState("");
    const [typedBizDescInput, setTypedBizDescInput] = useState("Tell us about your business");
    const [typedBizTypeInput, setTtypedBizTypeInput] = useState("");
    const [typedBizLocInput, setTypedBizLocInput] = useState("");

    const handleBizNameChange = (event) => {
        const value = event.target.value; //what user typed in
        setTypedBizNameInput(value);
    }

    const handleBizDescChange = (event) => {
        const value = event.target.value; //what user typed in
        setTypedBizDescInput(value);
    }

    const handleBizTypeClick = (event) => {
        const value = event.target.value;
        setTtypedBizTypeInput(value);
    }

    const handleBizLocClick = (event) => {
        const value = event.target.value;
        setTypedBizLocInput(value);
    }

    return (
        <div>
            <div className='formquestion mb-3'>
                <label>First name:  
                    <input 
                    type='text'
                    value={typedFNameInput}
                    onChange={handleFNameChange}
                    required
                    />
                </label>
            </div>
            <div className='formquestion'>
                <label>Last name:  
                    <input 
                    type='text'
                    value={typedLNameInput}
                    onChange={handleLNameChange}
                    required
                    />
                </label>
            </div>
            <div className='formquestion'>
                <label>Email:   
                    <input 
                    type='email'
                    value={typedEmailInput}
                    onChange={handleEmailChange}
                    required
                    />
                </label>
            </div>
            <div className='formquestion'>
                <label>Phone number:  
                        <input 
                        type="tel" 
                        value={typedPhoneInput}
                        onChange={handlePhoneChange}
                        required
                        />
                </label>
            </div>
            <div className='formquestion'>
                <label>Business name:  
                    <input 
                    type="text"
                    value={typedBizNameInput}
                    onChange={handleBizNameChange}
                    required
                    />
                </label>
            </div>
            <div className='formquestion col-auto'>
                <label> Business Type:   </label>
                    <select className="form-select" value={typedBizTypeInput} onChange={handleBizTypeClick} >
                        <option value="hotel">Hotel</option>
                        <option value="dining">Dining</option>
                        <option value="activity">Activity</option>
                </select>
            </div>
            <div className='formquestion col-auto'>
                <label> Business Location:   </label>
                    <select id='businessLoc' className="form-select" value={typedBizLocInput} onChange={handleBizLocClick} >
                        <option value="Maui">Maui</option>
                        <option value="Hawaiʻi">Hawaiʻi</option>
                        <option value="Oahu">Oahu</option>
                        <option value="Lāna‘i & Molokai">Lāna‘i & Molokai</option>
                        <option value="Kaua'i">Kaua'i</option>
                    </select>
            </div>

            <div className='formquestion'>
                <label>Business description:  
                    <textarea className="form-control" 
                    value={typedBizDescInput}
                    onChange={handleBizDescChange}
                    required>
                    </textarea>
                </label>
            </div>
            <button className="formquestion btn btn-primary" 
                    type="button">Submit form
                    {/* onClick={handleSubmit} */}
            </button>
        </div>

    )
}


export function FormPage(props) {

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
                    <FormComponents/>
                </div>
            </form>
        </div>
    )
}
