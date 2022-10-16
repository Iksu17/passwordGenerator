let password = [];
let choice_0 = document.getElementById("pass-0");
let choice_1 = document.getElementById("pass-1");
let choice_2 = document.getElementById("pass-2");
let choice_3 = document.getElementById("pass-3");

function generatePassword() {
    password.length = 0;
    for(let x = 0; x < 4; x++){
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>!#&#%";

        for (var i = 0; i < 15; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        password.push(text);
    }
    
    choice_0.textContent = password[0];
    choice_1.textContent = password[1];
    choice_2.textContent = password[2];
    choice_3.textContent = password[3];
  
}


//generatePassword();

