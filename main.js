
lipsX = 0;
lipsY = 0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
    // sunglasses = loadImage('https://i.postimg.cc/0Q5r4J09/sunglasses.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        lipsX = results[0].pose.nose.x - 10;
        lipsY = results[0].pose.nose.y + 12;
        // leye = results[0].pose.leftEye.x;
        // reye = results[0].pose.rightEye.y;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    
     image(clown_nose, lipsX, lipsY, 50, 60);
    // image(sunglasses, leye, reye, 50, 50);
}

function take_snapshot() {
    save('myFilterImage.png');
}
