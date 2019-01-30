console.log(window.innerWidth) //breedte
console.log(window.innerHeight) //hoogte

const imageNames = ["pubg1.jpg", "pubg2.jpg", "pubg3.jpg", "pubg4.jpg", "pubg5.jpg", "pubg6.jpg", "pubg7.png", "pubg8.jpg"] 
const tumbs = document.getElementById('tumbs');
const display = document.getElementById('display');
let current = 0;
selectImage(Math.floor(Math.random() * imageNames.length));


for (let i = 0, max = imageNames.length; i < max; i++) {
    let tumb = new Image();
    tumb.src = "images/" + imageNames[i];
    tumb.id = i;
    tumbs.appendChild(tumb);
    tumb.addEventListener("click", function (e) {
        selectImage(e.target.id);
    });
}

function selectImage(id) {
    display.src = "images/big/" + imageNames[id];
} 

function cycle(direction){
    if (direction) {
        current--;
        if (current < 0) {
            current = imageNames.length - 1;
        }
        selectImage(current);
    } else {
        current++;
        if (current >= imageNames.length) {
            current = 0;
        }
        selectImage(current);
    }
}
