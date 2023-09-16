const allThoughts = [
    "Where is this?",
    "What is the velocity of a unladen sparrow?",
    "Your father was a hamster and your mother smells of elderberries",
    "What is love, baby don't hurt me",
    "Do you remember the 21st night of September?",
    "I want to walk five hundred miles and I want to walk five hundred more",
    "Just to be the man who walked a thousand miles to wind up at your door",
    "Blackbird singing in the dead of night",
    "Arlo, my dog, is the most important thing in my entire world",
    "Who do you think you are?",
  ];
  
  const users = [
    { username: "nick", email: "pooperscooper@gmail.com" },
    { username: "rose", email: "rugendorf@gmail.com" },
    { username: "mel", email: "crazykid@hotmail.com" },
    { username: "francene", email: "imtired@yahoo.com" },
    { username: "chris", email: "whataburger@aol.com" },
  ];
  
  const allReactions = [
    "Nice!",
    "Woof",
    "Hey there",
    "Good work!",
    "Why?",
  ];
  
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  const getReactions = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(allReactions),
        username: getRandomArrItem(users).username,
      });
    }
    return results;
  };
  
  module.exports = { users, allThoughts, getRandomArrItem, getReactions};