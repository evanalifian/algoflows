export function startCounting(nNum, action) {
  let count = 0

  const startCounting = setInterval(() => {
    if (count !== 1) {
        if (nNum > 1) {
          for (let i = 2; i <= nNum; i++) {
            if (nNum % i === 0 && nNum % 1 === 0) {
              count += 1
            }
          }
          if (count === 1) {
            action(`${nNum} is prime number.`)
          } else {
            action(`${nNum} is composite number.`)
            clearInterval(startCounting);
          }
        } else {
          action("Bilangan prima harus lebih besar dari 1.")
          clearInterval(startCounting);
        }
    } else {
      clearInterval(startCounting);
    }
  }, 100);
}
