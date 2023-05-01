    const PythonSnippets = document.querySelectorAll('.python-code');
    for (let x = 0; x < PythonSnippets.length; x++){
        var Snippet = PythonSnippets[x];
        var codeLines = Snippet.innerHTML.split("\n");
        for (let i = 0; i < codeLines.length; i++){
            if(codeLines[i].indexOf("#") !== -1){
                codeLines[i] = "<span class='comment'>" + codeLines[i] + "</span>";
            }
    } Snippet.innerHTML = codeLines.join("\n");}

const HTMLSnippets = document.querySelectorAll('.html-code');
for (let x = 0; x < HTMLSnippets.length; x++){
    var Snippet = HTMLSnippets[x];
    var codeLines = Snippet.innerHTML.split("\n");
    for (let i = 0; i < codeLines.length; i++){
        if(codeLines[i].indexOf("&lt;!--") !== -1){
            codeLines[i] = "<span class='comment'>" + codeLines[i] + "</span>";
        }
} Snippet.innerHTML = codeLines.join("\n");}


const CSSSnippets = document.querySelectorAll('.css-code');
for (let x = 0; x < CSSSnippets.length; x++){
    var Snippet = CSSSnippets[x];
    var codeLines = Snippet.innerHTML.split("\n");
    for (let i = 0; i < codeLines.length; i++){
        if(codeLines[i].indexOf("/*") !== -1){
            codeLines[i] = "<span class='comment'>" + codeLines[i] + "</span>";
        }
} Snippet.innerHTML = codeLines.join("\n");}

const JavaScriptSnippets = document.querySelectorAll(".js-code, .java-code, .c-code");
for (let x = 0; x < JavaScriptSnippets.length; x++){
    var Snippet = JavaScriptSnippets[x];
    var codeLines = Snippet.innerHTML.split("\n");
    for (let i = 0; i < codeLines.length; i++){
        if(codeLines[i].indexOf("//") !== -1){
            codeLines[i] = "<span class='comment'>" + codeLines[i] + "</span>";
        }
} Snippet.innerHTML = codeLines.join("\n");}

const SQLSnippets = document.querySelectorAll(".sql-code");
for (let x = 0; x < SQLSnippets.length; x++){
    var Snippet = SQLSnippets[x];
    var codeLines = Snippet.innerHTML.split("\n");
    for (let i = 0; i < codeLines.length; i++){
        if(codeLines[i].indexOf("--") !== -1){
            codeLines[i] = "<span class='comment'>" + codeLines[i] + "</span>";
        }
} Snippet.innerHTML = codeLines.join("\n");}