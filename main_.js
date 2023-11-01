
var typed = new Typed('.typed', {
    strings: ['DEVELOPER', 'PROGRAMMER', 'WEB DEVELOPER'],
    typeSpeed: 110,
    backSpeed: 60,
    loop: true
});


const user = {
    name: null,
    email: null,
    mobile: null,
    massage: null,
}


var takevalue = (event) => {
    var { id, value } = event.target;
    console.log(id, value);

    switch (id) {
        case "yourname":
            user.name = value;
            break;

        case "exampleInputEmail1":
            user.email = value;
            break;


        case "mobile-no":
            user.mobile = value;
            break;


        case "massageid":
            user.massage = value;
            break;

        default:
            break;
    }
    console.log(user);
}



var submitform = () => {
    if (user.name !== null && user.email !== null && user.mobile !== null && user.massage !== null) {

        localStorage.setItem("Name", user.name)
        localStorage.setItem("email", user.email)
        localStorage.setItem("Mobile", user.mobile)
        localStorage.setItem("MAssage", user.massage)
        if (user.name !== null && user.email !== null && user.mobile !== null && user.massage !== null) {
            return alert("massage successfull sand")
        } 
    }

}

const userform = () => {


}
