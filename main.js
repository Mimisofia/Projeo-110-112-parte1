prediction1 = "";
prediction2 = "";

Webcam.set({
    width:350,
    height:300,
    imageFormat : 'png' ,
    pngQuality : 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapShot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "captured_image" src = "'+data_uri+'"/>';
    });
}

console.log('ml5 version: ', ml5.version);

classifier =  ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Rufp0umpu/model.json',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded!');
}

function speak()
{
    var synth  = window.speechSynthesis;
    speakData1 = "A primeira previsão é " + prediction1;
    speakData2 = "E a segunda previsão é " + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speakDta1 + speakData2);
    synth.speak(utterThis);
} 

 function check()
 {
    img = document.getElementById('captured_image');
    classifier.classify(img, got_result);
 }

 function gotResult(error, results) 
 {
    if(error) {
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("resultEmotionName").innerHTML = results[0].label;
        document.getElementById("resultEmotionName2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;

        speak();
        if(results[0].label == "Legal")
        {
            document.getElementById("updateEmoji").innerHTML = "&#128077;"
        }
        if(results[0].label == "Tranquilo")
        {
            document.getElementById("updateEmoji").innerHTML = "&#129305;"
        }
        if(results[0].label == "Vitória")
        {
            document.getElementById("updateEmoji").innerHTML = "&#9996;"
        }
        if(results[0].label == "Perfeito")
        {
            document.getElementById("updateEmoji").innerHTML = "&#128076;"
        }
        if(results[0].label == "Olá!")
        {
            document.getElementById("updateEmoji").innerHTML = "&#128075;"
        }
        if(results[0].label == "Sou do rock")
        {
            document.getElementById("updateEmoji").innerHTML = "&#129311;"
        }
        if(results[0].label == "Amém")
        {
            document.getElementById("updateEmoji").innerHTML = "&#128591;"
        }
        if(results[0].label == "Não gostei")
        {
            document.getElementById("updateEmoji").innerHTML = "&#128078;"
        }
        
        if(results[1].label == "Legal")
        {
            document.getElementById("updateEmoji2").innerHTML = "&#128077;"
        }
        if(results[1].label == "Tranquilo")
        {
            document.getElementById("updateEmoji2").innerHTML = "&#129305;"
        }
        if(results[1].label == "Vitória")
        {
            document.getElementById("updateEmoji2").innerHTML = "&#9996;"
        }
        if(results[1].label == "Perfeito")
        {
            document.getElementById("updateEmoji2").innerHTML = "&#128076;"
        }
        if(results[1].label == "Olá!")
        {
            document.getElementById("updateEmoji2").innerHTML = "&#128075;"
        }
        if(results[1].label == "Sou do rock")
        {
            document.getElementById("updateEmoji2").innerHTML = "&#129311;"
        }
        if(results[1].label == "Amém")
        {
            document.getElementById("updateEmoji2").innerHTML = "&#128591;"
        }
        if(results[1].label == "Não gostei")
        {
            document.getElementById("updateEmoji2").innerHTML = "&#128078;"
        }


    }
 }