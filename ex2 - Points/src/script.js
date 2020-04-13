let knn;
const k = 3;
let points = [];
let mode = 'a';

function setup() {
    createCanvas(600, 600);
    noStroke();
}

function draw() {
    background(40);
    if(knn) {
        for(let y = 0; y < height; y += 6) {
            for(let x = 0; x < width; x += 6) {
                let label = knn.predict([x, y]);
                if(label == 'a')        fill(255, 0, 0, 50);
                else if(label == 'b')   fill(0, 255, 0, 50);
                rect(x, y, 6, 6);
            }
        }
    }
    for(let i of points) {
        let label = i.y;
        if(label == 'a')        fill(255, 0, 0);
        else if(label == 'b')   fill(0, 255, 0);
        ellipse(i.x[0], i.x[1], 20, 20);
    }
}

function mousePressed() {
    points.push({
        x: [mouseX, mouseY],
        y: mode
    });
}

function keyPressed() {
    if(key == 'a' || key == 'b') {
        mode = key;
    }
    else if(key == 's') {
        knn = new KNN(points, k);
    }
}