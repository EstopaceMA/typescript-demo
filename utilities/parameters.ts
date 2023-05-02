const Parameters = () => {
  /**
   *
   */

  const myFunction = (a: string, b: string) => {
    return a + b;
  };

  type myType = Parameters<typeof myFunction>;

  //This will not work
  let sample: myType = ["hello"];

  let myArray: myType = ["hello ", "world"];

  myFunction(...myArray);
  //output: "hello world"
};
