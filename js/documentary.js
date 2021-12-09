var iframeDocument = document.getElementById("iframe");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var nameText = document.getElementById("actorNames");
var allOrNothing = document.getElementById("allOrNothing");
allOrNothing.onclick = function () {
    iframeDocument.src = "https://www.youtube.com/embed/qz6RreTMEyA";
    img1.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Timothy_Spall_World_Premiere_The_Party_Berlinale_2017_02.jpg/250px-Timothy_Spall_World_Premiere_The_Party_Berlinale_2017_02.jpg";
    img2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZR7eaDpSjZl6wFGPxuL7iCKPYOFOA8gKGx3QTRWRRt-mzOaO";
    img3.src = "https://lh3.googleusercontent.com/proxy/bcFg3pqpafkr5VjkYvWaq-VsWdrrXN5r0lf3Afn9carPaFyHHAfAEiNRJ6TBOh473Ec2-JVsYxdH29293o9QziDAV5Vnhvg9fxpZ4FsC9H6P9oB8IDqNzMcpBn6dmYW5fvEqKZ5M2Q";
    img4.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mike_Leigh_%282008%29.jpg/250px-Mike_Leigh_%282008%29.jpg";
    nameText.innerHTML=("&nbsp;&nbsp;Timothy Spall&emsp;&nbsp;&emsp;&nbsp;Lesley Manville&emsp;&nbsp;&emsp;&nbsp;Andrew Dickson;&emsp;&emsp;&nbsp;Mike Leigh");
};
var theInterrupters = document.getElementById("theInterrupters");
theInterrupters.onclick = function () {
    iframeDocument.src = "https://www.youtube.com/embed/2VD0ToxlXbU";
    img1.src = "https://s3.amazonaws.com/chicago_ideas_production/portraits/full/76.jpg?1326134317";
    img2.src = "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQUUuT-6QT5z1YD0myqsgfMA93dN6e8_p8M5d7FVSBm7FbmPH-ZHx6YCdDnJJyL";
    img3.src = "https://kartemquin.com/sites/default/files/news/images/ameena_matthews_0_0.jpg";
    img4.src = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRrKxvtPmKLdDEcVvlvp34P5EMP7DYsFh4Y43m2ZuTML5Axrx3X";
    nameText.innerHTML=("&nbsp;&nbsp;&emsp;&emsp;Ricardo Williams;&emsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&emsp;Eddie Bocanegra&emsp;&emsp;&nbsp;&emsp;&nbsp;Ameena Matthews&nbsp;&nbsp;&emsp;&nbsp;Steve James");
};  
var baraka = document.getElementById("baraka");
baraka.onclick = function () {
    iframeDocument.src = "https://www.youtube.com/embed/ZSfFHxyYJJA";
    img1.src = "https://m.media-amazon.com/images/M/MV5BNDcxODE4OTM4N15BMl5BanBnXkFtZTcwMDAyMTg2OA@@._V1_UX214_CR0,0,214,317_AL_.jpg";
    img2.src = "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSEDhRBZqBiTu-KH_tEIeF-kYEVciDGZA7ASnynf0LsC_pOQcAnRNh_h3Cq4lmq";
    img3.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/DeadCanDance2005C.jpg/1280px-DeadCanDance2005C.jpg";
    img4.src = "https://i.ytimg.com/vi/aFSa_Lli4ek/maxresdefault.jpg";
    nameText.innerHTML=("&nbsp;&nbsp;&emsp;Ron Fricke&emsp;&nbsp;&emsp;&nbsp;&emsp;Mark Magidson&emsp;&nbsp;&emsp;&nbsp;Dead Can Dance&nbsp;&nbsp;&emsp;&nbsp;Michael Stearns");
};
var zeitgeist = document.getElementById("zeitgeist");
zeitgeist.onclick = function () {
    iframeDocument.src = "https://www.youtube.com/embed/P3RQB-jQulE";
    img1.src = "https://upload.wikimedia.org/wikipedia/commons/9/90/Peter_Joseph.jpg";
    img2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbt2yEG6Ox_NxJF8sXstlVI4VOXcWdcgREzDyba-rchVfh7YVS";
    img3.src = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Jacque_Fresco_and_lemon_tree.jpg";
    img4.src = "https://pbs.twimg.com/profile_images/3640528853/5a97fc023df0866b3df0ea334d47ecd3_400x400.jpeg";
    nameText.innerHTML=("&nbsp;&nbsp;&emsp;Peter Joseph&emsp;&nbsp;&emsp;&nbsp;&emsp;George Carlin&emsp;&nbsp;&emsp;&nbsp;&emsp;Jacque Fresco&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;Roxanne Meadows");
};
var firstMan = document.getElementById("firstMan");
firstMan.onclick = function () {
    iframeDocument.src = "https://www.youtube.com/embed/PSoRx87OO6k";
    img1.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ryan_Gosling_in_2018.jpg/800px-Ryan_Gosling_in_2018.jpg";
    img2.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Claire_Foy_in_2018.jpg/800px-Claire_Foy_in_2018.jpg";
    img3.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Kyle_Chandler-Nov2009.jpg/250px-Kyle_Chandler-Nov2009.jpg";
    img4.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Jason_Clarke_by_Gage_Skidmore.jpg/800px-Jason_Clarke_by_Gage_Skidmore.jpg";
    nameText.innerHTML=("Ryan Gosling&emsp;&emsp;&emsp;Claire Foy&emsp;&nbsp;&nbsp;&nbsp;&nbsp;Kyle Chandler&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;Jason Clarke");
};