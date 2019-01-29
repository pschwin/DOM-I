const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//Update CTA Image
const ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent['cta']['img-src'])

//Update middle content image
let img1 = document.getElementById("middle-img");
img1.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


//Update Nav
let nav1 = document.querySelector("header nav a:nth-child(1)");
nav1.textContent += "Services";

nav1.style.color = "green";


let nav2 = document.querySelector("header nav a:nth-child(2)");
nav2.textContent += siteContent['nav']['nav-item-2'];

nav2.style.color = "green";

let nav3 = document.querySelector("header nav a:nth-child(3)");
nav3.textContent += siteContent['nav']['nav-item-3'];

nav3.style.color = "green";

let nav4 = document.querySelector("header nav a:nth-child(4)");
nav4.textContent += siteContent['nav']['nav-item-4'];

nav4.style.color = "green";

let nav5 = document.querySelector("header nav a:nth-child(5)");
nav5.textContent += siteContent['nav']['nav-item-5'];

nav5.style.color = "green";

let nav6 = document.querySelector("header nav a:nth-child(6)");
nav6.textContent += siteContent['nav']['nav-item-6'];

nav6.style.color = "green";

// //NEW Navigation

//Parent
const Nav = document.querySelector('header nav');

//New Nav

let newNav = document.createElement('a');
newNav.textContent = 'new 1';
Nav.appendChild(newNav);


//CTA Update
let ctah1 = document.querySelector(".cta-text h1");
ctah1.textContent += siteContent['cta']['h1'];

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent += siteContent['cta']['button'];

//Main Content

//Features
let featuresh4 = document.querySelector(".top-content .text-content h4");
featuresh4.textContent += siteContent['main-content']['features-h4'];

let featuresContent = document.querySelector(".top-content .text-content p");
featuresContent.textContent += siteContent['main-content']['features-content'];

//About
let abouth4 = document.querySelectorAll(".top-content .text-content h4")[1];
abouth4.textContent += siteContent['main-content']['about-h4'];

let aboutContent = document.querySelectorAll(".main-content .top-content .text-content p")[1];
aboutContent.textContent += siteContent['main-content']['about-content'];

//Services

let servicesh4 = document.querySelector('.main-content .bottom-content .text-content h4');
servicesh4.textContent += siteContent['main-content']['services-h4'];

let servicesp = document.querySelector('.main-content .bottom-content .text-content p');
servicesp.textContent += siteContent['main-content']['services-content'];

//Product 

let producth4 = document.querySelectorAll('.main-content .bottom-content .text-content h4')[1];
producth4.textContent += siteContent['main-content']['product-h4'];

let productp = document.querySelectorAll('.main-content .bottom-content .text-content p')[1];
productp.textContent += siteContent['main-content']['product-content'];

//Vision

let visionh4 = document.querySelectorAll('.main-content .bottom-content .text-content h4')[2];
visionh4.textContent += siteContent['main-content']['vision-h4'];

let visionp = document.querySelectorAll('.main-content .bottom-content .text-content p')[2];
visionp.textContent += siteContent["main-content"]["vision-content"];

//Contact

let contacth4 = document.querySelector('.contact h4');
contacth4.textContent += siteContent['contact']["contact-h4"];

let contactp1 = document.querySelector('.contact p');
contactp1.textContent += siteContent['contact']['address'];

let contactp2 = document.querySelectorAll('.contact p')[1];
contactp2.textContent += siteContent['contact']['phone'];

let contactp3 = document.querySelectorAll('.contact p')[2];
contactp3.textContent += siteContent['contact']['email'];

//Footer

let footer = document.querySelector('footer p');
footer.textContent += siteContent['footer']['copyright']

//Use appendChild and prepend




