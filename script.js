document.addEventListener('DOMContentLoaded', () => {
    // --- スライダー処理 ---
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (slides.length > 0) {
        let currentIndex = 0;
        let timer = null;
        const intervalTime = 4000;

        function updateSlider(nextIndex) {
            slides[currentIndex].classList.remove('active');
            dots[currentIndex].classList.remove('active');
            currentIndex = nextIndex;
            slides[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
        }

        function showNext() { updateSlider((currentIndex + 1) % slides.length); }
        function showPrev() { updateSlider((currentIndex - 1 + slides.length) % slides.length); }

        function startTimer() {
            clearInterval(timer);
            timer = setInterval(showNext, intervalTime);
        }

        nextBtn.addEventListener('click', () => { showNext(); startTimer(); });
        prevBtn.addEventListener('click', () => { showPrev(); startTimer(); });
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => { updateSlider(index); startTimer(); });
        });
        startTimer();
    }

    // --- ハンバーガーメニュー処理 ---
    const hamburger = document.getElementById('js-hamburger');
    const nav = document.getElementById('js-nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('is-active');
            nav.classList.remove('is-active');
        });
    });
});