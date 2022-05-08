const inputs = document.querySelectorAll("input");


const patterns = {
    username: /^([a-z]|\s)+$/i,
    password:/^\w{8}$/,
    mobileNumber: /^(011|012|010)\d{8}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    
}

function validate(field, regex){
    if (regex.test(field.value)){
        field.className = "valid"
    } else{
        field.className = "invalid"
    }
}


inputs.forEach((input) => {
    input.addEventListener("keyup", (e) =>{
        validate(e.target, patterns[e.target.attributes.name.value])
    }
    )
})