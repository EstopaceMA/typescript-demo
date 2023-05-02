const myFunction = <NewType>(x: NewType[], y: NewType[]): number => {
  return x.length + y.length;
};

myFunction<number>([5, 6, 7], [10, 9, 8]);
