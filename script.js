
let result = document.querySelector("h1");
let intelligence = [
    "You are Very Intelligent",
    "You are Dumb",
    "You are Very Awesome",
    "You are Very Good looking",
    "You are Very Beautiful",
    "You areVery Mad",
    "You are Very good Teacher",
    "You are Very irritating",
    "You are Very Stupid",
	"You are Very Smart",
	"You are Very tall",
	"You are Very Short",
	"You are Very impressive"
];


function intelligentApp(name) {

    let randomNumber = parseInt(Math.random() * intelligence.length);
    result.innerHTML = name + " You are" + intelligence[randomNumber];


}

}
document.querySelector("button").addEventListener('click', function () {
    if (document.querySelector("input").value == "") {
        alert("Please Enter a Name");
    }
	  
	  
	  else {
        quizApp(document.querySelector("input").value.toUpperCase());
        document.querySelector("input").value = "";
    }
})