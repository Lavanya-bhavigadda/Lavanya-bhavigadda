const typing = document.getElementById("typing");
const words = ["Aspiring Software Professional", "AI & Cybersecurity Learner", "CSE Student", "Technology Enthusiast"];
let wordIndex = 0, charIndex = 0, deleting = false;

function typeEffect(){
  const word = words[wordIndex];
  typing.textContent = deleting ? word.substring(0, charIndex--) : word.substring(0, charIndex++);
  let speed = deleting ? 45 : 85;
  if(!deleting && charIndex > word.length){
    deleting = true; speed = 1300;
  } else if(deleting && charIndex < 0){
    deleting = false; wordIndex = (wordIndex + 1) % words.length; charIndex = 0; speed = 400;
  }
  setTimeout(typeEffect, speed);
}
typeEffect();

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click",()=>navMenu.classList.toggle("open"));
document.querySelectorAll("#navMenu a").forEach(a=>a.addEventListener("click",()=>navMenu.classList.remove("open")));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("mousemove",(e)=>{
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

document.querySelectorAll(".skill-card,.stat-card,.experience-card,.certificate").forEach(card=>{
  card.addEventListener("mousemove",(e)=>{
    const r=card.getBoundingClientRect();
    const x=((e.clientX-r.left)/r.width-.5)*5;
    const y=((e.clientY-r.top)/r.height-.5)*-5;
    card.style.transform=`translateY(-4px) rotateX(${y}deg) rotateY(${x}deg)`;
  });
  card.addEventListener("mouseleave",()=>card.style.transform="");
});

document.getElementById("year").textContent=new Date().getFullYear();
