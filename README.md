# KNN-Classifier

Implementation of a k-Nearest Neighbor Classifier from scratch.

## Run
Start a server and run `index.html`

## Algorithm

See https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm 

```
define k // int (odd)
define vecs // vectors; data points; labeled
predict point p:
  arr = []
  for i of vecs:
    d = eucledianDistance(p, i)
    arr += d and i
  end for
  array.sort()
  k_points = array.FirstKPoints()
  label = k_points.max(label)
  return label
end func   
```

## Example Two - Points

Output: <br>

<img src="https://github.com/moritzmitterdorfer/KNN-Classifier/blob/master/imgs/img_1.png" width="320">
<img src="https://github.com/moritzmitterdorfer/KNN-Classifier/blob/master/imgs/img_2.png" width="320">

## Example One - Iris Dataset

"The data set consists of 50 samples from each of three species of Iris (Iris setosa, Iris virginica and Iris versicolor). Four features were measured from each sample: the length and the width of the sepals and petals, in centimeters." (Wikipedia, https://en.wikipedia.org/wiki/Iris_flower_data_set)

The data was split into 80% training and 20% testing.

The model has a score of 96%. (If the model is trained with the testing data, the score was still 94%)

<br>

<img src="https://github.com/moritzmitterdorfer/KNN-Classifier/blob/master/imgs/img_3.png" width="600">
