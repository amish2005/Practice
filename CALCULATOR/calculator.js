let buttons = document.querySelectorAll(".btn");
let disp = document.querySelector(".display");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let btn9 = document.querySelector("#btn9");
let btn0 = document.querySelector("#btn0");







// btn1.addEventListener("click", () => {
//     disp.innerText = disp.innerText + 1;});

//     btn2.addEventListener("click", () => {
//         disp.innerText = disp.innerText + 2;});

//         btn3.addEventListener("click", () => {
//             disp.innerText = disp.innerText + 3;});

//             btn4.addEventListener("click", () => {
//                 disp.innerText = disp.innerText + 4;});


//                 btn5.addEventListener("click", () => {
//                     disp.innerText = disp.innerText + 5;});


//                     btn6.addEventListener("click", () => {
//                         disp.innerText = disp.innerText + 6;});

//                         btn7.addEventListener("click", () => {
//                             disp.innerText = disp.innerText + 7;});

//                             btn8.addEventListener("click", () => {
//                                 disp.innerText = disp.innerText + 8;});
//                                 btn9.addEventListener("click", () => {
//                                     disp.innerText = disp.innerText + 9;});
//                                     btn0.addEventListener("click", () => {
//                                         disp.innerText = disp.innerText + 0;});

//                                         btn5.addEventListener("click", () => {
//                                             disp.innerText = disp.innerText + 5;});




                                        


                                        






    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            try {

                if(button == btnc ){
                    disp.innerText = "";
                }
                else if(button == btnequal) {
                    disp.innerText = eval(disp.innerText);
        
                }
                else if(button == btn0 && disp.innerText == ""){
                    disp.innerText = "Error";
                }

                else if(disp.innerText == "Error"){
                    disp.innerText = button.innerText;
                }
                else if(button == btnx) {
                    disp.innerText += "*";
        
                }
        
                
                else{
                disp.innerText += button.innerText;
                }
            }

            catch (error) {
                disp.innerText = "Error";
            }
            
        })
    })







    
