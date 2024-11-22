//navbar function
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.links a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});




// JavaScript for closing menu on link click
const menuToggle = document.getElementById('menu-toggle');
const links = document.querySelectorAll('.links a');
links.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.checked = false; // Close the menu
  });
});




//banner image slide
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');
let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}



// Automatically switch images every 3 seconds
let refreshInterval = setInterval(()=> {next.click()}, 3000);
// Function to move the slider and update the dots
function reloadSlider(){
    // Move the slider to the active item
    slider.style.left = -items[active].offsetLeft + 'px';
    
    // Update the active dot
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');
    // Restart the auto-scroll interval
    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);
}




// Add click event for dots to manually switch to a specific image
dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
        active = key;
        reloadSlider();
    })
})


// Recalculate position when window is resized
window.onresize = function(event) {
    reloadSlider();
};




//scroll animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  


  window.addEventListener("scroll", reveal);
// Initialize Isotope with "work" as the default filter
var $galleryContainer = $('.gallery').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows',
    filter: '.work'  // Show "My Work" images by default
});
// Handle button clicks
$('.button-group .button').on('click', function(){
    $('.button-group .button').removeClass('active');
    $(this).addClass('active');
    var value = $(this).attr('data-filter');
    $galleryContainer.isotope({
        filter: value
    });
});



