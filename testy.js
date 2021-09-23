function ProperCase(){
    let textarea = document.querySelector('textarea');
    let text = textarea.value;
    let arrText = text.split(" ");

    for ( let i = 0; i < arrText.lenght; i++) {
        arrText[i] = arrText[i].charAt(0).toUpperCase() + arrText[1].slice(1);
    }
    textarea.value = arrText.join(" ");
}


document.getElementById("upper-case").addEventListener("click", function () {
    document.querySelector("textarea").value
        = document.querySelector("textarea").value.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function () {
    document.querySelector("textarea").value
        = document.querySelector("textarea").value.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", function ProperCase() {}
);


let toSentenceCaseButton = document.getElementById('sentence-case');
toSentenceCaseButton.addEventListener('click', function () {
    let sentences = textArea.value.toLowerCase().split('. ');
    let modifiedSentences = [];
    for (let sentence of sentences) {
        let modifiedSentence = sentence.charAt(0).toUpperCase().concat(sentence.slice(1));
        modifiedSentences.push(modifiedSentence);
    }
    textArea.value = modifiedSentences.join('. ');
});