document.addEventListener("scroll", function() {
  let position = window.scrollY; // Example: Get current scroll position
  let total = document.documentElement.scrollHeight - window.innerHeight;

  let scrollLoader = document.querySelector(".scroll-loader");
  scrollLoader.style.width = (position/total)*100 +"%";
});

