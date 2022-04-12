 const menuToggle = document.querySelectorAll("[data-ham-btn]");
 const sidebar = document.getElementsByClassName("sidebar")[0];

menuToggle.forEach(toggle =>{
  toggle.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
  });
});
