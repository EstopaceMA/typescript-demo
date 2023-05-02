type ExtendedNewType = {
  name: string;
};

type User = {
  name: string;
  age?: number;
};

//NewType must contain atleast the attribute "name"
const myFunc = <NewType extends ExtendedNewType>(
  x: NewType,
  y: NewType
): string => {
  return `${x.name} and ${y.name}`;
};

myFunc<User>({ name: "Mark" }, { name: "Kath" });
