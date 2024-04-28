document.addEventListener('DOMContentLoaded', function () {
  var modeSwitch = document.querySelector('.mode-switch');

  modeSwitch.addEventListener('click', function () {                     document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
  });
  
  var listView = document.querySelector('.list-view');
  var gridView = document.querySelector('.grid-view');
  var projectsList = document.querySelector('.project-boxes');
  
  listView.addEventListener('click', function () {
    gridView.classList.remove('active');
    listView.classList.add('active');
    projectsList.classList.remove('jsGridView');
    projectsList.classList.add('jsListView');
  });
  
  gridView.addEventListener('click', function () {
    gridView.classList.add('active');
    listView.classList.remove('active');
    projectsList.classList.remove('jsListView');
    projectsList.classList.add('jsGridView');
  });
  
  document.querySelector('.messages-btn').addEventListener('click', function () {
    document.querySelector('.messages-section').classList.add('show');
  });
  
  document.querySelector('.messages-close').addEventListener('click', function() {
    document.querySelector('.messages-section').classList.remove('show');
  });
});


const sidemenu=document.querySelector('aside')
const menuBtn=document.querySelector('#menu_bar')
const closeBtn=document.querySelector('#close_btn')

const themeToggler=document.querySelector('.theme-toggler')
menuBtn.addEventListener('click',()=>{
  sidemenu.style.display="block"
})
closeBtn.addEventListener('click',()=>{
  sidemenu.style.display="none"
})
themeToggler.addEventListener('click',()=>{
  document.body.classList.toggle('dark-theme-variables')
  themeToggler.querySelector('span:nth-child(i)').classList.toggle('active')
  themeToggler.querySelector('span:nth-child(i)').classList.toggle('active')

})


document.addEventListener("DOMContentLoaded", function() {
  var aboutUsLink = document.getElementById("about_us_link");
  var aboutUsContent = document.querySelector(".about-us-content");

  aboutUsLink.addEventListener("click", function(event) {
    event.preventDefault();
    aboutUsContent.style.display = (aboutUsContent.style.display === "none") ? "block" : "none";
  });
});
