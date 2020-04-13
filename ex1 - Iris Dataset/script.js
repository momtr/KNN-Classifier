let knn;
let data;
let train = [];
let test = [];
const k = 3;

function preload() {
    data = loadTable('data/iris.csv');
}

function setup() {
    for(let i of data.rows) {
        let obj = {
            x: [parseFloat(i.arr[0]), parseFloat(i.arr[1]), parseFloat(i.arr[2]), parseFloat(i.arr[3])],
            y: i.arr[4]
        };
        if(random() < 0.8) {
            train.push(obj);
        } else {
            test.push(obj);
        }
    }
    knn = new KNN(train, k);
    let testScore = knn.score(test);
    console.log("Model's score: " + testScore * 100 + "%");
}