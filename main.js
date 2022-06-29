song = "";
wlx = 0;
wrx = 0;
wly = 0;
wrx = 0;

function preload()
{
    song = loadSound("music.mp3");
}
function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw()
{
    image(video,0,0,200,200);
    fill("#FF0000");
    stroke("#000000");
if(score_leftwrist > 0.2)
{
    circle(wlx,wly,20);
    In_number_left_wrist_Y = Number(wly)
    remouve_decimals = floor(In_number_left_wrist_Y);
    volume = remouve_decimals/500;
    console.log(volume);
    document.getElementById("div_volume_button").innerHTML = "volume = "+volume;
    song.setVolume(volume);
}
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelLoaded()
{
    console.log("Modle loaded");
}
function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);
        score_leftwrist = results[0].pose.keypoints[9].score;
        score_rightwrist = results[0].pose.keypoints[10].score;
        console.log("score of left wrist = "+score_leftwrist+"score of right wrist = "+score_rightwrist);
        wrx = results[0].pose.rightWrist.x;
        wly = results[0].pose.leftWrist.y;
        wlx = results[0].pose.leftWrist.x;
        wry = results[0].pose.rightWrist.y;
        console.log("X cordinets of leftwrist =" + wlx + "Y cordinets of leftwrist =" + wly );
        console.log("X cordinets of rightwrist =" + wrx + "Y cordinets of rightwrist =" + wry);
    }
    
}
