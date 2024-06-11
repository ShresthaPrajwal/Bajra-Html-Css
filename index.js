
console.log("Hello from index.js");


var navbar = document.querySelectorAll(".navbar a");
navbar.forEach(function (link) {
  link.addEventListener("click", function (event) {
    console.log("clicked");
    if (event.target.tagName === "A") {
      var iframe = document.querySelector("iframe");
      iframe.src = event.target.href;
      event.preventDefault();
    }
  });
});
