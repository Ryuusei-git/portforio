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
    speed: 3000,
    slidesPerView: 1, // ← "auto" から "1" に変更！
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    allowTouchMove: false,
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
// ********************Topへボタンのスムーズスクロール********************************************

// ********************ズームイン。ばかし********************************************
// JavaScript（IntersectionObserver）
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});
document.querySelectorAll(".zoom-blur").forEach((el) => observer2.observe(el));

// ********************ズームイン。ぼかし********************************************

// ********************ページ遷移フェードアウト********************************************
document.addEventListener("DOMContentLoaded", () => {
    const fadeLinks = document.querySelectorAll("#sec02 .images a");

    fadeLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const url = this.href;

            document.body.classList.add("fade-out");

            setTimeout(() => {
                window.location.href = url;
            }, 500); // CSSのアニメーション時間と揃える
        });
    });
});
// ********************ページ遷移フェードアウト********************************************

// ********************カウントダウン表示********************************************
window.addEventListener("DOMContentLoaded", () => {
    const countdownEl = document.getElementById("countdown");
    const overlay = document.getElementById("countdown-overlay");

    let count = 3;

    const countdownInterval = setInterval(() => {
        countdownEl.textContent = count;
        count--;

        if (count < 0) {
            clearInterval(countdownInterval);
            overlay.classList.add("fade-out");
            setTimeout(() => {
                overlay.remove(); // 完全に消す（任意）
            }, 1000);
        }
    }, 1000);
});
// ********************カウントダウン表示********************************************

// ===================== マウスエフェクト =====================*************************
const cursor = document.getElementById("cursor");
const follower = document.getElementById("cursor-follower");

document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.transform = `translate(${x}px, ${y}px)`;
    follower.style.transform = `translate(${x}px, ${y}px)`;
});

// 追加：特定要素にhover時の効果をつけたい場合
document.querySelectorAll("a, button, .swiper-slide").forEach((el) => {
    el.classList.add("hover-effect");
});
// ===================== マウスエフェクト =====================*************************

// ===================== 星空Canvas =====================
const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 100; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        dx: Math.random() * 0.2 - 0.1,
        dy: Math.random() * 0.2 - 0.1,
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();

        star.x += star.dx;
        star.y += star.dy;

        // 画面端で跳ね返る
        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
    });

    requestAnimationFrame(drawStars);
}

drawStars();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ===================== クリックで波紋エフェクト =====================
document.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";
    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 1000);
});

// ===================== クリックで波紋エフェクト =====================
