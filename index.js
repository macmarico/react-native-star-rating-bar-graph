import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RatingBarGraph = ({ stars, reviewCount }) => {
    const [averageRating, setAverageRating] = useState(false)

    useEffect(() => {
        const avgRating = () => {
            let avg = ((stars.oneStar * 1) + (stars.twoStar * 2) + (stars.threeStar * 3) + (stars.fourStar * 4) + (stars.fiveStar * 5)) / (stars.oneStar + stars.twoStar + stars.threeStar + stars.fourStar + stars.fiveStar)
            setAverageRating(avg)
        }
        avgRating()
    }, [])

    const barLength = (data) => (data * 100) / (stars.oneStar + stars.twoStar + stars.threeStar + stars.fourStar + stars.fiveStar)

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>{averageRating}</Text>
            <View style={{ flexDirection: "row", marginBottom: 5 }}>
                <Image
                    tintColor={averageRating >= 1?'#E95A17':'#a1a1a1'}
                    source={require('../../assets/icons/images.png')}
                    style={styles.ratingsImage}
                />
                <Image
                    tintColor={averageRating >= 2?'#E95A17':'#a1a1a1'}
                    source={require('../../assets/icons/images.png')}
                    style={styles.ratingsImage}
                />
                <Image
                    tintColor={averageRating >= 3?'#E95A17':'#a1a1a1'}
                    source={require('../../assets/icons/images.png')}
                    style={styles.ratingsImage}
                />
                <Image
                    tintColor={averageRating >= 4?'#E95A17':'#a1a1a1'}
                    source={require('../../assets/icons/images.png')}
                    style={styles.ratingsImage}
                />
                <Image
                    tintColor={averageRating==5?'#E95A17':'#a1a1a1'}
                    source={require('../../assets/icons/images.png')}
                    style={styles.ratingsImage}
                />
            </View>

            <Text style={styles.h2}>{`based on ${reviewCount} reviews`}</Text>

            <View>
                <View style={styles.rowContainer}>
                    <Text style={styles.h3}>Excelent</Text>
                    <View style={styles.barContainer}>
                        <View style={{
                            backgroundColor: "#E95A17",
                            width: `${barLength(stars.fiveStar)}%`,
                            height: 7
                        }}></View>
                    </View>
                </View>

                <View style={styles.rowContainer}>
                    <Text style={styles.h3}>good</Text>
                    <View style={styles.barContainer}>
                        <View style={{
                            backgroundColor: "#E95A17",
                            width: `${barLength(stars.fourStar)}%`,
                            height: 7
                        }}></View>
                    </View>
                </View>

                <View style={styles.rowContainer}>
                    <Text style={styles.h3}>Average</Text>
                    <View style={styles.barContainer}>
                        <View style={{
                            backgroundColor: "#E95A17",
                            width: `${barLength(stars.threeStar)}%`,
                            height: 7
                        }}></View>
                    </View>
                </View>


                <View style={styles.rowContainer}>
                    <Text style={styles.h3}>Below average</Text>
                    <View style={styles.barContainer}>
                        <View
                            style={{
                                backgroundColor: "#E95A17",
                                width: `${barLength(stars.twoStar)}%`,
                                height: 7,
                            }}></View>
                    </View>
                </View>


                <View style={styles.rowContainer}>
                    <Text style={styles.h3}>poor</Text>
                    <View style={styles.barContainer}>
                        <View
                            style={{
                                backgroundColor: "#E95A17",
                                width: `${barLength(stars.oneStar)}%`,
                                height: 7,
                            }}></View>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: '#f1f1f1',
        justifyContent: 'center',
        alignItems: "center",
        padding: 10
    },
    ratingsImage: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 3,
        marginHorizontal: 20
    },
    barContainer: {
        width: "70%",
        backgroundColor: "#a1a1a1"
    },
    h1: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5,
    },
    h2: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#a1a1a1",
        marginBottom: 20,
    },
    h3: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#a1a1a1",
        marginRight:5
    },

})

export default RatingBarGraph

















