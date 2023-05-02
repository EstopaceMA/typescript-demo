const Extract = () => {
  /**
   * Extract
   */
  type myUnionType = "🥒" | "🥔" | "🌶" | "🌽";

  //This works!
  const myFirstVariable: Extract<myUnionType, "🥒" | "🥔"> = "🥒";

  //This will not work since bell pepper is not extracted from the type
  const mySecondVariable: Extract<myUnionType, "🥒" | "🥔"> = "🌶";
};
