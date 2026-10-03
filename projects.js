document.addEventListener("DOMContentLoaded", function () {
  // 1. العناصر الأساسية للفلترة وزر عرض المزيد
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const loadMoreContainer = document.querySelector(".load-more-container");
  const extraProjects = document.querySelectorAll(".extra-project");

  // إخفاء المشاريع الإضافية افتراضياً عند تحميل الصفحة
  extraProjects.forEach((card) => {
    card.style.display = "none";
  });

  // نظام الفلترة للأزرار (مع إخفاء/إظهار زر عرض المزيد حسب القسم)
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");
      const isExpanded =
        loadMoreBtn && loadMoreBtn.getAttribute("data-expanded") === "true";

      // التحكم في ظهور زر "عرض المزيد": يظهر فقط في قسم "الكل" ويختفي في باقي الأقسام
      if (filterValue === "all") {
        if (loadMoreContainer) loadMoreContainer.style.display = "block";
      } else {
        if (loadMoreContainer) loadMoreContainer.style.display = "none";
      }

      // فلترة الكروت وعرض المطلوب
      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        const isExtra = card.classList.contains("extra-project");

        if (filterValue === "all" || category === filterValue) {
          if (filterValue !== "all" || !isExtra || isExpanded) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 2. زر عرض المزيد من الأعمال
  let isExpanded = false;
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", function () {
      isExpanded = !isExpanded;
      this.setAttribute("data-expanded", isExpanded ? "true" : "false");

      extraProjects.forEach((card) => {
        if (isExpanded) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

      if (isExpanded) {
        this.innerHTML = 'عرض أقل <i class="fas fa-minus"></i>';
      } else {
        this.innerHTML = 'عرض المزيد من الأعمال <i class="fas fa-plus"></i>';
      }
    });
  }

  // 3. مصفوفة الصور للمشاريع
  const projectGalleries = {
    masa: ["images/New folder/almasa.jpg"],
    gtc: [
      "images/New folder/qusaibi-1.jpg",
      "images/New folder/qusaibi-2.jpg",
      "images/New folder/qusaibi-4.jpg",
      "images/New folder/qusaibi-5.jpg",
      "images/New folder/qusaibi-2.jpg",
    ],
    ikea: ["images/New folder/ikea.jpg"],
    palace: ["images/New folder/palace-bukayriyah.jpg"],
    sadafco: ["images/New folder/3.jpg", "images/New folder/03.jpg"],
    offices: [
      "images/New folder/office-acoustic-1.jpg",
      "images/New folder/office-acoustic-2.jpg",
      "images/New folder/office-acoustic-3.jpg",
      "images/New folder/office-acoustic-poster.jpg",
    ],
    cinema: [
      "images/New folder/cinema-1.jpg",
      "images/New folder/cinema-2.jpg",
      "images/New folder/cinema-3.jpg",
      "images/New folder/cinema-poster.jpg",
    ],
    "home-cinema": [
      "images/New folder/home-cinema-1.jpg",
      "images/New folder/home-cinema-2.jpg",
      "images/New folder/home-cinema-3.jpg",
      "images/New folder/home-cinema-poster.jpg",
    ],
    rahma: ["images/New folder/rahma-1.jpg", "images/New folder/rahma-2.jpg"],
    villas: [
      "images/New folder/villas-1.jpg",
      "images/New folder/villas-2.jpg",
    ],
    college: [
      "images/New folder/aflaj-1.jpg",
      "images/New folder/aflaj-2.jpg",
      "images/New folder/aflaj-3.jpg",
      "images/New folder/aflaj-4.jpg",
    ],
    gypsum: [
      "images/New folder/gypsum-1.jpg",
      "images/New folder/gypsum-2.jpg",
      "images/New folder/gypsum-3.jpg",
      "images/New folder/gypsum-4.jpg",
      "images/New folder/gypsum-5.jpg",
    ],
    mowaten: [
      "images/New folder/mawten-1.jpg",
      "images/New folder/mawten-2.jpg",
    ],
    tamimi: ["images/New folder/tamimi.jpg"],
    suhyani: [
      "images/New folder/suhaibani-1.jpg",
      "images/New folder/suhaibani-2.jpg",
    ],
    institute: ["images/New folder/institute.jpg"],
    aldawaa: [
      "images/New folder/dawaa-1.jpg",
      "images/New folder/dawaa-2.jpg",
      "images/New folder/dawaa-3.jpg",
      "images/New folder/dawaa-4.jpg",
    ],
    safen: ["images/New folder/safen-1.jpg", "images/New folder/safen-2.jpg"],
    charity: [
      "images/New folder/charity-1.jpg",
      "images/New folder/charity-2.jpg",
    ],
    "hotel-unaizah": ["images/New folder/hotel-unaizah.jpg"],
    "mosque-buraydah": [
      "images/New folder/mosque-buraydah-1.jpg",
      "images/New folder/mosque-buraydah-2.jpg",
    ],
    golden: [
      "images/New folder/golden-1.jpg",
      "images/New folder/golden-2.jpg",
    ],
    mosque: ["images/New folder/mosque-unaizah.jpg"],
    hadi: ["images/New folder/hadi.jpg"],
    namariq: [
      "images/New folder/namariq-1.jpg",
      "images/New folder/namariq-2.jpg",
      "images/New folder/namariq-3.jpg",
    ],
    medical: ["images/New folder/medical.jpg"],
    "New-mosque": [
      "images/New folder/mosques-1.jpg",
      "images/New folder/mosques-2.jpg",
      "images/New folder/mosques-3.jpg",
      "images/New folder/mosques-4.jpg",
    ],
    doors: [
      "images/New folder/doors-1.jpg",
      "images/New folder/doors-2.jpg",
      "images/New folder/doors-3.jpg",
      "images/New folder/doors-4.jpg",
      "images/New folder/windows-1.jpg",
      "images/New folder/windows-2.jpg",
    ],
    ahsa: ["images/New folder/ahsa.jpg"],
    steel: ["images/New folder/steel-2.jpg", "images/New folder/steel-1.jpg"],
    decore: [
      "images/New folder/interior-1.jpg",
      "images/New folder/interior-2.jpg",
      "images/New folder/collage-1.jpg",
      "images/New folder/collage-2.jpg",
      "images/New folder/collage-3.jpg",
    ],
    "flyer-nakheel": ["images/New folder/flyer-nakheel.jpg"],
    "flyer-rahma": ["images/New folder/flyer-raha.jpg"],
    "flyer-glass": ["images/New folder/flyer-glass.jpg"],
    "flyer-lighting": ["images/New folder/flyer-lighting.jpg"],
    lic: ["images/New folder/license.jpg"],
    "cert-balady": ["images/New folder/license.jpg"],
    "cert-contractor": ["images/New folder/sca.jpg"],
    "cert-saudization": ["images/New folder/saudization.jpg"],
    "cert-classification": ["images/New folder/balady.jpg"],
    "cert-commerce": ["images/New folder/registration.jpg"],
    "cert-vat": ["images/New folder/vat.jpg"],
  };

  // 4. نظام عرض الصور (Modal) والأزرار والأسهم
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");
  const closeBtn = document.querySelector(".close-modal");
  const prevBtn = document.querySelector(".prev-slide");
  const nextBtn = document.querySelector(".next-slide");

  let currentImages = [];
  let currentIndex = 0;
  let currentProjectTitle = "";

  // فتح الـ Modal عند الضغط على أي كارت مشروع
  projectCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = card.getAttribute("data-project");

      const titleElement = card.querySelector(".project-name");
      currentProjectTitle = titleElement ? titleElement.textContent : "مشروع";

      currentImages = projectGalleries[projectId] || [
        card.querySelector("img").src,
      ];
      currentIndex = 0;

      updateModalContent();
      if (modal) {
        modal.style.display = "flex";
      }
    });
  });

  // دالة تحديث محتوى الصورة والعنوان ورقم الصورة
  function updateModalContent() {
    if (currentImages.length > 0 && modalImg) {
      modalImg.src = currentImages[currentIndex];
      if (modalCaption) {
        modalCaption.textContent = `${currentProjectTitle} — (صورة ${currentIndex + 1} من ${currentImages.length})`;
      }
    }
  }

  // تعريف الأسهم بالـ ID المباشر لضمان عدم فشل البحث عنها
  const prevSlideBtn =
    document.getElementById("prevSlideBtn") ||
    document.querySelector(".prev-slide");
  const nextSlideBtn =
    document.getElementById("nextSlideBtn") ||
    document.querySelector(".next-slide");

  // دوال التنقل بين الصور
  function nextImage() {
    if (currentImages.length > 1) {
      currentIndex = (currentIndex + 1) % currentImages.length;
      updateModalContent();
    }
  }

  function prevImage() {
    if (currentImages.length > 1) {
      currentIndex =
        (currentIndex - 1 + currentImages.length) % currentImages.length;
      updateModalContent();
    }
  }

  // ربط مباشر باستخدام addEventListener مع التأكد من تفعيل الحدث
  if (nextSlideBtn) {
    nextSlideBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      console.log("تم الضغط على السهم التالي"); // تقدري تفتحي الفحص لتري هذه الرسالة
      nextImage();
    });
  }

  if (prevSlideBtn) {
    prevSlideBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      console.log("تم الضغط على السهم السابق");
      prevImage();
    });
  }

  // دعم التنقل بأسهم لوحة المفاتيح والخروج بـ Escape
  document.addEventListener("keydown", (e) => {
    if (modal && modal.style.display === "flex") {
      if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "Escape") {
        modal.style.display = "none";
      }
    }
  });

  // إغلاق النافذة عبر علامة X أو بالنقر في المساحة الفارغة بالخارج
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      if (modal) modal.style.display = "none";
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }
});
