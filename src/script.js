function drawDeskArea(int numDesksInRow, int numberRows) {
    alert("Hey");
    var c = document.getElementById('deskArea');
    var ctx = c.getContext('2d');
    var img = document.getElementById('desk');
    var pat = ctx.createPattern(img, numDesksInRow);
    ctx.fillStyle = pat;
    ctx.fill();
}
