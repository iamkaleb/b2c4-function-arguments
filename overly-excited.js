let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

function addExcitement (theWordArray) {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
       if (i % 3 === 0) {
         buildMeUp += `${theWordArray[i]}! `;
       }
       else {
        buildMeUp += `${theWordArray[i]} `;
       }
    console.log(buildMeUp);
    }

}

addExcitement(sentence)