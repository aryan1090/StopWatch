var count=1;
var hh=0;
var mm=0;
var ss=0;
var flag=0;
function Start(){
    flag =1;
    var btn = document.querySelector("button.start");
    btn.innerHTML = "Stop";
    btn.setAttribute("onclick","Stop()");
}
    var stop = setInterval(function(){
        if(flag==1){
            var h,m,s;
            if(mm==60){
                hh=hh+1;
                mm=0;
            }
            if(ss==60){
                mm=mm+1;
                ss=0;
            }
            else{
                ss=ss+1;
            }
            if(ss<10){
                s = '0'+ss;
            }
            else{
                s = ss;
            }

            if(mm<10){
                m = '0'+mm;
            }
            else{
                m = mm;
            }

            if(hh<10){
                h = '0'+hh;
            }
            else{
                h = hh;
            }
            var t = document.getElementById("t");
            t.innerHTML = h+":"+m+":"+s;
        }
            },1000);
    
function Stop(){
    var btnlap = document.querySelector("button.lap");
    btnlap.innerHTML = "Reset";
    btnlap.setAttribute("onclick","Reset()");
    flag=0;
}
function addTime(){
    var  d = document.createElement('div');
    var l1 = document.createElement("li");
    var l2 = document.createElement("li");
    d.setAttribute("class","laptime");
    l1.setAttribute("class","lapc");
    l2.setAttribute("class","lapt");
    l1.innerHTML =  "Lap "+count;
    var pop = document.getElementById("t");
    l2.innerHTML = pop.innerHTML;
    count++;
    var main = document.getElementById("time");
    main.appendChild(d);
    d.appendChild(l1);
    d.appendChild(l2);
}
function Reset(){
    var btn =  document.querySelector("button.lap");
    btn.innerHTML = "Lap";
    btn.setAttribute("onclick","addTime()");

    var d = document.getElementById("time");
    d.innerHTML ="";

    var t = document.getElementById("t");
    t.innerHTML = "00:00:00";
    
    var l = document.querySelector("button.start");
    l.setAttribute("onclick","Start()");
    l.innerHTML = "Start";
    count=1;
    hh=0;
    mm=0;
    ss=0;
}