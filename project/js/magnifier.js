function magnifier(opt) {
    this.box = document.getElementById(opt.id) //获取大盒子;
    this.scal = opt.scal; //倍率；
    this.boxWidth = opt.boxWidth; //大盒子宽度；
    this.boxHeight = opt.boxHeight; //大盒子高度；
    this.ballBg = opt.ballBg; //滤镜背景；
    this.url = opt.url; //路径；
    this.ball = opt.ball; //滤镜id名；
    this.bigImg = opt.bigImg; //大图片id名；

    this.init(); //初始化；
    this.DOMready(); //准备DOM
    this.DOMbind(); //捆绑事件；
}
magnifier.prototype = {
    init: function () {
        //大盒子设置样式；且添加左右盒子；
        this.box.style.cssText = 'position:relative;width:' + this.boxWidth + 'px;height:' + this.boxHeight + 'px;'
        this.leftBox = document.createElement('div');
        this.leftBox.style.cssText = 'position:absolute;width:' + this.boxWidth + 'px;height:' + this.boxHeight + 'px;left:0;top:0;'
        this.rightBox = document.createElement('div');
        this.rightBox.style.cssText = 'position:absolute;width:' + this.boxWidth + 'px;height:' + this.boxHeight + 'px;overflow:hidden;display:none;left:' + (this.boxWidth + 50) + 'px;top:0;'
        this.box.appendChild(this.leftBox);
        this.box.appendChild(this.rightBox);
    },
    DOMready: function () {
        //左边盒子添加图片
        var oImgl = document.createElement('img');
        oImgl.src = this.url;
        oImgl.style.cssText = 'width:100%;height:100%;';
        this.leftBox.appendChild(oImgl);
        //右边盒子添加图片
        var oImgr = document.createElement('img');
        oImgr.setAttribute('id', this.bigImg);
        oImgr.src = this.url;
        oImgr.style.cssText = 'width:' + (this.boxWidth * this.scal) + 'px;height:' + (this.boxHeight * this.scal) + 'px;position:absolute;left:0;top:0;';
        this.rightBox.appendChild(oImgr);
        //左边盒子添加滤镜及其样式
        var ball = document.createElement('div');
        ball.setAttribute('id', this.ball);
        ball.style.cssText = 'position:absolute;left:0;top:0;width:' + (this.boxWidth / this.scal) + 'px;height:' + (this.boxHeight / this.scal) + 'px;background-color:' + this.ballBg + ';display:none;cursor: move;border:1px solid #dddddd;'
        this.leftBox.appendChild(ball);
    },
    DOMbind: function () {
        var ball = document.getElementById(this.ball);
        var rightImg = document.getElementById(this.bigImg);
        var self = this;
        this.box.onmousemove = function (event) {
            var e = event || window.event;
            ball.style.display = 'block';
            self.rightBox.style.display = 'block';
            var l = document.body.scrollLeft || document.documentElement.scrollLeft;
            var t = document.body.scrollTop || document.documentElement.scrollTop;
            var posX = e.clientX + l - this.offsetLeft - ball.offsetWidth / 2;
            var posY = e.clientY + t - this.offsetTop - ball.offsetHeight / 2;

            if (posX < 0) {
                posX = 0;
            } else if (posX > this.clientWidth - ball.offsetWidth) {
                posX = this.clientWidth - ball.offsetWidth
            }
            if (posY < 0) {
                posY = 0;
            } else if (posY > this.clientHeight - ball.offsetHeight) {
                posY = this.clientHeight - ball.offsetHeight;
            }
            ball.style.left = posX + 'px';
            ball.style.top = posY + 'px';
            rightImg.style.left = (-1 * posX * self.scal) + 'px';
            rightImg.style.top = (-1 * posY * self.scal) + 'px';

            this.onmouseout = function () {
                ball.style.display = 'none';
                self.rightBox.style.display = 'none';
            }
        }
    }
}

//window.onload = function () {//调用
//    var mag = new magnifier({
//        'id': 'magnifier', //大盒子id
//        'scal': 2, //倍率；
//        'boxWidth': 396, //主盒子宽度
//        'boxHeight': 454, //主盒子高度
//        'ballBg': 'rgba(255, 255, 255, 0.5)', //滤镜颜色
//        'url': '../images/big0.jpg', //图片路径；
//        'ball': 'ball', //滤镜id；
//        'bigImg': 'img1' //大图片id名；
//    })
//}