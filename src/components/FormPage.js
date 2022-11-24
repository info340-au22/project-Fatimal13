import React, { useState } from 'react';

export function FormPage(props) {
    // const [BusinessName, setBizName] = useState("");

    const FORM_QUESTIONS = ['First name', 'Last name', 'Email', 'Phone Number', 'Business name', 'Business type', 'Description', 'City', 'State', 'Zip']
    
    const formArray =  FORM_QUESTIONS.map((formObj) => {
        const element = (
            <label>{formObj}
                <input 
                type='text'
                value={formObj}
                />
            </label>
        )
        return element;
    }

    )
    return (
        <div>
            <header>
                <h1>FORM</h1>
            </header>
            
            <form>
                <div>
                    {formArray}
                </div>
            </form>
        </div>
    )
}