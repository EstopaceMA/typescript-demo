//Readonly, makes all types readonly

const Readonly = () => {
  interface Todo {
    title: string;
  }

  const todo: Readonly<Todo> = {
    title: "Delete inactive users",
  };

  todo.title = "Hello";
};
