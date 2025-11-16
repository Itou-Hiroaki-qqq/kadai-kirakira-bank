document.addEventListener('DOMContentLoaded', () => {

    // header: ハンバーガーメニュー
    const btnOpen = document.querySelector(".btn-hamburger");
    const btnClose = document.querySelector(".btn-close");
    const overlay = document.querySelector(".sp-menu-overlay");
    // 開く
    btnOpen.addEventListener("click", () => {
        overlay.classList.add("active");
    });
    // 閉じる
    btnClose.addEventListener("click", () => {
        overlay.classList.remove("active");
    });
    // オーバーレイ背景クリックで閉じる
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.classList.remove("active");
        }
    });


    // hero： 背景画像のスライドショー切り替え
    let currentIndex = 0;
    // PC用画像
    const pcSrc = [
        './assets/images/pht_cover_pc_1.jpg',
        './assets/images/pht_cover_pc_2.jpg'
    ];
    // SP用画像
    const spSrc = [
        './assets/images/pht_cover_sp_1.jpg',
        './assets/images/pht_cover_sp_2.jpg'
    ];
    // img要素（2枚）
    const imgElements = [
        document.getElementById('heroImg1'),
        document.getElementById('heroImg2')
    ];
    function updateImages() {
        const isPC = window.matchMedia('(min-width: 768px)').matches;

        imgElements[0].src = isPC ? pcSrc[0] : spSrc[0];
        imgElements[1].src = isPC ? pcSrc[1] : spSrc[1];
    }
    // 初期画像を切り替え
    updateImages();
    window.addEventListener('resize', updateImages);
    // フェード切替ループ
    setInterval(() => {
        imgElements[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % 2;
        imgElements[currentIndex].classList.add('active');
    }, 3000);


    // セクションnews： タブの切り替え
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");
    const underlines = document.querySelectorAll(".underline");
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            // タブ見出し切り替え
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            // コンテンツ切り替え
            contents.forEach(c => c.classList.remove("active"));
            document.getElementById(tab.dataset.tab).classList.add("active");
            // 下線切り替え
            underlines.forEach(u => u.classList.remove("active"));
            underlines[index].classList.add("active");
        });
    });


    // セクションcampaign： スライダー設定
    // Swiperの初期化
    const swiper = new Swiper('.swiper', {

        // ループ設定
        loop: false, 

        //カーソル設定
        grabCursor: true, 

        // ナビゲーションボタン設定
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },

        // ページネーション設定
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // sp設定
        slidesPerView: 'auto', 
        centeredSlides: true,
        spaceBetween: 20,
        // ブレークポイント（PCサイズ以上でスライド4枚に）
        breakpoints: {
            768: { 
                slidesPerView: 4,
                centeredSlides: false, // PCでは中央配置を解除
                spaceBetween: 32,
            }
        },
    });

}); //script END