function clock() {
    var h = new Date().getHours();
    if (h>12) {
        h = (h - 12);
        if(h<10){
            h="0"+h;
        }
        if(h==0){
            h="12";
        }
    }
    document.getElementById("hr").innerHTML = h;
    var m = new Date().getMinutes();
    if(m<10){
        m="0"+m;
    }
    document.getElementById("min").innerHTML = m;
    var s = new Date().getSeconds();
    if(s<10){
        s="0"+s;
    }
    document.getElementById("sec").innerHTML = s;
    var d = new Date().getDate();
    if(d<10){
            d="0"+d;
    }
    document.getElementById("day").innerHTML = d;
}
setInterval(clock,1000);

var time=0;
var running=0;

function start(){
    running=1;
    stopwatch();
}

function reset(){
    running=0;
    time=0;
    document.getElementById("showtime").innerHTML="00:00:00";
}
function stopt(){
    running=0;    
}

function stopwatch(){
    if(running==1){
        setTimeout(function(){
            time++;
            var sec;
            var min;
            var millisec;
    
            min=Math.floor(time/100/60);
            sec=Math.floor(time/100);
            millisec=(time % 100);

            if(min<10){
                min="0"+min;
            }
            if(sec>=60){
                sec=sec%60;
            }
            if(sec<10){
                sec="0"+sec;
            }
            if(millisec<10){
                millisec="0"+millisec;
            }
            document.getElementById("showtime").innerHTML=min+":"+sec+":"+millisec;
            stopwatch();
        }, 10)
    }
}

