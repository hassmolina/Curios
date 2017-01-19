var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
var funcionTiempo;
var pararEnTiempos = [4, 8, 10, 20];
var preguntas = ["Como te llamas", "Hola 2", "Hola 3", "Hola 4"];

function onYouTubeIframeAPIReady() {
    player = new YT.Player('existing-iframe-example', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    document.getElementById('existing-iframe-example').style.borderColor = '#FF6D00';
}

function changeBorderColor(playerStatus) {
    var color;
    if (playerStatus == -1) {
        color = "#37474F"; // unstarted = gray
    } else if (playerStatus == 0) {

        color = "#FFFF00"; // ended = yellow
        clearTimeout(funcionTiempo);

    } else if (playerStatus == 1) {
        color = "#33691E"; // playing = green
        checaTiempo(5000);
    } else if (playerStatus == 2) {
        color = "#DD2C00"; // paused = red
    } else if (playerStatus == 3) {
        color = "#AA00FF"; // buffering = purple
    } else if (playerStatus == 5) {
        color = "#FF6DOO"; // video cued = orange
    }
    if (color) {
        document.getElementById('existing-iframe-example').style.borderColor = color;
    }
}

function onPlayerStateChange(event) {
    changeBorderColor(event.data);
}

function checaTiempo() {

    var i = 0;
    funcionTiempo = setTimeout(function() {
        var tiempo = player.getCurrentTime();
        var segundos = Math.floor(tiempo);
        console.log(tiempo);

        // while (pararEnTiempos.indexOf(pararEnTiempos[i])<=pararEnTiempos.length) {
        //   i = pararEnTiempos.indexOf(pararEnTiempos[i+1]);
        //   i=i++;
        // }

        if (pararEnTiempos.indexOf(segundos) > -1) {
            //  while (pararEnTiempos[i] == pararEnTiempos.length) {
            console.log(pararEnTiempos.indexOf(pararEnTiempos[i]))
            console.log("Preguntar");
            console.log(preguntas[pararEnTiempos.indexOf(segundos)])
                // var indiceParar = pararEnTiempos.indexOf(pararEnTiempos[i]);
                // while (pararEnTiempos.indexOf(pararEnTiempos[i]) <= pararEnTiempos.length) {

            // i++;
            // }
            //  i++;
            //}

            //AQUI SE PARO

            // console.log(pararEnTiempos.indexOf(pararEnTiempos[1]))
            // for (var i = 0; i < pararEnTiempos.length; i++) {
            //
            //   if (pararEnTiempos.indexOf(pararEnTiempos[i])==1) {
            //     console.log("test");
            //   }
            //   switch(pararEnTiempos.indexOf(pararEnTiempos[i])) {
            // case 1:
            // console.log("test");
            //     break;
            // case 2:
            // console.log("test2");
            //     break;
            // default:
            //     console.log("testundefinded");
            //     break;
            // }
            //}
            player.pauseVideo();

        }

        checaTiempo();

    }, 1000);
    //  i=i+1;
}

// function contestar() {
//   if (true) {   //Si contesta bien
//     player.playVideo()
//   }
//}
