setInterval(() => {
    d = new Date(); //object of date()
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    hour_rotation = 30 * hour + minute / 2; //converting current time
    minute_rotation = 6 * minute;
    second_rotation = 6 * second;
    var x= document.getElementById("hr");
    var y= document.getElementById("mn");
    var z= document.getElementById("sec");
    x.style.transform = `rotate(${hour_rotation}deg)`;
    y.style.transform = `rotate(${minute_rotation}deg)`;
    z.style.transform = `rotate(${second_rotation}deg)`;
    var dhour = document.getElementById("htime");
    var dmin = document.getElementById("mtime");
    var dsec = document.getElementById("stime");
    var ampm=document.getElementById("ampm");
    let newformat = hour >= 12 ? 'PM' : 'AM';

    dhour.innerHTML= d.getHours()%12;
    dmin.innerHTML= d.getMinutes();
    dsec.innerHTML= d.getSeconds();
    ampm.innerHTML=newformat
    
}, 1000);