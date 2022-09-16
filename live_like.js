console.show(true);

setScreenMetrics(1080, 1920);
sleep(1000);
console.setPosition(device.width / 3, device.height / 5);

app.launch("com.ss.android.ugc.aweme");
console.log("正在打开抖音...");
console.log("请打开需要点赞的直播间...");

while (true) {
    console.error("按音量上键可关闭本程序!!!");
    console.info("请在下方输入框输入点赞次数");
    console.info("输入后点击确定，即开始点赞");

    var like_count = console.input("");
    console.info("将点赞" + like_count + "次");
    console.error("按音量上键结束!!!");
    console.error("按音量上键结束!!!");
    console.error("按音量上键结束!!!");
    sleep("2000");
    console.hide();

    for (var i = 0; i < parseInt(like_count)+1; i++) {
        press(random(400, 700), random(700, 800), 1);
        sleep(random(100, 200));
    }
    console.clear();
    console.show(true);
}