
var codeSnippets = document.querySelectorAll('button.copy-code');
for (var i = 0; i < codeSnippets.length; i++){
    codeSnippets[i].id = 'copy-code' + i;
}

function copy_code(clicked_id){
    var copyText = document.getElementById(clicked_id).parentElement.parentElement.parentElement.getElementsByTagName('code')[0];
    var copyText = copyText.textContent;
    navigator.clipboard.writeText(copyText);
    document.getElementById(clicked_id).innerHTML = '<i class="fa-solid fa-clipboard-check"></i>&nbsp;Copied';
    setTimeout(function () {
        document.getElementById(clicked_id).innerHTML = '<i class="fa-solid fa-clipboard"></i>&nbspCopy';
    }, 1000)
}