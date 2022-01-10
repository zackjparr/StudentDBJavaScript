function GetToKnowClassmates(){
    let name = ['Andy', 'Phillip', 'Cortez', 'Erin', 'Cullin']
    let city = ['Berkley', 'Canton', 'Detroit', 'Troy', 'Fowlerville']
    let food = ['French Fries', 'Fried Chicekn', 'Chicken Fettucini Alfredo', 'Tacos', 'Pad Thai']
    let passthru = true

    while(passthru === true){
    let studentID = prompt("What student would you like more about? Pick a studentID between 0 and 4")

    if(studentID >= 4){
        console.log("No student by that ID")
    }
    else{
        console.log(studentID + ": " + name[studentID] + " is from " + city[studentID] + " and likes to eat " + food[studentID])
    }

    let answer = prompt("Do you want to continue? y or n")
    if(answer === 'y'){
        return true;
    }
    else if(answer === 'n'){
        break;
    }
    else{
        prompt("I'm sorry, please enter y or n")
        return true;//ContinueLoop();
    }
}
}

/*function ContinueLoop(){
    let answer = prompt("Do you want to continue? y or n")

    if(answer === 'y'){
        return true;
    }
    else if(answer === 'n'){
        return false;
    }
    else{
        prompt("I'm sorry, please enter y or n")
        return ContinueLoop();
    }
}*/