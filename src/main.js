const buttonNav = document.getElementsByClassName("btn-nav");
const bg_section1 = document.getElementById("bg-1");
const service_section = document.getElementById("services-area");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const contact_section = document.getElementById("section4");
const sections = [section1, section2, section3, contact_section];
const buttonBar = document.getElementById("button-bar");
const navBar = document.getElementsByTagName('nav')[0];

for (let i = 0; i < buttonNav.length; i++) {
  const button = buttonNav[i];
  button.addEventListener("click", (e) => {
    button.firstElementChild.click();
  });
}

buttonBar.addEventListener("click", (e) => {
  if (navBar.className == 'show') {
    navBar.className = ''
  } else {
    navBar.className = 'show'
  }
  console.log(navBar.className);
})

window.addEventListener("scroll", () => {
  let { scrollTop, clientHeight } = document.documentElement;
  let boxParentBg2 = service_section.getBoundingClientRect();
  let boxParentBg4 = contact_section.getBoundingClientRect();
  let middleScreen = scrollTop + clientHeight / 2;

  sections.forEach((section, id) => {
    let bbox = section.getBoundingClientRect();
    let top = bbox.top + scrollTop;
    let bottom = bbox.bottom + scrollTop;
    if (top < middleScreen && middleScreen < bottom) {
      buttonNav[id].className = "btn-nav current";
    } else {
      buttonNav[id].className = "btn-nav";
    }
  });

  bg_section1.style.top = scrollTop * 0.7 + "px";
  service_section.style.backgroundPositionY =
    (boxParentBg2.y - boxParentBg2.height * 2) * 0.2 + "px";
  contact_section.style.backgroundPositionY =
    (boxParentBg4.y - boxParentBg4.height * 2) * 0.2 + "px";
});