// Smoth scroll
;(function($) {
    function g(a, e, d) {
        var h = e.hash.slice(1),
            f = document.getElementById(h) || document.getElementsByName(h)[0];
        if (f) {
            a && a.preventDefault();
            var c = $(d.target);
            if (!(d.lock && c.is(":animated") || d.onBefore && !1 === d.onBefore(a, f, c))) {
                if (d.stop) c.stop(true);
                $('html, body').animate({
                    scrollTop: $(f).offset().top
                }, d.duration);
                if (d.hash) {
                    var a = f.id == h ? "id" : "name",
                        g = $("<a> </a>").attr(a, h).css({
                            position: "absolute",
                            top: $(window).scrollTop(),
                            left: $(window).scrollLeft()
                        });
                    f[a] = "";
                    $("body").prepend(g);
                    location = e.hash;
                    g.remove();
                    f[a] = h;
                }
                c.trigger("notify.serialScroll", [f]);
            }
        }
    }
    var i = location.href.replace(/#.*/, ""),
        c = $.localScroll = function(a) {
            $("body").localScroll(a);
        };
    c.defaults = {
        duration: 1000,
        axis: "y",
        event: "click",
        stop: true,
        target: window,
        reset: true
    };
    c.hash = function(a) {
        if (location.hash) {
            a = $.extend({}, c.defaults, a);
            a.hash = false;
            if (a.reset) {
                var e = a.duration;
                delete a.duration;
                $(a.target).scrollTo(0, a);
                a.duration = e;
            }
            g(0, location, a);
        }
    };
    $.fn.localScroll = function(a) {
        function e() {
            return !!this.href && !!this.hash && this.href.replace(this.hash, "") == i && (!a.filter || $(this).is(a.filter));
        }
        a = $.extend({}, c.defaults, a);
        return a.lazy ? this.bind(a.event, function(d) {
            var c = $([d.target, d.target.parentNode]).filter(e)[0];
            c && g(d, c, a);
        }) : this.find("a,area").filter(e).bind(a.event, function(b) {
            g(b, this, a);
        }).end().end();
    };
})(jQuery);
// Initialize all .smoothScroll links
jQuery(function($) {
    $.localScroll({ filter: '.smoothScroll' });
});





// Language translation data
const translations = {
    en: {
        navHome: "Home",
        navAbout: "About",
        navServices: "Services",
        navGallery: "Gallery",
        navContact: "Contact",
        bannerTexts: [
            "Welcome to KERAMIKA",
            "Latest Machinery",
            "Explore Our Work"
        ],
        aboutTitle: "About Us",
        aboutSubtitle: "KERAMIKA DO.O.O",
        aboutText: "Our company, founded in 2002, has undertaken a strong commitment to quality and innovation in the field of stone processing. With a specialized team and modern technology, we offer high standard products that meet the needs of our customers. We combine our passion for stone art with a commitment to excellent service, creating unique solutions for various projects.",
        serviceTitle: "Service",
        serviceDescription: "Our company offers professional services for the assembly of stairs, kitchens, and fireplaces, guaranteeing quality and precision in every project. We also specialize in the installation of various tiles, creating functional and aesthetic environments for any space. With our dedication to details and customer satisfaction, we ensure excellent results for every need.",
        contactLocation: "Location",
        contactPhone: "Phone",
        headtext: "We provide excellent <span>RESULTS</span> for every <span>NEED</span>",
        projectDescription: "Our company has also finalized projects throughout Europe, offering high quality and professionalism. Our most recent project includes work in Hallau, Switzerland, and Dresden, Germany. Also, we have finalized state projects in the two police stations in Serbia, in Vranje and Leskoc. There is also local work, which we engage in throughout the Presheva.",
    },
    sq: {
        navHome: "Ballina",
        navAbout: "Rreth Nesh",
        navServices: "Shërbimet",
        navGallery: "Galeria",
        navContact: "Kontakti",
        bannerTexts: [
            "Mirë se erdhët në KERAMIKA",
            "Makinat e Teknologjis së fundit",
            "Eksploroni Punën Tonë"
        ],
        aboutTitle: "Rreth Nesh",
        aboutSubtitle: "KERAMIKA DO.O.O",
        aboutText: "Kompania jonë, e themeluar në vitin 2002, ka marrë një angazhim të fortë për cilësinë dhe inovacionin në fushën e përpunimit të gurit. Me një ekip të specializuar dhe teknologji moderne, ne ofrojmë produkte me standarde të larta që përmbushin nevojat e klientëve tanë. Ne kombinojmë pasionin tonë për artin e gurit me një angazhim për shërbim të shkëlqyer, duke krijuar zgjidhje unike për projekte të ndryshme.",
        serviceTitle: "Shërbimi",
        serviceDescription: "Kompania jonë ofron shërbime profesionale për montimin e shkallëve, kuzhinave dhe kamineve, duke garantuar cilësi dhe saktësi në çdo projekt. Ne gjithashtu specializohemi në instalimin e pllakatave të ndryshme, duke krijuar mjedise funksionale dhe estetike për çdo hapësirë. Me përkushtimin tonë ndaj detajeve dhe kënaqësisë së klientëve, ne sigurojmë rezultate të shkëlqyera për çdo nevojë.",
        contactLocation: "Lokacioni",
        contactPhone: "Telefoni",
        headtext: "Ne sigurojmë rezultate të shkëlqyera <span>REZULTATE</span> për çdo <span>NEVOJË</span>",
        projectDescription: "Kompania jonë gjithashtu ka përfunduar projekte në të gjithë Evropën, duke ofruar cilësi të lartë dhe profesionalizëm. Projekti ynë më i fundit përfshin punë në Hallau, Zvicër, dhe Dresden, Gjermani. Gjithashtu, ne kemi përfunduar projekte shtetërore në dy stacione policie në Serbi, në Vranje dhe Leskoc. Ka gjithashtu punë lokale, në të cilat angazhohemi në të gjithë Preshevën.",
    },
    sr: {
        navHome: "Početna",
        navAbout: "O Nama",
        navServices: "Usluge",
        navGallery: "Galerija",
        navContact: "Kontakt",
        bannerTexts: [
            "Dobrodošli u KERAMIKU",
            "Najnovije Mašine",
            "Istražite Naš Rad"
        ],
        aboutTitle: "O Nama",
        aboutSubtitle: "KERAMIKA DO.O.O",
        aboutText: "Naša kompanija, osnovana 2002. godine, preuzela je snažnu obavezu prema kvalitetu i inovacijama u oblasti obrade kamena. Sa specijalizovanim timom i modernom tehnologijom, nudimo proizvode visokih standarda koji zadovoljavaju potrebe naših kupaca. Spajamo našu strast prema umetnosti kamena sa obavezom za odličnu uslugu, stvarajući jedinstvena rešenja za različite projekte.",
        serviceTitle: "Usluga",
        serviceDescription: "Naša kompanija nudi profesionalne usluge za montažu stepenica, kuhinja i kamina, garantujući kvalitet i preciznost u svakom projektu. Takođe se specijalizujemo za ugradnju različitih pločica, stvarajući funkcionalne i estetske prostore za svaku okolinu. Sa našom posvećenošću detaljima i zadovoljstvu kupaca, obezbeđujemo odlične rezultate za svaku potrebu.",
        contactLocation: "Lokacija",
        contactPhone: "Telefon",
        headtext: "Obezbeđujemo odlične <span>REZULTATE</span> za svaku <span>POTREBU</span>",
        projectDescription: "Naša kompanija je takođe završila projekte širom Evrope, nudeći visoki kvalitet i profesionalizam. Naš najnoviji projekat uključuje rad u Hallauu, Švajcarska, i Drezdenu, Nemačka. Takođe, završili smo državne projekte u dve policijske stanice u Srbiji, u Vranju i Leskovcu. Takođe ima lokalnog rada, kojim se bavimo širom Preševa.",
    }
};

// Function to update text based on selected language
function updateText(language) {
    document.querySelector('#nav-home').innerText = translations[language].navHome;
    document.querySelector('#nav-about').innerText = translations[language].navAbout;
    document.querySelector('#nav-services').innerText = translations[language].navServices;
    document.querySelector('#nav-gallery').innerText = translations[language].navGallery;
    document.querySelector('#nav-contact').innerText = translations[language].navContact;

    // Update banner texts
    const bannerTexts = translations[language].bannerTexts;
    const items = document.querySelectorAll('.slider .item .text');
    items.forEach((item, index) => {
        item.innerText = bannerTexts[index];
    });

    // Update about section
    document.querySelector('.about-us h2').innerText = translations[language].aboutTitle;
    document.querySelector('.about-us h5').innerText = translations[language].aboutSubtitle;
    document.querySelector('.about-us p').innerText = translations[language].aboutText;

    // Update services section
    document.querySelector('.services h2').innerText = translations[language].serviceTitle;
    document.querySelector('.services .description').innerText = translations[language].serviceDescription;

    // Update project description
    document.querySelector('#project-description').innerText = translations[language].projectDescription;

    // Update contact section
    document.querySelector('.contact-item:nth-child(1) h3').innerText = translations[language].contactLocation;
    document.querySelector('.contact-item:nth-child(2) h3').innerText = translations[language].contactPhone;
    
    // Update the header text
    document.querySelector('.headtxt').innerHTML = translations[language].headtext; // Use innerHTML for <span> tags
}

// Language switcher event
document.getElementById('language-select').addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    updateText(selectedLanguage);
});




// gallery image 

  // Get the lightbox elements
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox .close");

  // Open lightbox on image click
  document.querySelectorAll(".gallery .item img").forEach(img => {
      img.addEventListener("click", () => {
          lightbox.style.display = "flex";
          lightboxImg.src = img.src;
      });
  });

  // Close lightbox when 'x' is clicked
  closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
          lightbox.style.display = "none";
      }
  });