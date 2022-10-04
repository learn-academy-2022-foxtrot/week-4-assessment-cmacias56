// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("mixArray", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
      expect(mixArray(colors1)).toEqual(expect.arrayContaining["yellow", "blue", "pink", "green"])
      const colors1 = ["purple", "blue", "green", "yellow", "pink"]
      // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
      expect(mixArray(colors2)).toEqual(expect.arrayContaining["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])
      const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
      // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    })
  })
  
  
  // ReferenceError: mixedArray is not defined
  
  
  // b) Create the function that makes the test pass.
  // Create a function named mixArray
  // 
  // utilize newly learned and aquired method.. .slice! (thank you google)
  // console log to check if it's working through node 
  // yarn jest to test my pass or fail
  
  const mixedArray = () => {
    let mixedArray = colors1.sort(() => Math.random() - 0.5)
    return colors1.slice(1, 5)
  }
  console.log(mixArray(colors1))
  
  // --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.
  
  // a) Create a test with expect statements for each of the variables provided.
  
  describe("votes", () => {
    it("takes in an object that contains up votes and down votes and returns the net total of votes.", () => {
      expect(votes(votes1)).toEqual(11)
      const votes1 = { upVotes: 13, downVotes: 2 }
      // Expected output: 11
      expect(votes(votes2)).toEqual(-31)
      const votes2 = { upVotes: 2, downVotes: 33 }
      // Expected output: -31
    })
  })
  
  
  // ReferenceError: votes is not defined
  
  
  // b) Create the function that makes the test pass.
  // Create a function named votes
  //create a conditional statement that counts the votes and then totals them together
  // create a variable for counter 
  // run yarn jest
  
  const Votes = (object) => {
    return object.upVotes - object.downVotes
  }
  

  // --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
  
  // a) Create a test with an expect statement using the variables provided.
  
  describe("comboArray", () => {
    it("takes in an object that contains up votes and down votes and returns the net total of votes.", () => {
      expect(comboArray(dataArray1)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
      const dataArray1 = ["array", "object", "number", "string", "Boolean"]
      expect(comboArray(dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
      const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
      // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    })
  })
  

  //  ReferenceError: comboArray is not defined
  
  
  // b) Create the function that makes the test pass.
  // Create a function "comboArray"
  // combine the 2 arrays utilizing a joining method such as .concat
  // iterate through the array and return no duplicate values
  // console log to check work
  
  const comboArray = () => {
    const joinedArray = dataArray1.concat(dataArray2)
    return joinedArray
  }
  console.log(joinedArray)
