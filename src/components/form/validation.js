const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//const regexPassword = /^(?=.*[A-Za-z])(?=.\d)[A-Za-z*\d]{6,10}$/g;
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/;

export function validation (userData){
    let errors = {};

    if(!regexEmail.test(userData.username)) errors.username ="User must be a valid email";
    if(!userData.username) errors.username ="user cannot be empty";
    if(userData.username.length >35) errors.username = "Username cannot exceed 35 char";

    //if(userData.password <6 && userData.password >10) errors.password = "Password long must be between 6 and 10 char";
    if(!regexPassword.test(userData.password)) errors.password = "Password must have al least one number and long must be between 6 and 10 char";
    
    return errors;
}