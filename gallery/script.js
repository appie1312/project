var fullimgbox = document.getElementById("fullimgbox");
var fullimage = document.getElementById("fullimage");
var downloadBtn = document.getElementById("downloadBtn");

var fullvideobox = document.getElementById("fullvideobox");
var fullvideo = document.getElementById("fullvideo");
var videoSource = document.getElementById("videoSource");
var backgroundVideo = document.getElementById("backgroundVideo");


function OpenFullImg(imgElement) {
    fullimgbox.style.display = "flex";
    fullimage.src = imgElement.src;
    downloadBtn.href = imgElement.src;
}

function closeFullImg() {
    fullimgbox.style.display = "none";
}


function OpenFullVideo(videoSrc) {

    backgroundVideo.pause();
    backgroundVideo.style.display = "none";

    fullvideobox.style.display = "flex";
    videoSource.src = videoSrc;
    fullvideo.load();
    fullvideo.play();
}

function closeFullVideo() {
    fullvideobox.style.display = "none";
    fullvideo.pause();
    fullvideo.currentTime = 0;

    backgroundVideo.play();
    backgroundVideo.style.display = "block";
}
