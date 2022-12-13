import React from 'react';
import { useState } from "react";
import Select from 'react-select';

import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'

export function FormPage(props) {

  // getting unique values for the tag options 
  let allTagsArray = [];
  props.cardData.forEach(getUniqueTags);
  function getUniqueTags(item) {
    const tags = item.tags;
    allTagsArray.push(...tags);
  }
  const uniqueTags = [...new Set(allTagsArray)];

  return (
    <div>
    <div>
    <header>
      <h1 className="form-txt-1">Register your business below!</h1>
      <h2 className="form-txt-2">Fill out the form below to have your locally owned, Hawaiian business promoted on our site.</h2>
    </header>
        <FormComponents 
          uniqueTags={uniqueTags}
          addNewCardCallback={props.addNewCardCallback}
          currentUser={props.currentUser}/>
    </div>
    </div>
  )
}



function FormComponents(props) {

  const [isComplete, setIsComplete] = useState(true);

  const [typedFNameInput, setTypedFNameInput] = useState("");
  const [typedLNameInput, setTypedLNameInput] = useState("");
  const [typedEmailInput, setTypedEmailInput] = useState("");
  const [typedPhoneInput, setTypedPhoneInput] = useState("");
  const [typedBizNameInput, setTypedBizNameInput] = useState("");
  const [selectedBizCategory, setSelectedBizCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedIsland, setSelectedIsland] = useState("");
  const [typedBizDescInput, setTypedBizDescInput] = useState("");
  const [imageFile, setImageFile] = useState(undefined);

  const addNewCardCallback = props.addNewCardCallback;

  // creating tag options for tagsInput multiple
  const tagOptionsArray = props.uniqueTags.map((item) => {
    const element = (
      { value: item, label: item }
    )
    return element;
  });

  // event handlers
  const handleFNameChange = (event) => {
    setTypedFNameInput(event.target.value);
  }
  const handleLNameChange = (event) => {
    setTypedLNameInput(event.target.value);
  }
  const handleEmailChange = (event) => {
    setTypedEmailInput(event.target.value);
  }
  const handlePhoneChange = (event) => {
    setTypedPhoneInput(event.target.value);
  }
  const handleBizNameChange = (event) => {
    setTypedBizNameInput(event.target.value);
  }
  const handleBizDescChange = (event) => {
    setTypedBizDescInput(event.target.value);
  }
  const handleBizCategoryChange = (event) => {
    setSelectedBizCategory(event.target.value);
  }
  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  }
  const handleBizIslandChange = (event) => {
    setSelectedIsland(event.target.value);
  }
  const handleSelectedTags = (selectedOption) => {
    setSelectedTags(selectedOption);
  }

  //image uploading!
  const handleChange = (event) => {
    // if (!imageFile) {
    //   event.target.files = null
    // }

    if(event.target.files.length > 0 && event.target.files[0]) {
      const imageFile = event.target.files[0]
      setImageFile(imageFile);
    } 
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if ((!typedBizNameInput || !selectedBizCategory || !selectedPrice || !selectedTags || !selectedIsland)) {
      setIsComplete(false);
      return false;
    }

    setIsComplete(true);

    const storage = getStorage();
    const imageRef = storageRef(storage, "/cardImages/"+typedBizNameInput);

    await uploadBytes(imageRef, imageFile);
    const downloadUrlString = await getDownloadURL(imageRef);
    console.log(downloadUrlString)

    const rating = Math.floor(Math.random() * 6);
    const tagsArray = selectedTags.map(x => x.value);
    // console.log(tagsArray)

    const newBusiness = {
      "firstName" : typedFNameInput,
      "lastName" : typedLNameInput,
      "email" : typedEmailInput,
      "phone" : typedPhoneInput,
      "title" : typedBizNameInput,
      "rating" : rating,
      "price" : selectedPrice,
      "tags" : tagsArray,
      "description" : typedBizDescInput,
      "category" : selectedBizCategory,
      "island" : selectedIsland,
      "cardImg" : downloadUrlString
    }

    // ADD NEW CARD DATA CALLBACK
    addNewCardCallback(newBusiness);

    // empty the input
    setTypedFNameInput("");
    setTypedLNameInput("");
    setTypedEmailInput("");
    setTypedPhoneInput("");
    setTypedBizNameInput("")
    setTypedBizDescInput("");
    setSelectedBizCategory("");
    setSelectedIsland("");
    setSelectedTags("");
    setSelectedPrice("");
    setImageFile("");
  }

  return (
    <div> 
      
      <form onSubmit={handleSubmit}>

        <div className='formquestion mb-3'>
          <label>First name: </label>
          <input type='text'
            value={typedFNameInput}
            onChange={handleFNameChange}
            required />
        </div>

        <div className='formquestion'>
          <label>Last name:</label>
          <input
            type='text'
            value={typedLNameInput}
            onChange={handleLNameChange}
            required />
        </div>

        <div className='formquestion'>
          <label>Email: </label>
          <input
            type='email'
            placeholder="business@email.com"
            value={typedEmailInput}
            onChange={handleEmailChange}
            required />
        </div>

        <div className='formquestion'>
          <label>Phone number: </label>
          <input
            type="tel"
            placeholder={"000-000-0000"}
            value={typedPhoneInput}
            onChange={handlePhoneChange}
            required />
        </div>

        <div className='formquestion'>
          <label>Business name: </label>
          <input
            type="text"
            value={typedBizNameInput}
            onChange={handleBizNameChange}
            required />
        </div>

        <div className='formquestion col-auto'>
          <label> Business Type: </label>
          <select className="form-select"
            value={selectedBizCategory}
            onChange={handleBizCategoryChange} 
          >
            <option value="">Select the business type</option>
            <option value="hotel">Hotel</option>
            <option value="dining">Dining</option>
            <option value="activity">Activity</option>
          </select>
        </div>

        <div className='formquestion col-auto'>
          <label> Price: </label>
          <select className="form-select" value={selectedPrice} onChange={handlePriceChange} >
            <option value="">Select the price range</option>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
            <option value="$$$$">$$$$</option>
          </select>
        </div>

        <div className='formquestion col-auto'>
          <label> Tags: </label>
          <Select
            isMulti={true}
            value={selectedTags}
            onChange={handleSelectedTags}
            options={tagOptionsArray} />
        </div>

        <div className='formquestion col-auto'>
          <label> Business Location:   </label>
          <select id='businessLoc' className="form-select" 
            value={selectedIsland} onChange={handleBizIslandChange} >
              <option value="">Select the island</option>
              <option value="Maui">Maui</option>
              <option value="Hawaiʻi">Hawaiʻi</option>
              <option value="Oahu">Oahu</option>
              <option value="Molokai">Molokai</option>
              <option value="Lāna‘i">Lāna‘i</option>
              <option value="Kaua'i">Kaua'i</option>
          </select>
        </div>

        <div className='formquestion'>
          <label>Business description:
            <textarea className="form-control"
              placeholder={"Tell us about your business"}
              value={typedBizDescInput}
              onChange={handleBizDescChange}
              required />
          </label>
        </div>

        <div className="mb-5 image-upload-form formquestion">
          <label htmlFor="imageUploadInput">Add Image: </label>
          <input type="file" name="image" id="imageUploadInput" onChange={handleChange} />
        </div>
        {!isComplete && <div className="ms-5 alert alert-danger">Please double check if every box is completed.</div>}
        <button className="formquestion btn btn-primary" type="submit"> Submit form </button>
      </form>
    </div>
  )
}


