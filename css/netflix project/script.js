let addition = document.querySelectorAll(".add");
let answers = document.querySelectorAll(".answer");
let visible = [];

for(let i = 0 ; i < addition.length ; i++) {
    visible.push("false");
}

for(let i = 0 ; i < addition.length ; i++) {
    addition[i].addEventListener("click", () => {
        if(visible[i]==="false") {
            answers[i].style.display="block";
            visible[i]="true";
        }
        else { 
            answers[i].style.display="none";
            visible[i]="false";
        }
    });
};

