function vibrate(pattern: number | number[]) {
  try {
    navigator.vibrate?.(pattern);
  } catch {
    /*unsupported device: ignored */
  }
}

export const haptics = {
  /**Generic touch (buttons, navigation). */
  tap: () => vibrate(10),
  /**Selection of an option. */
  select: () => vibrate(12),
  /**Correct answer. */
  success: () => vibrate(18),
  /**Incorrect answer: double pulse more marked. */
  error: () => vibrate([14, 40, 22]),
};
