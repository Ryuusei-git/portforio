// ********************ローディング********************************************
// ローディング画面の要素を取得
const loadingScreen = document.querySelector(".loading-screen");

// ページの読み込みが完了したら実行される関数
window.addEventListener("load", function () {
    // ローディング画面を非表示にする
    loadingScreen.classList.add("active3");
});

// 5秒後にloadingScreenが表示されていなければ、強制的に非表示にする
setTimeout(function () {
    if (!loadingScreen.classList.contains("active3")) {
        loadingScreen.classList.add("active3");
    }
}, 5000);

// ********************ローディング********************************************

// ********************ハンバーガーメニュー********************************************
const drawerButton = document.getElementById("drawerButton");
const drawerMenu = document.querySelector("header nav ul");

function openDrawer() {
    drawerMenu.classList.toggle("open");
    drawerButton.classList.toggle("reDesign");
}

drawerButton.addEventListener("click", openDrawer);

// メニューリンクをクリックしたとき、メニューを閉じる
const menuLinks = document.querySelectorAll("header nav ul li a");

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        drawerMenu.classList.remove("open");
        drawerButton.classList.remove("reDesign");
    });
});

// ********************ハンバーガーメニュー********************************************

// ********************スライダー********************************************
const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    effect: "cube",
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
// ********************スライダー********************************************
// ********************Topへボタンのスムーズスクロール********************************************
const toTopButton = document.getElementById("toTopButton");

toTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
