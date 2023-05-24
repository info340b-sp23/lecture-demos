import React, { useState } from 'react';

import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth'

export default function ProfilePage(props) {
  //convenience
  const displayName = props.currentUser.userName;

  const [imageFile, setImageFile] = useState(undefined)
  let initialURL = props.currentUser.userImg;
  const [imagePreviewLocation, setImagePreviewLocation] = useState(initialURL)

  //image uploading!
  const handleChange = (event) => {
    if(event.target.files.length > 0 && event.target.files[0]) {
      const imageFile = event.target.files[0]
      setImageFile(imageFile);
      setImagePreviewLocation(URL.createObjectURL(imageFile));
    }
  }

  const handleImageUpload = async (event) => {
    console.log("Uploading", imageFile);

    const storage = getStorage();
    const imageRef = storageRef(storage, "userImages/"+props.currentUser.userId+".png");

    await uploadBytes(imageRef, imageFile)
    const publicUrl = await getDownloadURL(imageRef)

    updateProfile(props.currentUser, {photoURL: publicUrl});

    //firebaseSet(userImageRef, publicUrl);


  }

  return (
    <div className="container">
      <h2>
        {props.currentUser.userName && displayName+"'s"} Profile
      </h2>

      <div className="mb-5 image-upload-form">
        <img src={imagePreviewLocation} alt="user avatar preview" className="mb-2"/>
        <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Choose Image</label>
        <button className="btn btn-sm btn-success" onClick={handleImageUpload}>Save to Profile</button>
        <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange}/>
      </div>
    </div>
  )
}