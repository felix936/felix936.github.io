function copy_url(){
    navigator.clipboard.writeText(window.location.href);
    document.getElementById("copy-url").innerHTML = '<i class="fa-solid fa-clipboard-check"></i>';
    setTimeout(function () {
        document.getElementById("copy-url").innerHTML = '<i class="fa-solid fa-clipboard"></i>';
    }, 2000)}
document.getElementById("facebook").href = "https://www.facebook.com/sharer/sharer.php?u" + window.location.href;
document.getElementById("twitter").href = "https://twitter.com/intent/tweet?url=" + window.location.href +"&text=Check%20out%20this%20project%20by%20Felix%20Burger";
document.getElementById("linkedin").href = "https://www.linkedin.com/shareArticle?mini=true&url=" + window.location.href;
document.getElementById("reddit").href = "https://reddit.com/submit?url=" + window.location.href + "&title=Check%20out%20this%20project%20by%20Felix%20Burger";
document.getElementById("whatsapp").href = " https://wa.me/?text=Check%20out%20this%20project%20by%20Felix%20Burger%3A%20" + window.location.href;
document.getElementById("email").href = "mailto:?subject=Check%20out%20this%20Project%20by%20Felix%20Burger&body=Here%20is%20the%20link%20to%20his%20project%3A%20" + window.location.href + ".";