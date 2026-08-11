// ===============================
// MOBILE MENU
// ===============================

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

if (menu && navLinks) {

    menu.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menu.querySelector("i");

        if (icon.classList.contains("fa-bars")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}

// ===============================
// CLOSE MENU
// ===============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menu.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ===============================
// STICKY HEADER
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.padding = "0px";
        header.style.boxShadow = "0 12px 30px rgba(0,0,0,.12)";
        header.style.background = "rgba(255,255,255,.96)";

    } else {

        header.style.boxShadow = "0 5px 25px rgba(0,0,0,.05)";
        header.style.background = "rgba(255,255,255,.92)";

    }

});


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===============================
// BACK TO TOP
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(

".service-card,.doctor-card,.medicine-card,.testimonial-card,.info-card,.faq-item,.about-grid,.stats-grid,.contact-grid"

);

function reveal(){

    revealElements.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        const windowHeight=window.innerHeight;

        if(top<windowHeight-100){

            item.style.opacity="1";
            item.style.transform="translateY(0)";
        }

    });

}

revealElements.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(40px)";
    item.style.transition=".8s ease";
});

window.addEventListener("scroll",reveal);

reveal();

// ======================================
// MEDICINE SEARCH
// ======================================

const searchInput = document.getElementById("medicineSearch");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value=searchInput.value.toLowerCase();

const cards=document.querySelectorAll(".medicine-card");

cards.forEach(card=>{

const text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"block":"none";

});

});

}

// ======================================
// MEDICINE FILTER
// ======================================

const filterBtns=document.querySelectorAll(".filter-btn");

if(filterBtns.length){

filterBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

filterBtns.forEach(item=>item.classList.remove("active"));

btn.classList.add("active");

const category=btn.dataset.filter;

document.querySelectorAll(".medicine-card").forEach(card=>{

const badge=card.querySelector(".badge");

if(!badge)return;

const text=badge.textContent.trim();

if(category==="all"||text===category){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

});

}

// ======================================
// DOCTOR AUTO SELECT
// ======================================

const department=document.getElementById("department");

const doctor=document.getElementById("doctor");

if(department && doctor){

const doctors={

"Cardiology":"Dr. Sarah Wilson",

"Neurology":"Dr. James Smith",

"Dermatology":"Dr. Emily Brown",

"Orthopedics":"Dr. Rajesh Kumar",

"Pediatrics":"Dr. Priya Sharma",

"ENT":"Dr. Ahmed Khan",

"General Medicine":"Dr. Michael Lee",

"Dental":"Dr. Arjun Reddy"

};

department.addEventListener("change",()=>{

doctor.value=doctors[department.value]||"";

});

}

// ======================================
// CARD EFFECT
// ======================================

document.querySelectorAll(

".doctor-card,.service-card,.medicine-card"

).forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX/20;

const y=e.offsetY/20;

card.style.transform=`rotateX(${y}deg) rotateY(${x}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotate(0deg)";

});

});

// ======================================
// MIN DATE
// ======================================

const date=document.querySelector('input[type="date"]');

if(date){

const today=new Date().toISOString().split("T")[0];

date.min=today;

}


// ======================================
// FAQ
// ======================================

const faqs=document.querySelectorAll(".faq-item");

faqs.forEach(item=>{

const answer=item.querySelector("p");

const title=item.querySelector("h3");

if(answer){

answer.style.display="none";

}

title.addEventListener("click",()=>{

const open=answer.style.display==="block";

faqs.forEach(f=>{

const p=f.querySelector("p");

const icon=f.querySelector("i");

if(p)p.style.display="none";

if(icon){

icon.classList.remove("fa-minus");

icon.classList.add("fa-plus");

}

});

if(!open){

answer.style.display="block";

const icon=item.querySelector("i");

icon.classList.remove("fa-plus");

icon.classList.add("fa-minus");

}

});

});


// ======================================
// APPOINTMENT FORM
// ======================================

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const patientName = appointmentForm.querySelector('input[type="text"]').value.trim();

        if (patientName === "") {
            alert("Please enter your name.");
            return;
        }

        alert(
`🎉 Appointment Booked Successfully!

Patient: ${patientName}

Our team will contact you shortly for confirmation.

Thank you for choosing HealthCare Plus.`
        );

        appointmentForm.reset();

    });

}

// ======================================
// COUNTER ANIMATION
// ======================================

const counters = document.querySelectorAll(".stats-grid h2");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const top = stats.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const targetText = counter.innerText;

            const target = parseInt(targetText.replace(/\D/g, ""));

            const suffix = targetText.replace(/[0-9]/g, "");

            let count = 0;

            const speed = Math.max(10, Math.floor(target / 100));

            const update = () => {

                if (count < target) {

                    count += speed;

                    if (count > target) count = target;

                    counter.innerText = count + suffix;

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + suffix;

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll", startCounters);

startCounters();


// ======================================
// CONTACT FORM
// ======================================

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("✅ Thank you! Your message has been sent successfully.");

        contactForm.reset();

    });

}


// ======================================
// PAGE LOADER
// ======================================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .6s";

        document.body.style.opacity = "1";

    }, 100);

});


// ======================================
// BUTTON RIPPLE
// ======================================

document.querySelectorAll(".btn,.btn-small").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const size = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = size + "px";
        circle.style.height = size + "px";

        circle.style.left = e.offsetX - size / 2 + "px";
        circle.style.top = e.offsetY - size / 2 + "px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});


// ======================================

console.log("%cHealthCare Plus Website Loaded Successfully 🚀",
"color:#0f6cbd;font-size:18px;font-weight:bold;");