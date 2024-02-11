var faqbutton = document.getElementsByClassName("faq-button");

for (let i = 0; i < faqbutton.length; i++) {
  faqbutton[i].addEventListener("click", (e) => {
    faqbutton[i].classList.toggle("active");

    var panel = faqbutton[i].nextElementSibling;

    if (panel.style.display === "block") panel.style.display = "none";
    else panel.style.display = "block";
  });
}