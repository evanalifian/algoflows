export function startCounting(nNum, action) {
  let i = 1;
  let F0 = 0;
  let F1 = 1;

  action(F0);
  action(F1);

  const startCounting = setInterval(() => {
    if (i <= nNum - 2) {
      const Fn = F1 + F0;
      action(Fn);
      F0 = F1;
      F1 = Fn;
      i++
    } else {
      clearInterval(startCounting);
    }
  }, 100);
}
