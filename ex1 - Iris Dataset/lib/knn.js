// KNN Classifier
// Mitterdorfer, 2020

/**
 * Implementation of a k-Nearest Neighbor Classifier
 */
class KNN {

    /**
     * constructor function
     * @param {array} data - data 
     * [ {x: [], y: ''}, .., {..} ]
     * @param k - number of reference points
     */
    constructor(data, k=3) {
        // only for odd ks, there is a definite solution
        if((k % 2) == 0)
            console.warn("K should be odd for better results!");
        this.data = data;
        this.k = k;
    }

    /**
     * Returns all points and their distance to the given vec in a sorted array
     * @param {array} vec - vector 
     */
    closestPoints(vec) {
        let points = [];
        // go through all points
        for(let i = 0; i < this.data.length; i++) {
            // get the x values
            let point = this.data[i].x;
            // push the point with its distance to the given vector to the points array
            points.push({
                dist: KNN.eucledianDistance(vec, point),
                point: i,
                class: this.data[i].y
            });
        }
        // sort the array so that array[0] is the closest point
        points.sort((a, b) => {
            if(a.dist < b.dist) return -1;
            else                return 1;
        });
        // return the points
        return points;
    }

    /**
     * Returns the prediction label for a given vector
     * @param {array} vec - the vector 
     */
    predict(vec) {
        // get the closest points in an array
        let points = this.closestPoints(vec);
        let classes = {};
        // go through the k-closest points
        for(let i = 0; i < this.k; i++) {
            // store the label
            let y = points[i].class;
            if(classes[y])
                classes[y]++;
            else
                classes[y] = 1;
        }
        // sort the labels according to their size
        let labels = Object.keys(classes);
        labels.sort((a, b) => {
            if(classes[a] < classes[b]) return 1;
            else                        return -1;
        });
        // return the label (= prediction)
        return labels[0];
    }

    /**
     * Returns the eucledian distance between two vectors
     * @param {array} vec1 - first vector
     * @param {array} vec2 - second vector
     */
    static eucledianDistance(vec1, vec2) {
        let sum = 0;
        // for every entry in the vector, add the difference ^ 2
        for(let i = 0; i < vec1.length; i++) {
            let product = vec2[i] - vec1[i];
            sum += product * product
        }
        // take the square root
        return Math.pow(sum, (1/2));
    }

    /**
     * Function that returns the score (accuracy) of the model (0 <= score <= 1)
     * @param {*} data - test data set 
     */
    score(data) {
        // number of entries in the dataset
        let n = data.length;
        // number of correct predictions
        let right = 0;
        // go through all data points
        for(let i of data) {
            // calculate the model's prediction
            let modelY = this.predict(i.x);
            // compare it with the real label
            if(modelY == i.y)
                right++;
        }
        // return the score
        return right / n;
    }

}