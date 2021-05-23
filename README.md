# react-native-star-rating-bar-graph

# What is this

Get your star ratings displayed in bar graph.

![bar-graph](https://user-images.githubusercontent.com/18231821/119258932-759e1300-bbe9-11eb-9e24-7fbc980ed0ba.jpg)

# How it works

It takes an object where KEY is perticular star rating and VALUE is number of votes or number of people who chose that star rating. Then it calulates overall average and displays it in well designed bar graph.

```javascript
 Stars = {
    oneStar: 25, // star type : total votes
    twoStar: 30,
    threeStar: 60,
    fourStar: 80,
    fiveStar: 50,
}
```


# Instalation

`npm i react-native-star-rating-bar-graph --save`

Then..

```javascript
import RatingBarGraph from 'react-native-star-rating-bar-graph'

let Stars = {
    oneStar: 25, // star type : total votes
    twoStar: 30,
    threeStar: 60,
    fourStar: 80,
    fiveStar: 50,
}

<RatingBarChart
    stars={stars}
    reviewCount={reviewCount} // out of how many reviews (optional)
/>

```
