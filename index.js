const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  // map in map -- fancy
  // return tutorials.map((str) =>
  //   str
  //     .split(" ")
  //     .map((word) => word[0].toUpperCase() + word.slice(1))
  //     .join(" ")
  // );

  // for loop in map -- not as fancy
  // option 1 reassign origional arr in loop
  // option 2 push capital words into newArr
  return tutorials.map((str) => {
    const arr = str.split(" ");
    // let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let [first, ...rest] = arr[i].split("");
      arr[i] = first.toUpperCase() + rest.join("");
      // let capitalized = first.toUpperCase() + rest.join("");
      // newArr.push(capitalized);
    }
    return arr.join(" ");
    // return newArr.join(" ");
  });
};
