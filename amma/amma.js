document.addEventListener("DOMContentLoaded", () => {

  const toast = document.getElementById("toast");

  // Set message
  toast.innerText = "Welcome to Mother's Page 👋";

  // Show toast (slide down)
  setTimeout(() => {
    toast.style.top = "20px";
  }, 100);

  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.style.top = "-100px";
  }, 3000);

});