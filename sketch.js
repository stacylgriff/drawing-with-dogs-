//create function for video capture 
let video;
let poseNet;
let noseX = 0;
let noseY = 0;
let tongueOutDog; 

// function for dog image to be inserted 
function preload(){
 tongueOutDog = loadImage('tongueOutCrown.png');
  
}

//anything in here runs once 
function setup() {
  //canvas size 
  createCanvas(windowWidth, windowHeight);
  //capture video 
  video = createCapture(VIDEO); 
  //hide duplicated video
  video.hide();
  //load posenet model and play with video
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', DOGGYposes);
}

function DOGGYposes(poses) {
  // position of filter on face 
  if (poses.length >0){
    noseX = poses[0].pose.keypoints[0].position.x;
    noseY = poses[0].pose.keypoints[0].position.y;
  }
}

function modelReady() {
  
}


//anything in here runs forever until i say stop 
function draw() {
  //video runs from top left to top right 
  image(video, 0, 0, 320, 250); 
  image(tongueOutDog, (noseX)-145, (noseY)- 230, 270, 250);
}