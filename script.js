
//  حركة الماوس لدائره  
document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".custom-cursor");

  if (cursor) {
    // حركة تتبع الماوس
    window.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    // تكبير الدائرة عند الوقوف على الأزرار أو الروابط أو النصوص التفاعلية
    const interactiveElements = document.querySelectorAll("a, button, .feature-item, .ticker__item, input, textarea");

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-hover");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-hover");
      });
    });
  }
});
//Navbar
// hide topbar and show navbar solid
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");

  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("scrolled"); // بيخفي التوب بار ويحول النافبار لـ Solid
      } else {
        header.classList.remove("scrolled"); // بيرجع التوب بار والشفافية زي ما كانوا فوق خالص
      }
    });
  }
});
// تأثير الجذب (Magnetic) ببطء وسلاسة
const magneticBtns = document.querySelectorAll(".btn--primary");
magneticBtns.forEach(btn => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    
    // قللنا الرقم من 0.3 إلى 0.15 لتصبح الحركة هادئة وليست سريعة
    btn.style.transform = `translate(${x * 0.10}px, ${y * 0.10}px)`;
    // زيادة زمن الـ transition لتكون الحركة ناعمة أثناء المتابعة
    btn.style.transition = "transform 0.3s ease-out";
  });

  btn.addEventListener("mouseleave", () => {
    // إرجاع الزر مكانه ببطء وسلاسة شديدة
    btn.style.transform = "translate(0px, 0px)";
    btn.style.transition = "transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
  });
});
//Home
// 2. سلايدر الخلفيات الأربعة مع تفاعل الشرط الجانبية (Indicators)
const heroSection = document.getElementById("home");
const indicators = document.querySelectorAll("#heroIndicators span");
const backgroundImages = [
    'url("images/New folder/palace-bukayriyah.jpg")',
    'url("images/New folder/almasa.jpg")',
    'url("images/New folder/qusaibi-1.jpg")',
    'url("images/New folder/g01.jpg")',
  ];
let currentIndex = 0;
function updateHero(index) {
    currentIndex = index;
    if (heroSection) {
      heroSection.style.backgroundImage = `linear-gradient(rgba(17, 24, 32, 0.6), rgba(17, 24, 32, 0.6)), ${backgroundImages[currentIndex]}`;
    }
    // تحديث شكل الشرط في الجنب
    indicators.forEach((ind, i) => {
      if (i === currentIndex) {
        ind.classList.add("active");
      } else {
        ind.classList.remove("active");
      }
    });
  }
function nextBackground() {
    let nextIndex = (currentIndex + 1) % backgroundImages.length;
    updateHero(nextIndex);
  }
  // تغيير الخلفية تلقائياً كل 1.5 ثواني
let slideInterval = setInterval(nextBackground, 1500);
  // إمكانية الضغط على الشرطة نفسها لتغيير الصورة يدوياً
  indicators.forEach((ind, i) =>
     {
    ind.addEventListener("click", function () {
      updateHero(i);
      clearInterval(slideInterval); // إعادة ضبط العداد عند الضغط
      slideInterval = setInterval(nextBackground, 1500);
    });
  });

//About

document.addEventListener("DOMContentLoaded", () => {
  const counter = document.querySelector(".floating-badge .counter");
  if (!counter) return;

  const target = +counter.getAttribute("data-target");
  let count = 0;
  
  // سرعة العد التصاعدي
  const speed = target / 40; 

  const updateCount = () => {
    count += speed;
    if (count < target) {
      counter.innerText = Math.ceil(count);
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = target; // يثبت عند الرقم النهائي 150 بدقة
    }
  };

  updateCount();
});

//acoustic
// =====================================================
// =====================================================
// ACOUSTIC IMAGE SLIDER
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    const track = document.getElementById("sliderTrack");

    if (!track) return;

    const slides = Array.from(
        track.querySelectorAll(".acoustic-slider-slide")
    );

    const nextBtn =
        document.getElementById("acousticNextBtn");

    const prevBtn =
        document.getElementById("acousticPrevBtn");

    const counter =
        document.getElementById("sliderCounter");

    if (!slides.length) return;


    let currentIndex = 0;

    let autoPlayTimer;


    // ==========================================
    // تحديث السلايدر
    // ==========================================

    function updateSlider() {

        const total = slides.length;

        const prevIndex =
            (currentIndex - 1 + total) % total;

        const nextIndex =
            (currentIndex + 1) % total;


        slides.forEach(function (slide) {

            slide.classList.remove(
                "acoustic-active",
                "acoustic-prev",
                "acoustic-next"
            );

        });


        // الصورة الرئيسية
        slides[currentIndex]
            .classList.add("acoustic-active");


        // الصورة الشمال
        slides[prevIndex]
            .classList.add("acoustic-prev");


        // الصورة اليمين
        slides[nextIndex]
            .classList.add("acoustic-next");


        // العداد
        if (counter) {

            counter.textContent =
                `${currentIndex + 1} / ${total}`;

        }

    }


    // ==========================================
    // Next
    // ==========================================

    function nextSlide() {

        currentIndex =
            (currentIndex + 1) % slides.length;

        updateSlider();

    }


    // ==========================================
    // Previous
    // ==========================================

    function prevSlide() {

        currentIndex =
            (currentIndex - 1 + slides.length)
            % slides.length;

        updateSlider();

    }


    // ==========================================
    // Auto Play
    // كل 3 ثواني
    // ==========================================

    function startAutoPlay() {

        autoPlayTimer = setInterval(function () {

            nextSlide();

        }, 3000);

    }


    // ==========================================
    // Reset Auto Play
    // لو المستخدم ضغط سهم
    // ==========================================

    function restartAutoPlay() {

        clearInterval(autoPlayTimer);

        startAutoPlay();

    }


    // ==========================================
    // Buttons
    // ==========================================

    if (nextBtn) {

        nextBtn.addEventListener("click", function () {

            nextSlide();

            restartAutoPlay();

        });

    }


    if (prevBtn) {

        prevBtn.addEventListener("click", function () {

            prevSlide();

            restartAutoPlay();

        });

    }


    // ==========================================
    // البداية
    // ==========================================

    updateSlider();

    startAutoPlay();

});

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav__menu a');

  // فتح وإغلاق القايمة بالزرار
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
    });
  }

  // إغلاق القايمة عند الضغط على أي رابط جواها
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  });

  // إغلاق القايمة لو المستخدم ضغط في أي مكان تاني بره القايمة
  document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active')) {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    }
  });
});












