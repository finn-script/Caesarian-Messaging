function encrypt(){
    var input = document.getElementById('button').value;
    const alter = document.getElementById('number').value;
    const output = document.getElementById('result');
    const values = [];
    const newVals = [];
    console.log(input);
    for (let i = 0; i < input.length; i++){
        values.push(input.charCodeAt(i));
        newVals.push(charSort(parseInt(values[i]),parseInt(alter)));
        newVals[i] = String.fromCharCode(newVals[i]);
    }
    var final = newVals.join('');
    output.innerText = final;
}

function charSort(ascii, alter){
    if (ascii<65 || ascii>122 || ascii>90 && ascii<97){
        //setting boundaries to ascii character (except for space)
        if (ascii == 32){
            return ascii.toString();
        }
        alert('error: invalid characters (use letters only)')
    } else if (ascii >= 65 && ascii <= 90 || ascii == 32) {
        //this runs if ascii character is an UPPERCASE char
        ascii += alter;
    } else {
        //runs if ascii char is a lowercase char
        ascii += alter;
        ascii -= 32;
    }
    while (ascii > 90){
        //if ascii character is greater 
        ascii -= 26
    }
    while (ascii < 65){
        //if ascii character is greater 
        ascii += 26
    } 
    return ascii.toString();
}

function decipher(){
    const text = document.getElementById('Xbutton').value;
    const key = document.getElementById('Xnumber').value;
    const output = document.getElementById('output');
    const values = [];
    const newVals = [];
    for (let i = 0; i < text.length; i++){
        values.push(text.charCodeAt(i));
        newVals.push(charSort(parseInt(values[i]),parseInt(key * -1)));
        newVals[i] = String.fromCharCode(newVals[i]);
    }
    var final = newVals.join('');
    output.innerText = final;
}