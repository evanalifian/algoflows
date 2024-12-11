export function startCounting(nNum, action) {
  let i = 1;

  const startCounting = setInterval(() => {
    if (i <= nNum) {
      if (i % 3 == 0 && i % 5 == 0) {
        action("Fizz Buzz")
        i++
      } else if (i % 3 == 0) {
        action("Fizz")
        i++
      } else if (i % 5 == 0) {
        action("Buzz")
        i++
      } else {
        action(i)
        i++
      }
    } else {
      clearInterval(startCounting);
    }
  }, 100);
}
