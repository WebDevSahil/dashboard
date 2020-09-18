const name_side = document.getElementById('name_side');
const name_nav = document.getElementById('name_nav');
const email = document.getElementById('email');
const dob = document.getElementById('dob');
const age = document.getElementById('age');
const address = document.getElementById('address');
const member = document.getElementById('member');
const firstName = window.prompt('Enter Your first Name');
const lastName = window.prompt('Enter Your last Name');
const getEmail = window.prompt('Enter Your Email');
const getDOB = prompt('Enter Your DOB in this format [DD-MM-YYYY]');
const getAge = prompt('Enter Your age');
const getAdd = window.prompt('Enter Your address');
const getStat = window.confirm('Are you a premium member?');
Boolean(getStat);

function printinfo() {
  name_side.innerHTML = `${firstName} ${lastName}`;
  name_nav.innerHTML = `${firstName} ${lastName}`;
  email.innerText = getEmail;
  address.innerHTML = getAdd;
  dob.innerText = getDOB;
  age.innerText = `${getAge} Years`;
  address.innerText = getAdd

  member.innerText = getStat ? 'Premium Member' : 'Not Premium Member';
}

printinfo();