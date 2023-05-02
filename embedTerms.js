//YouTube

let youtubeEmbedState = localStorage.getItem('youtubeEmbedState');
localStorage.setItem('youtubeEmbedState', 'disabled');

const youtubeEmbeds = document.querySelectorAll('.embed.youtube');
youtubeEmbeds.forEach((youtubeEmbed) => {
const container = youtubeEmbed.parentNode;
const label = document.createElement("label");
label.className = "embed";

const checkbox = document.createElement("input");
checkbox.style.height = "1rem";
checkbox.type = "checkbox";
checkbox.checked = false;
label.appendChild(checkbox);

const p = document.createElement("p");
p.innerHTML = "&nbsp;I accept&nbsp;<a href='https://www.youtube.com/static?template=terms' class='article-link'> YouTubes Terms of Service</a>";
p.style.display = 'block';
p.style.padding = "5vw 0";
p.style.verticalAlign = "middle";
p.style.height = "min-content";
label.appendChild(p);

label.style.width = '80%';
label.style.minHeight = '30vh';
label.style.display = 'flex';
label.style.borderRadius = '2vw';
label.style.justifyContent = 'center';
label.style.alignItems = 'center';
label.style.margin = "5vh auto";
label.style.padding = '2vw';

label.style.backgroundColor = "var(--background)"
container.insertBefore(label, youtubeEmbed);
checkbox.addEventListener('change', () => {
    youtubeEmbedState = localStorage.getItem('youtubeEmbedState')
    if (youtubeEmbedState !== 'enabled') {
    youtubeEmbeds.forEach((youtubeEmbed) => {
        youtubeEmbed.style.display = 'flex';});
    const embedLabels =  document.querySelectorAll('label.embed');
    embedLabels.forEach((embedLabel) => {
        embedLabel.style.display = 'none';});
    localStorage.setItem('youtubeEmbedState', 'enabled');
    } else {
    youtubeEmbeds.forEach((youtubeEmbed) => {
        youtubeEmbed.style.display = 'none';});

    localStorage.setItem('youtubeEmbedState', 'disabled');
    }
});
youtubeEmbed.style.display = 'none';
});



//Twitter

let twitterEmbedState = localStorage.getItem('twitterEmbedState');
localStorage.setItem('twitterEmbedState', 'disabled');

const twitterEmbeds = document.querySelectorAll('.embed.twitter');
twitterEmbeds.forEach((twitterEmbed) => {
const container = twitterEmbed.parentNode;
const label = document.createElement("label");
label.className = "embed";

const checkbox = document.createElement("input");
checkbox.style.height = "1rem";
checkbox.type = "checkbox";
checkbox.checked = false;
label.appendChild(checkbox);

const p = document.createElement("p");
p.innerHTML = "&nbsp;I accept&nbsp;<a href='https://twitter.com/en/tos#intlTerms' class='article-link'> Twitters Terms of Service</a>";
p.style.display = 'block';
p.style.margin = "auto";
p.style.padding = "5vw";
label.appendChild(p);

label.style.width = '80%';
label.style.minHeight = '30vh';
label.style.display = 'flex';
label.style.flex = 'flex';
label.style.borderRadius = '1vw';
label.style.justifyContent = 'space-around';
label.style.alignItems = 'center';
label.style.margin = "5vh auto";
label.style.padding = "2vw";

label.style.backgroundColor = "var(--background)"
container.insertBefore(label, twitterEmbed);
checkbox.addEventListener('change', () => {
    twitterEmbedState = localStorage.getItem('twitterEmbedState')
    if (twitterEmbedState !== 'enabled') {
    twitterEmbeds.forEach((twitterEmbed) => {
        twitterEmbed.style.display = 'flex';});
    const embedLabels =  document.querySelectorAll('label.embed');
    embedLabels.forEach((embedLabel) => {
        embedLabel.style.display = 'none';});
    localStorage.setItem('twitterEmbedState', 'enabled');
    } else {
    twitterEmbeds.forEach((twitterEmbed) => {
        twitterEmbed.style.display = 'none';});

    localStorage.setItem('twitterEmbedState', 'disabled');
    }
});
twitterEmbed.style.display = 'none';
});