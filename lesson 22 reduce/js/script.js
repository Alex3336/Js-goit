const massiveCock = [1,2,3,4,5,6,7,8,9]

const result = massiveCock.reduce((acc, element) => acc += element, 0);

console.log(result);

const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const resultTweets = tweets.reduce((acc, tweet) => acc += tweet.likes, 0 );
console.log(resultTweets);

const resultTags = tweets.reduce((acc, tweet) => {
    acc.push(...tweet.tags);
    return acc;
}, [])
console.log(resultTags);

const statisticTags = [];
  
tweets.forEach(tweet => {
    tweet.tags.forEach(tag => {
        if (statisticTags[tag]) {
            statisticTags[tag]++;
        } 
        else {
            statisticTags[tag] = 1;
        }
    });
});

console.log(statisticTags); 

const numbers = [1, 2, 3, 4, 5];

const resultNumbers = numbers.reduce((acc, number) => {
    let sum = acc += number
    
    return sum;
}, 0);
console.log(resultNumbers / numbers.length);