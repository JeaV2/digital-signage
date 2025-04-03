const hacknet = document.getElementById("hacknetButton");
const noita = document.getElementById("noitaButton");
const nightrunners = document.getElementById("nightrunnersButton");
const nfshp = document.getElementById("nfshpButton");
const embeddedVideo = document.getElementById("embed");
const videoContainer = document.getElementById("trailerEmbed");
const descriptionContainer = document.getElementById("gameDescription");
const description = document.getElementById("description");
const main = document.getElementById("main");

data = {
    hacknet:{
        description: "Hacknet is an immersive, terminal-based hacking simulator for PC. Dive down a rabbit hoIe as you follow the instructions of a recently deceased hacker, whose death may not have been the accident the media reports.",
        video: "https://www.youtube.com/embed/A-jN16bNPhk",
    },
    noita:{
        description: "Noita is a magical action roguelite set in a world where every pixel is physically simulated. Fight, explore, melt, burn, freeze and evaporate your way through the procedurally generated world using spells you've created yourself.",
        video: "https://www.youtube.com/embed/0cDkmQ0F0Jw"
    },
    nightrunners:{
        description: "Descend into the underworld of Japanese street racing. Set between 1990-2009, join the local street racing crews in their battle for territory control. Explore the real location open world(s), compete in wager races, battle other crews and upgrade your vehicles with detailed car customization.",
        video: "https://www.youtube.com/embed/ArWkNIqUFv0"
    },
    nfshp:{
        description: "Feel the thrill of the chase and the rush of escape behind the wheels of the world’s hottest high-performance cars in Need for Speed™ Hot Pursuit Remastered– a heart-pumping, socially competitive racing experience.",
        video: "https://www.youtube.com/embed/HLiY6wwfGX4"
    }
};

function switchButton(button) {
    if (button === "hacknet") {
        hacknet.classList.add("current");
        noita.classList.remove("current");
        nightrunners.classList.remove("current");
        nfshp.classList.remove("current");

        main.style.backgroundColor = "#1a1110";
        videoContainer.style.borderColor = "#ffb4ab";
        descriptionContainer.style.borderColor = "#ffb4ab";

        embeddedVideo.src = data.hacknet.video;
        description.innerHTML = data.hacknet.description;
    }
    if (button === "noita") {
        hacknet.classList.remove("current");
        noita.classList.add("current");
        nightrunners.classList.remove("current");
        nfshp.classList.remove("current");

        embeddedVideo.src = data.noita.video;
        description.innerHTML = data.noita.description;
    }
    if (button === "nightrunners") {
        hacknet.classList.remove("current");
        noita.classList.remove("current");
        nightrunners.classList.add("current");
        nfshp.classList.remove("current");

        embeddedVideo.src = data.nightrunners.video;
        description.innerHTML = data.nightrunners.description;
    }
    if (button === "nfshp") {
        hacknet.classList.remove("current");
        noita.classList.remove("current");
        nightrunners.classList.remove("current");
        nfshp.classList.add("current");

        embeddedVideo.src = data.nfshp.video;
        description.innerHTML = data.nfshp.description;
    }
    console.log("button");

}