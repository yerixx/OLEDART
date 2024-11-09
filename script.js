let lastScrollY = 0;

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".header_navigation");
  const currentScrollY = window.scrollY;
  if (currentScrollY < 100) {
    nav.classList.remove("hide");
    nav.classList.remove("active");
    return;
  }
  if (currentScrollY > lastScrollY) {
    nav.classList.add("active");
    nav.classList.remove("hide");
  } else {
    nav.classList.add("hide");
    if (currentScrollY > 100) {
      nav.classList.remove("active");
    } else {
      nav.classList.add("active");
    }
  }
  lastScrollY = currentScrollY;
});

$(document).ready(function () {
  $(".myslider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

$(".artworkNav a, .artistNav a, .contactNav a, .whatonNav a").click(function (
  e
) {
  e.preventDefault();
  $.scrollTo(this.hash, 500);
});

$(".gototop,.homeNav a").click(function () {
  $.scrollTo(0, 500);
});

const globeIcon = document.querySelector(".fa-globe");
const languageModal = document.querySelector(".language-modal");

globeIcon.addEventListener("click", () => {
  languageModal.style.display =
    languageModal.style.display === "block" ? "none" : "block";
});

// 모달 외부 클릭 시 닫기
document.addEventListener("click", (e) => {
  if (!languageModal.contains(e.target) && !globeIcon.contains(e.target)) {
    languageModal.style.display = "none";
  }
});

const closeButton = document.querySelector(".fa-xmark");
const sideMenuButton = document.querySelector(".fa-bars");
const gnbSideMenu = document.querySelector(".gnbSide");
const gnbSideMenuTabs = document.querySelectorAll(".gnbSide li[class*='Nav']");

sideMenuButton.addEventListener("click", () => {
  gnbSideMenu.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeButton.addEventListener("click", () => {
  gnbSideMenu.classList.remove("active");
  document.body.style.overflow = "";
});

gnbSideMenuTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    gnbSideMenu.classList.remove("active");
    document.body.style.overflow = "";
  });
});

const LangageBtns = document.querySelectorAll(".LangageBtn li");

LangageBtns.forEach((LangageBtn) => {
  LangageBtn.addEventListener("click", () => {
    LangageBtns.forEach((btn) => btn.classList.remove("on"));
    LangageBtn.classList.add("on");

    const lang = LangageBtn.dataset.lang;
    changeLanguage(lang);
  });
});

const search = document.querySelector(".fa-magnifying-glass");
search.addEventListener("click", () => {
  alert("서비스 준비중 입니다.");
});

function changeLanguage(lang) {
  const waitForTranslate = setInterval(() => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      clearInterval(waitForTranslate);
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  }, 100);

  setTimeout(() => {
    if (!document.querySelector(".goog-te-combo")) {
      clearInterval(waitForTranslate);
      console.error("Google Translate combo box not found");
      alert("구글 번역기를 불러오는 중입니다. 잠시만 기다려주세요.");
    }
  }, 2000);
}
