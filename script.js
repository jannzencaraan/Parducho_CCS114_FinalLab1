// Get elements using getElementById
const button = document.getElementById("showInfoBtn");
const output = document.getElementById("output");

// Get the form using querySelector
const form = document.querySelector("#userForm");

// Get all input elements using getElementsByTagName
const inputs = document.getElementsByTagName("input");

// Get all form groups using getElementsByClassName
const groups = document.getElementsByClassName("form-group");

// When the button is clicked
button.addEventListener("click", function () {
  let name = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;
  let birthday = document.getElementById("birthday").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  let course = document.getElementById("course").value;
  let school = document.getElementById("school").value;
  let hobby = document.getElementById("hobby").value;
  let color = document.getElementById("color").value;

  // Get the selected gender
  let selectedGender = document.querySelector('input[name="gender"]:checked');

  let gender = "";

  if (selectedGender != null) {
    gender = selectedGender.value;
  }

  // Display the information
  output.innerHTML = `
        <div class="info">
            <strong>Full Name:</strong> ${name}
        </div>

        <div class="info">
            <strong>Email:</strong> ${email}
        </div>

        <div class="info">
            <strong>Age:</strong> ${age}
        </div>

        <div class="info">
            <strong>Birthday:</strong> ${birthday}
        </div>

        <div class="info">
            <strong>Phone Number:</strong> ${phone}
        </div>

        <div class="info">
            <strong>Address:</strong> ${address}
        </div>

        <div class="info">
            <strong>Course:</strong> ${course}
        </div>

        <div class="info">
            <strong>School:</strong> ${school}
        </div>

        <div class="info">
            <strong>Hobby:</strong> ${hobby}
        </div>

        <div class="info">
            <strong>Favorite Color:</strong> ${color}
        </div>

        <div class="info">
            <strong>Gender:</strong> ${gender}
        </div>
    `;

  console.log("Inputs found: " + inputs.length);
  console.log("Form groups found: " + groups.length);
});
