// 读取自定义配置
var TIKTOK_CONFIG = storages.create("TIKTOK_CONFIG");
var like_count = TIKTOK_CONFIG.get("like_count", "100");

like_count = parseInt(like_count);

setScreenMetrics(1080, 1920);

app.launch("com.ss.android.ugc.aweme");

waitForPackage("com.ss.android.ugc.aweme");

for (var i = 0; i < like_count; i++) {
    press(random(400, 700), random(700, 800), 1);
    sleep(random(100, 200));
}
