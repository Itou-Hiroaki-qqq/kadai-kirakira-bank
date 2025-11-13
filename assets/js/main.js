document.addEventListener('DOMContentLoaded', () => {

    // header:開閉ボタン関連
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
    // hero：背景画像のスライドショー切り替え
    const pcImages = [
        './assets/images/pht_cover_pc_1.jpg',
        './assets/images/pht_cover_pc_2.jpg'
    ];
    const spImages = [
        './assets/images/pht_cover_sp_1.jpg',
        './assets/images/pht_cover_sp_2.jpg'
    ];
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % pcImages.length;
        // 画像を切り替え
        document.getElementById('pcImage').srcset = pcImages[currentIndex];
        document.getElementById('spImage').src = spImages[currentIndex];
    }, 3000); // 3秒ごと


    // セクションnews：タブの切り替え
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


    // セクションcampaign：スライダー設定
    // Swiperの初期化
    const swiper = new Swiper('.swiper', {

        // ループ設定
        //falseにする場合&&ボタン名が自作の場合はCSSでdisabled処理を追加
        loop: true,  //ループによるスライド個数のエラーを防ぐならfalseに

        //カーソル設定
        grabCursor: true, //カーソルを当てると変化する

        // ナビゲーションボタン設定
        //デフォルトでやるならprevEl: '.swiper-button-prev'…
        navigation: {
            prevEl: '.original-button-prev',
            nextEl: '.original-button-next',
        },

        // ページネーション設定
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // スクロールバー
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        // sp設定
        slidesPerView: 1, //表示するスライド数
        slidesPerGroup: 1, //クリック時に進むスライド数
        spaceBetween: 15, //スライド間に15pxの余白
        // ブレークポイント（PCサイズ以上でスライド3枚に）
        breakpoints: {
            768: { // 768px以上の画面幅
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 15,
            }
        },
    });




}); //script END