        // 1.获取事件源 需要的标签
        // var xh = document.getElementsByClassName("qiehuan");
        // var afterstyle = window.getComputedStyle(xh, ":after");
        var xq = document.getElementById("qiehuanzuo");
        var xh = document.getElementById("qiehuanyou");
        // console.log(xq.index);

        var flower = document.getElementById("flower");
        var nextBtn = document.getElementById("next");
        var prevBtn = document.getElementById("prev");

        var minIndex = 1,
            maxIndex = 5;
        var currentIndex = minIndex;

        // 2.监听按钮的点击
        // 下一张
        nextBtn.onclick = function () {
            // alert('被点击了');
            if (currentIndex === maxIndex) {
                currentIndex = minIndex;
            } else {
                currentIndex++;
            }
            flower.setAttribute(
                "src",
                `1226px宽轮播图/lun${currentIndex}.jpg`
            );
        };

        // 上一张
        prevBtn.onclick = function () {
            if (currentIndex === minIndex) {
                currentIndex = maxIndex;
            } else {
                currentIndex--;
            }
            flower.setAttribute(
                "src",
                `1226px宽轮播图/lun${currentIndex}.jpg`
            );
        };

        //单击图片跳转下一张
        // flower.onclick = function () {
        //     if (currentIndex === maxIndex) {
        //         currentIndex = minIndex;
        //     } else {
        //         currentIndex++;
        //     }
        //     flower.setAttribute(
        //         "src",
        //         `1226px宽轮播图/lun${currentIndex}.jpg`
        //     );
        // };

        // 单击左侧往左
        xq.onclick = function () {
            if (currentIndex === minIndex) {
                currentIndex = maxIndex;
            } else {
                currentIndex--;
            }
            flower.setAttribute(
                "src",
                `1226px宽轮播图/lun${currentIndex}.jpg`
            );
        };
        //单击右侧往右
        xh.onclick = function () {
            if (currentIndex === maxIndex) {
                currentIndex = minIndex;
            } else {
                currentIndex++;
            }
            flower.setAttribute(
                "src",
                `1226px宽轮播图/lun${currentIndex}.jpg`
            );
        };