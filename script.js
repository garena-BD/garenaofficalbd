 // Animating the announcement message
setInterval(function() {
  const message = document.getElementById("message");
  message.style.display = "none";
  setTimeout(function() {
    message.style.display = "block";
  }, 1000);
}, 4000);
