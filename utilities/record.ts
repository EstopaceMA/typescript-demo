const Record = () => {
  /**
   * Record<Keys, Type>, makes record with keys and its types
   */
  interface CatInfo {
    age: number;
    bread: string;
  }

  type CatName = "miffy" | "borris" | "mordred";

  const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, bread: "Persian" },
    borris: { age: 5, bread: "Maine Coon" },
    mordred: { age: 16, bread: "British Shorthair" },
  };

  cats.borris;
  //{ age:5, breed: "Maine Coon" }
};
