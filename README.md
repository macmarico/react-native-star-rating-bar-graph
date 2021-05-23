# react-native-star-rating-bar-graph

# What is this

Get your star ratings displayed in bar graph.

# How it works

It takes and object where KEY is perticular star rating and VALUE is number of votes or number of people who chose that star rating. Then it calulates overall average and displays it in well designed bar graph.

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
