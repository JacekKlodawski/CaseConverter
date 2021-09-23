//to-upper-case event handler
document.getElementById("upper-case").addEventListener("click", function()
{
    let textArea = document.querySelector("textarea").value;
    document.querySelector("textarea").value = textArea.toUpperCase();
});


//to-lower-case event handler
document.getElementById("lower-case").addEventListener("click", function()
{
    let textArea = document.querySelector("textarea").value;
    document.querySelector("textarea").value = textArea.toLowerCase();
});


//to-proper-case event handler
document.getElementById("proper-case").addEventListener("click", function()
{
    let textArea = document.querySelector("textarea").value;
    let words = textArea.split(" ");

    /*Converts each word's first letter to uppercase and concatenates the rest
    of the word's body in lowercase*/
    for(let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
    }

    document.querySelector("textarea").value = words.join(" ");
});


//to-sentence-case event handler
document.getElementById("sentence-case").addEventListener("click", function()
{
    let textArea = document.querySelector("textarea").value;
    let sentences = textArea.split(". ");

    for (let i=0; i < sentences.length; i++){
        let firstWord = sentences[i][0][0].toUpperCase() + sentences[i][0].substring(1).toLowerCase();
        sentences[i] = firstWord + sentences[i].substring(1).toLowerCase();
    }

    document.querySelector("textarea").value = sentences.join(". ");
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.

document.getElementById("save-text-file").addEventListener("click", function(){
     document.querySelector("textarea").value = download("text.txt",document.querySelector("textarea").value);
});

