window.addEventListener('load', function () {
    //Cover photo 'minesweeper'
    Vue.component('minesweeper', {
        template: '<css-doodle class="minesweeper" use="var(--rule)" @click="refresh"></css-doodle>',
        methods: {
            refresh: function () {
                const doodle = document.querySelector('css-doodle');
                doodle.update();
            }
        }
    });

    //Follow button
    Vue.component('follow', {
        template: '<div class="follow" @click="$emit(\'add-bookmark\'); addBookmark();">&nbsp;&nbsp;跟隨</div>',
        methods: {
            addBookmark: function (title, url) {
                if (window.sidebar && window.sidebar.addPanel) {
                    window.sidebar.addPanel(title, url, "");
                } else if (window.external.AddFavorite) {
                    window.external.AddFavorite(url, title);
                } else {
                    alert('您的瀏覽器不支援加入我的最愛功能!');
                }
            }
        }
    });

    //Vue instance
    var vm = new Vue({
        el: '#app',
        data: {
            darkMode: 'on',
            following: 2,
            follower: 0,
            nowTab: 'work',
            workData: [{
                title: 'ICEA',
                desc: '在職訓局結訓時完成的專題作品',
                references: [{
                    item: 'IKEA',
                    url: 'https://www.ikea.com.tw/zh'
                }],
                hashtags: ['HTML', 'CSS'],
                url: 'https://siang86121900.github.io/icea/',
                imgPath: './image/icea.png'
            }]
        },
        methods: {
            switchDarkMode() {
                $('#dark-mode').toggleClass('off');
                if ($('#dark-mode').hasClass('off')) {
                    $('body').addClass('normal-background');
                    $('.description').find('span').addClass('normal-font-color');
                    this.darkMode = 'off';
                } else {
                    $('body').removeClass('normal-background');
                    $('.description').find('span').removeClass('normal-font-color');
                    this.darkMode = 'on';
                }
            }
        }
    });
    window.vm = vm;

    //t.js typing effect
    // $('.description').t();

    //Previous page button
    $('.previous-page-arrow').click(function () {
        alert('不許你離開！！');
    });

    //Modal
    function openModal(modalContent) {
        $('.modal').removeClass('hide-modal');
        $('body').addClass('scroll-lock');
        $('.modal-content').append(modalContent);
    }
    //Close modal
    $('.icon-cancel').click(function () {
        $('.modal').addClass('hide-modal');
        $('body').removeClass('scroll-lock');
        $('.modal-content').html('');
    });

    //Show profile photo
    $('.profile-photo').click(function () {
        var profilePhoto = '<img src="./image/profile-photo.jpg" alt="profile-photo">';
        openModal(profilePhoto);
    });

    //Following panel
    $('.following').click(function (e) {
        e.preventDefault();
        var followings = '<iframe src="https://www.youtube.com/embed/tU3Ly2sEKCg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br><iframe src="https://www.youtube.com/embed/zFnNU7VPNbg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        openModal(followings);
    });

    //Follower panel
    $('.follower').click(function (e) {
        e.preventDefault();
        alert('快點兒去按「跟隨」按鈕！！');
    });

    //TODO social functions
    $('.social-panel a').click(function (e) {
        e.preventDefault();
        //Comment
        //Retweet
        //Like
        //Share
    });

    //Hashtags
    $('.hashtag').click(function (e) {
        e.preventDefault();
        showAllWorks();
        var nowHashtag = $(this).text();
        for (var i = 0; i <= $('.work-wrapper').length - 1; i++) {
            var everyHashtag = $('.work-wrapper').eq(i).find('a.hashtag').text();
            if (everyHashtag.search(nowHashtag) == -1) {
                document.getElementsByClassName('work-wrapper')[i].classList.add('hide-work');
            }
        }
    });
    //Show all works
    $('.work').click(function () {
        showAllWorks();
    });
    //Show all works function
    function showAllWorks() {
        for (var i = 0; i <= $('.work-wrapper').length - 1; i++) {
            document.getElementsByClassName('work-wrapper')[i].classList.remove('hide-work');
        }
    }
});



