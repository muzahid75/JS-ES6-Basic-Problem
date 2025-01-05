const filterEvenLengthStrings = (arr) => {
    const result = [];
    arr.forEach((str) => {
      if (str.length % 2 === 0) {
        result.push(str);
      }
    });
    return result;
  };
  
  // Example usage:
  const friendsNames = ["Monkir", "Sagor", "Prosit", "Rad"];
  const evenLengthStrings = filterEvenLengthStrings(friendsNames);
  console.log(evenLengthStrings);
  