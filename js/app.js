//Variables
let user_choice = document.getElementById("entry_list"); //User choice datalist
let mic_button = document.getElementById("mic"); //Microphone button

//Speech Recognition variables
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition; //Speech recognition
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
let recognition = new SpeechRecognition(); //Declare speech recognition as variable
recognition.continuous = false; //Not continous recognition
recognition.lang = 'en-US'; //English recognition
recognition.interimResults = false; //No temporary result
recognition.maxAlternatives = 1; //Max altenarnatives of result

//Function to handle user input
function handle_input(){

    //Remove listening display
    document.getElementById("listening").style.display = "none";
    
    //Variables
    let user_value = document.getElementById("entry_list").value; //Get datalist value

    //Switch statement to open according page 
    switch(user_value){
        case "DEF":
            window.open("./html/def.html"); //Defenders
            break;
        case "FW":
            window.open("./html/fw.html"); //Forwards
            break;
        case "Full":
            window.open("./html/full.html"); //Full team
            break;
        case "GK":
            window.open("./html/gk.html"); //Goalies
            break;
        case "MID":
            window.open("./html/mid.html"); //Mids
            break;
        case "Basics":
            window.open("./html/basics.html"); //Basics
            break;
        case "Defending":
            window.open("./html/defending.html"); //Defending
            break;
        case "Dribbling":
            window.open("./html/dribbling.html"); //Driblling
            break;
        case "Passing":
            window.open("./html/passing.html"); //Passing
            break;
        case "Set":
            window.open("./html/set.html"); //Set pieces
            break;
        case "Finishing":
            window.open("./html/shooting.html"); //finishing
            break;
        case "Technique":
            window.open("./html/tech.html"); //Techinique
            break;
        case "Formations":
            window.open("./html/form.html"); //Formations
            break;
        case "Pressure":
            window.open("./html/pressure.html"); //Pressure
            break;
        case "Knowledge":
            window.open("./html/knowledge.html"); //Knowledge
            break;
    }
}

//Function to recognize the user input from speech
function handle_speech(){

    //Display listening message
    document.getElementById("listening").style.display = "block";

    //Start recognition
    recognition.start();

    //Event listener when recognition gets a result
    recognition.onresult = function(event){
        
        //Variables
        let d_result = event.results[0][0].transcript; //Get clean result from the voice recognition
        let result = d_result.toLowerCase(); //Put the result in lower case
        
        //Handle the user's voice input
        switch(result){
            case "defenders":
                window.open("./html/def.html");  //Defenders
                break;
            case "strikers":
                window.open("./html/fw.html"); //Forwards
                break;
            case "team":
                window.open("./html/full.html"); //Full team
                break;
            case "goalies":
                window.open("./html/gk.html"); //Goalkeeper
                break;
            case "mids":
                window.open("./html/mid.html"); //Mids
                break;
            case "basics":
                window.open("./html/basics.html"); //Basics
                break;
            case "defending":
                window.open("./html/defending.html"); //Defending
                break;
            case "skill":
                window.open("./html/dribbling.html"); //Dribbling
                break;
            case "passing":
                window.open("./html/passing.html"); //Passing
                break;
            case "pieces":
                window.open("./html/set.html"); //Set pieces
                break;
            case "finishing":
                window.open("./html/shooting.html"); //finishing
                break;
            case "technique":
                window.open("./html/tech.html"); //Technique
                break;
            case "formations":
                window.open("./html/form.html"); //Formations
                break; 
            case "pressure":
                window.open("./html/pressure.html"); //Pressure
                break;
            case "knowledge":
                window.open("./html/knowledge.html"); //Knowledge
                break;
        }
    }

    setTimeout(() => {
        document.getElementById("listening").style.display = "none";
      }, "3000");
}

//Event listeners
user_choice.addEventListener("change",handle_input); //Handle datalist input
mic_button.addEventListener("click", handle_speech); //Handle microphone