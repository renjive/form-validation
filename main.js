
function validateform() {


    // get input 

    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();
    const passWord = document.getElementById("password").value.trim();
    const cpassWord = document.getElementById("confirm-password").value.trim();
    const eMail = document.getElementById("mail").value.trim();
    const phoneNumber = document.getElementById("number").value.trim();
    const adDress = document.getElementById("address").value;
    const dateOfbirth = document.getElementById("dob").value;
    const selectedDate = new Date(dateOfbirth);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const fileInput = document.getElementById("file").files[0];
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const languageCheckboxes = document.querySelectorAll('input[name="language"]:checked');
    const courseInput = document.getElementById("course").value;
    const collageInput = document.getElementById("collage").value;

    // error message
    document.getElementById("error-fname").innerHTML = "";
    document.getElementById("error-lname").innerHTML = "";
    document.getElementById("password-error").innerHTML = "";
    document.getElementById("cpassword-error").innerHTML = "";
    document.getElementById("mail-error").innerHTML = "";
    document.getElementById("number-error").innerHTML = "";
    document.getElementById("address-error").innerHTML = "";
    document.getElementById("dob-error").innerHTML = "";
    document.getElementById("radio-error").innerHTML = "";
    document.getElementById("Check-error").innerHTML = "";
    document.getElementById("course-error").innerHTML = "";
    document.getElementById("collage-error").innerHTML = "";
    document.getElementById("file-error").innerHTML = "";
    let isValid = true;

    // preview




    // first name

    if (firstName === '') {
        document.getElementById("error-fname").innerHTML = "First name is required.";
        isValid = false;
    }

    else if (!/^[A-Za-z]+$/.test(firstName)) {
        document.getElementById("error-fname").innerHTML = "First name must contain only letters.";
        isValid = false;
    }


    // last name

    if (lastName === '') {
        document.getElementById("error-lname").innerHTML = "Last name is required.";
        isValid = false;
    }
    else if (!/^[A-Za-z]+$/.test(lastName)) {
        document.getElementById("error-lname").innerHTML = "Last name must contain only letters.";
        isValid = false;
    }

    //password

    if (passWord === '') {

        document.getElementById("password-error").innerHTML = "password is requird";

        isValid = false;

    } else if (passWord.length < 6) {
        document.getElementById("password-error").innerHTML = "Password must be at least 6 characters long.";
        isValid = false;
    }

    // confirm password


    if (cpassWord === '') {

        document.getElementById("cpassword-error").innerHTML = "confirm password is requird";

        isValid = false;

    } else if (cpassWord !== passWord) {
        document.getElementById("cpassword-error").innerHTML = "Please enter sme password.";
        isValid = false;
    }

    // mail

    if (eMail === '') {
        document.getElementById("mail-error").innerHTML = "please enter E-mail";

        isValid = false;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(eMail)) {

        document.getElementById("mail-error").innerHTML = "please enter valid E-mail";

        isValid = false;
    }
    //  phone number

    if (phoneNumber === '') {

        document.getElementById("number-error").innerHTML = " enter phone number";

        isValid = false;

    } else if (!/^[0-9]{10}$/.test(phoneNumber)) {

        document.getElementById("number-error").innerHTML = " please enter valid phone number";

        isValid = false;

    }
    // adress

    if (adDress === '') {
        document.getElementById("address-error").innerHTML = "please enter the address. ";
        isValid = false;

    }
    else {
        document.getElementById("address-error").innerHTML = " ";
    }

    // date of birth



    if (!dateOfbirth) {

        document.getElementById("dob-error").innerHTML = " Date of birth is required ";

        isValid = false;
    }
    if (selectedDate >= currentDate) {
        document.getElementById("dob-error").innerHTML = "please enter the valid date of birth. ";

        isValid = false;
    }

    // radio gender

    if (!genderInput) {
        document.getElementById("radio-error").innerHTML = "please select the gender";

        isValid = false;
    }

    //language 
    if (languageCheckboxes.length === 0) {
        document.getElementById("Check-error").innerHTML = "Please select at least one language.";
        isValid = false;
    }


    // course
    if (courseInput === 'select course') {

        document.getElementById("course-error").innerHTML = "this fild is requird";

        isValid = false;


    }

    // collage
    if (collageInput === '') {

        document.getElementById("collage-error").innerHTML = "this fild is requird";

        isValid = false;

    }

    //file


    if (!fileInput) {
        document.getElementById("file-error").innerHTML = "Please select a file.";
        isValid = false;
    } else if (!fileInput.type.startsWith('image/')) {
        document.getElementById("file-error").innerHTML = "Only image files are allowed.";
        isValid = false;
    }

    // File preview using URL.createObjectURL
    if (fileInput && fileInput.type.startsWith('image/')) {
        const fileReader = new FileReader();

        fileReader.onload = function(event) {
            const base64String = event.target.result; // Base64-encoded string
            localStorage.setItem('imageFile', base64String); // Store in localStorage

            const previewImage = document.getElementById("preview-image");
            previewImage.src = base64String; // Display image in preview
            previewImage.style.display = "block";
            document.getElementById("preview-file").innerHTML = "File: " + fileInput.name;
        };

        fileReader.readAsDataURL(fileInput); // Convert file to Base64
    }

    if (isValid == false) {



        document.getElementById("preview-fname").innerHTML = "First Name: " + firstName;
        document.getElementById("preview-lname").innerHTML = "Last Name: " + lastName;
        document.getElementById("preview-email").innerHTML = "E-Mail: " + eMail;
        document.getElementById("preview-phone").innerHTML = "Phone Number: " + phoneNumber;
        document.getElementById("preview-dob").innerHTML = "Date of Birth: " + dateOfbirth;
        document.getElementById("preview-address").innerHTML = "Address: " + adDress;
        document.getElementById("preview-gender").innerHTML = "gender :" + (genderInput ? genderInput.value : 'Not specified');
        document.getElementById("preview-language").innerHTML = "Languages: " + Array.from(languageCheckboxes).map(checkbox => checkbox.value).join(", ");
        document.getElementById("preview-course").innerHTML = "Course: " + courseInput;
        document.getElementById("preview-collage").innerHTML = "College: " + collageInput;
        //  document.getElementById("preview-file").innerHTML = "file ;" + fileInput;

        document.getElementById("preview").style.display = "block";



        
        // local storage 

        localStorage.setItem("First Name: ", firstName);
        localStorage.setItem("Last Name: ", lastName);
        localStorage.setItem("Phone Number: ", phoneNumber);
        localStorage.setItem("Date of Birth: ", dateOfbirth);
        localStorage.setItem("Address: ", adDress);
        localStorage.setItem("gender :", (genderInput ? genderInput.value : 'Not specified'));
        localStorage.setItem("Languages: ", Array.from(languageCheckboxes).map(checkbox => checkbox.value).join(", "));
        localStorage.setItem("Course: ", courseInput);
        localStorage.setItem("College: ", collageInput);
        localStorage.setItem("file ;", fileInput ? fileInput.name : 'No file selected');

        // next page

     

       
    }
    if (isValid == true) {

       

        const formData = {
            firstName ,
            lastName,
            eMail,
            phoneNumber,
            adDress,
            dateOfbirth,
            gender: genderInput ? genderInput.value : 'Not specified',
            languages: Array.from(languageCheckboxes).map(checkbox => checkbox.value),
            course: courseInput,
            collage: collageInput,
            file: fileInput ? fileInput.name : 'No file selected'
        };
        localStorage.setItem('formData', JSON.stringify(formData));

        alert("Form submitted successfully");
        window.open("output.html");

    }


    return isValid;


}




