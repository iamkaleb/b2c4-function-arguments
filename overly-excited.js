let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray, char) {
    let buildMeUp = ""
    for (let i = 0; i < theWordArray.length; i++) {
       if (i > 0 && i < 3 && i % 2 === 0) {
         buildMeUp += `${theWordArray[i]}${char} `;
     } else if (i > 3 && i % 3 === 2) {
         buildMeUp += `${theWordArray[i]}${char} `;
     } else {
        buildMeUp += `${theWordArray[i]} `;
       }
    console.log(buildMeUp);
    }

}

addExcitement(sentence, "?")