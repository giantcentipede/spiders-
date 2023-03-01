nosex = 0;
nosey = 0;
function preload() {
spooder=loadImage("https://i.postimg.cc/DZTLkywN/th-2.jpg");
}

function setup() {
canvas=createCanvas(300,300);
canvas.center();


video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}

function draw() {
    image(video,0,0,300,300);
    image(spooder,nosex,nosey,30,30);
}

function press() {
save("your_beard.png");
}

function modelLoaded() {
    console.log("poseNet is initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x=" + results[0].pose.nose.x);
        console.log("nose y=" + results[0].pose.nose.y);
        nosex = results[0].pose.nose.x - 15;
        nosey = results[0].pose.nose.y - 15;
        }
}