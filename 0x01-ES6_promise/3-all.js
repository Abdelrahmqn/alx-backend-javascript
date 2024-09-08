import { uploadPhoto, createUser } from "./utils.js";
function handleProfileSignup() {
    const photoPromise = new uploadPhoto();
    const userPromise = new createUser();
  
    return Promise.all([photoPromise, userPromise])
      .then(([photoData, userData]) => {
        console.log(photoData.body, userData.firstName, userData.lastName);
      })
      .catch(() => {
        console.log('Signup system offline');
      });
  }
  
  export default handleProfileSignup;