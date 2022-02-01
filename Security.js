class Security {

    constructor(){ 
    }

    display1(){
        var access1 = createInput("");
        access1.position(100,90);
        access1.style('background', 'white');  

        var button1 = createButton('Check');
        button1.position(100,120);
        button1.style('background', 'lightgrey');    

        var access2 = createInput("")
        access2.position(700,190);
        access2.style('background', 'white');  

        var button2 = createButton('Check');
        button2.position(700,220);
        button2.style('background', 'lightgrey');

        var access3 = createInput("")
        access3.position(100,290);
        access3.style('background', 'white');  

        var button3 = createButton('Check');
        button3.position(100,320);
        button3.style('background', 'lightgrey');
       
        console.log("Display 1 was encountered");

        button1.mousePressed(() => {
            console.log("Btn 1 was clicked");
            var val = access1.value();
            console.log("value of input box is: " + val)
            if(system.authenticate(accessCode1,access1.value())){
                button1.hide();
                access1.hide();
                score++;
            }
        });

        button2.mousePressed(() => {
            console.log("Btn 2 was clicked");
            if(system.authenticate(accessCode2,access2.value())){
                button2.hide();
                access2.hide();
                score++;
            }
        });

        button3.mousePressed(() => {
            console.log("Btn 3 was clicked");
            if(system.authenticate(accessCode3,access3.value())){
                button3.hide();
                access3.hide();
                score++;
            }
        });
    }

    display2(){
        
        var access4 = createInput();
        access4.position(100,90);
        access4.style('background', 'white');  

        var button4 = createButton('Check');
        button4.position(100,120);
        button4.style('background', 'lightgrey');    

        var access5 = createInput("Code1")
        access5.position(700,190);
        access5.style('background', 'white');  

        var button5 = createButton('Check');
        button5.position(700,220);
        button5.style('background', 'lightgrey');

        var access6 = createInput("Code1")
        access6.position(100,290);
        access6.style('background', 'white');  

        var button6 = createButton('Check');
        button6.position(100,320);
        button6.style('background', 'lightgrey');

        console.log("I am security display 2 function")
        
        button4.mousePressed(() => {
            if(system.authenticate(accessCode4,access4.value())){
                console.log("Btn 4 was clicked");
                button4.hide();
                access4.hide();
                score++;
            }
        });

        button5.mousePressed(() => {
        console.log("Access 5 btn was clicked")
            if(system.authenticate(accessCode5,access5.value())){
                button5.hide();
                access5.hide();
                score++;
            }
        });

        button6.mousePressed(() => {
        console.log("Access 6 btn was clicked")
            if(system.authenticate(accessCode6,access6.value())){
                button6.hide();
                access6.hide();
                score++;
            }
        });
    }
}