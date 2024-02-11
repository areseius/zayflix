var faqbutton = document.getElementsByClassName("faq-button");
var langbuttons = document.getElementsByClassName("lang-button");

for (let i = 0; i < faqbutton.length; i++) {
  faqbutton[i].addEventListener("click", (e) => {
    faqbutton[i].classList.toggle("active");

    var panel = faqbutton[i].nextElementSibling;

    if (panel.style.display === "block") panel.style.display = "none";
    else panel.style.display = "block";
  });
}

for (let i = 0; i < langbuttons.length; i++) {
  langbuttons[i].addEventListener("click", (e) => {
    var content = langbuttons[i].nextElementSibling;
    if (content.style.display === "none") content.style.display = "block";
    else content.style.display = "none";
  });
}
