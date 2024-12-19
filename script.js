const algorithms = [
  {
    name: "Fizz Buzz",
    path: "/fizzbuzz/index.html"
  },
  {
    name: "Fibonacci",
    path: "/fibonacci/index.html"
  },
  {
    name: "Prime Number",
    path: "/prime-number/index.html"
  },
]

document.getElementById("algorithms_list").innerHTML = `
  ${algorithms.map((algorithm, i) => `
    <li>${i + 1}.
      <a href="./algorithms${algorithm.path}" class="text-blue-700 transition-colors hover:text-blue-600">${algorithm.name}</a>
    </li>
  `).join(" ")}
`