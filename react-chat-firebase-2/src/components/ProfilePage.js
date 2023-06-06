import React, { useState } from 'react';
import { getStorage, ref as firebaseStorageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { updateProfile } from 'firebase/auth'

export default function ProfilePage(props) {
  //convenience
  const displayName = props.currentUser.userName;

  const [imageFile, setImageFile] = useState(undefined)
  let initialURL = props.currentUser.userImg;
  const [imageUrl, setImageUrl] = useState(initialURL)

  //image uploading!
  const handleChange = (event) => {
    if(event.target.files.length > 0 && event.target.files[0]) {
      const imageFile = event.target.files[0]
      console.log(imageFile);
      console.log(URL.createObjectURL(imageFile))
      setImageFile(imageFile);
      setImageUrl(URL.createObjectURL(imageFile));
    }
  }

  const handleImageUpload = (event) => {
    console.log("Uploading", imageFile);
    // upload the data
    const storage = getStorage();
    const imageRef = firebaseStorageRef(storage, "images/image.png");
    const uploadResults = uploadBytes(imageRef, imageFile);
    uploadResults.then((results) =>{
      console.log("done");
      return getDownloadURL(imageRef)
    }).then((results) =>{
      console.log(results);
      props.currentUser.userImg = results;
      const newUser = {...props.currentUser};
      props.setCurrentUser(newUser);
    })
  }

  return (
    <div className="container">
      <h2>
        {props.currentUser.userName && displayName+"'s"} Profile
      </h2>

      <div className="mb-5 image-upload-form">
        <img src={imageUrl} alt="user avatar preview" className="mb-2"/>
        <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Choose Image</label>
        <button className="btn btn-sm btn-success" onClick={handleImageUpload}>Save to Profile</button>
        <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange}/>
      </div>
    </div>
  )
}