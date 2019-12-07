// *** YOUR ANSWER BELOW ***

let horiz = "-";
let vert = "|";
let space = " ";
let corner = "+";

function drawBox(x,y) {
    let topRow = corner + horiz.repeat(x - 2) + corner;
    console.log(topRow);
    for(let i = 0; i < (y - 1); i++) {
        if(i !== (y - 2)) {            
            console.log(vert + space.repeat(x - 2) + vert);
        } else {
            console.log(topRow);
        }
    } 
}
(drawBox(20,10));
