function preload(){

}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes);

}
function draw(){
    image(video,0,0,300,300);
}
function take_snapshot(){
    save("selfie,with,muustache,2o.png");    
  }
  function modelLoaded(){
    console.log("Pose Net Model Loaded");
    }
    function gotposes(result){
        if(result.length>0){
            console.log(result);
            console.log(" X Position Of Nose: " + result[0].pose.nose.x);
            console.log(" Y Position Of Nose: " + result[0].pose.nose.y);     
        }
    }