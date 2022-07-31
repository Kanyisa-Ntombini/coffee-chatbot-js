const firstName = document.getElementById('first-name');
const mobileNumber = document.getElementById('mobile-number');
const emailAddress = document.getElementById('email-address');
const homeAddress = document.getElementById('home-address');
const registrationFormBtn = document.getElementById('registration-form-btn');

const profiles = [];

function Person(name, emailAddress, mobileNumber, homeAddress) {
  this.name = name;
  this.emailAddress = emailAddress;
  this.mobileNumber = mobileNumber;
  this.homeAddress = homeAddress;
}

function storeProfile() {
  const newPerson = new Person(firstName.value, mobileNumber.value, emailAddress.value, homeAddress.value);
  profiles.push(newPerson);
  //console.log(profiles);
}

registrationFormBtn.addEventListener('click', storeProfile);