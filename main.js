function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    x = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/T-5prAaqT/model.json', modelLoaded);
}
function modelLoaded(){
    console.log("ml5 is loaded!!! :)");
}
function draw(){
    image(video, 0, 0, 300, 300);
    x.classify(video, gotresult);
}
function gotresult(error, result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("object").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}