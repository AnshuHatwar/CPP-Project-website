// script.js

// Hamburger menu toggle
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('show');
});

// Tab switcher
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

function clearTabs() {
  tabContents.forEach(tab => tab.classList.remove('active'));
}

function closeMenu() {
  document.getElementById('navLinks').classList.remove('show');
}

tabLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const tabId = link.getAttribute('data-tab');
    clearTabs();
    const activeTab = document.getElementById(tabId);
    if (activeTab) activeTab.classList.add('active');
    closeMenu();
  });
});

// Accordion behavior
const accordions = document.querySelectorAll(".accordion");
accordions.forEach(acc => {
  acc.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});

// Feedback Form Validation (if added)
const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const parent = document.getElementById('parentName').value.trim();
    const child = document.getElementById('childName').value.trim();
    const feedback = document.getElementById('feedbackMsg').value.trim();

    if (parent === '' || child === '' || feedback === '') {
      alert('Please fill in all fields.');
      return;
    }

    alert('Thank you for your feedback!');
    this.reset();
  });
}
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide-img");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2500); // Change image every 2.5 seconds
}