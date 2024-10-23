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
