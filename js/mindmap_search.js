function draw() {
        var e = document.getElementById("meinKreisCanvas");
        var canv = e.getContext("2d");
        canv.fillStyle = "black";
        canv.arc(150, 150, 100, 0, 2 * Math.PI);
        canv.fill();


        var e = document.getElementById("meinKreisCanvas2");
        var canv2 = e.getContext("2d");
        canv2.fillStyle = "black";
        canv2.arc(50, 150, 50, 0, 2 * Math.PI);
        canv2.fill();

    var e = document.getElementById("Linie");
    var canv2 = e.getContext("2d");
    canv2.fillStyle = "black";
    canv2.beginPath();
    canv2.moveTo(75, 50);
    canv2.moveTo(900,900);
    canv2.stroke();


}

