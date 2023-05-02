const Exclude = () => {
  /**
   * Exclude
   */

  type myUnionType = "🍇" | "🍎" | "🫐" | "🍋";

  // This works!
  const lemon: myUnionType = "🍋";

  // This will not work since lemon is excluded from the type
  const noLemonsPlease: Exclude<myUnionType, "🍋"> = "🍋";
};
