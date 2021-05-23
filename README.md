# react-native-star-rating-bar-graph

# what is this

Get your ratings displayed in bar graph with average rating from total stars (1 star , 2 star .... ,5stars).

# Instalation

'npm i react-native-star-rating-bar-graph --save'

Then..

...
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
