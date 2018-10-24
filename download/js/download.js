
$(function(){
     //视频动态修改
    $(".video-container .btn-video").click(function(){
        $(".video-container video").show();
        var language = localStorage.getItem("language");
        if(language == "cn"){
            var text = '<source src="./download/img/gamechain.mp4" type="video/mp4" />' +     
                       '<div id="video_tag_tip">您的浏览器不支持video标签</div>';
            $(".video-container video").append(text);           
        }else{
            var text = '<source src="./download/img/gamechain.mp4" type="video/mp4" />' +     
                       '<div id="video_tag_tip">您的浏览器不支持video标签</div>';
            $(".video-container video").append(text);
        }
        $(this).hide();
        $(".prototype-content .header-img .header-img-container").addClass("play");
        var gamechain_video = $(".video-container video")[0];
        var gamechain_video_mobile = $(".video-container video")[1];
        if(gamechain_video.paused){
            gamechain_video.play();
            gamechain_video_mobile.play();
            $(".video-container .btn-video").css("display", "none");
            $(".video-container video").attr("controls", "controls");
        }else{
            gamechain_video.pause();
            gamechain_video_mobile.pause();
            $(".video-container .btn-video").show();
        }
    })



    //众筹时间倒计时
    var leftTimer = function(year, month, day, hour, minute, second){
        var leftTime = (new Date(year, month-1, day, hour, minute, second)) - (new Date());//计算剩余毫秒数
        var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10);//计算剩余天数
        var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10);//计算剩余小时数
        var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩分钟数
        var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余秒数

        days = checkTime(days).toString();
        hours = checkTime(hours).toString();
        minutes = checkTime(minutes).toString();
        seconds = checkTime(seconds).toString();

        $(".countdown-container .countdown-time .day div").eq(0).html(days.charAt(0));
        $(".countdown-container .countdown-time .day div").eq(1).html(days.charAt(1));
        $(".countdown-container .countdown-time .hour div").eq(0).html(hours.charAt(0));
        $(".countdown-container .countdown-time .hour div").eq(1).html(hours.charAt(1));
        $(".countdown-container .countdown-time .minute div").eq(0).html(minutes.charAt(0));
        $(".countdown-container .countdown-time .minute div").eq(1).html(minutes.charAt(1));
        $(".countdown-container .countdown-time .second div").eq(0).html(seconds.charAt(0));
        $(".countdown-container .countdown-time .second div").eq(1).html(seconds.charAt(1));
    }
    var checkTime = function(i){
        if(i < 10){
            i = "0" + i;
        }
        return i;
    }
    
    //众筹时间倒计时
    var startTime = (new Date(2018, 5-1, 18, 11, 0, 0)) - (new Date());
    var endTime = (new Date(2018, 6-1, 4, 11, 0, 0)) - (new Date());
    if(startTime < 0 && endTime > 0){
        $(".countdown-container").css("display", "flex");
        setInterval("leftTimer(2018, 6, 4, 11, 0, 0)", 1000);
        if(language == "cn"){
            $("#countdown-time-text").html("距离GameChain原型展示版本上线还有");
        }else{
            $("#countdown-time-text").html("GameChain prototype display version will go live in :");
        }
        $(".countdown-container .countdown-time-endTime p").html("2018.6.4&nbsp&nbsp&nbsp11:00");
    }else{
        //原型版本
        $(".version-container").show();
        showProtoVer();
    }

    //原型版本
    function showProtoVer(){
        if(language == "cn"){
            $("#button-version div").html("原型展示版");
            // $("#button-version").attr("href", "./gamefund_prototype_cn.apk");
        }else{
            $("#button-version div").html("Prototype display<br/> version");
            $(".version-container .version-content .button-version>div").addClass("en-version").css({"line-height": "120%"});
            $(".version-container .version-content .version-content-text").addClass("en-version");
            $("#button-version").attr("href", "./gamefund_prototype_en.apk");
        }
    }


    var language = localStorage.getItem("language");
    if(language == "en"){
        $(".prototype-content .prototype-content-left .prototype-btn").addClass("en");
        $(".prototype-content .prototype-content-left .prototype-title-cn").addClass("en");
        $(".prototype-content .prototype-content-left .prototype-text > div").addClass("en");
        $(".prototype-content .prototype-content-left .prototype-btn > img").addClass("en");
    }
    
    //调用翻译的内容
    translation();

    //翻译的内容
    //  var translation = function(){
    function translation(){
        var language = localStorage.getItem("language");
        if(language == "cn"){
            console.log("cn1")
            $("html").attr("lang", "zh-cmn-Hans");

            $("#prototype_title").html("原型<br/>展示版");
            $("#prototype_text1").html("该版本仅为初版原型的展示，并非最终版本");
            $("#prototype_text2").html("该版本中出现的游戏仅为效果展示和布局结构可视化展示");
            $("#prototype_text3").html("版本会迭代开发，根据实际功能需求和用户反馈做出相应的调整和优化");
            $("#prototype_text4").html("欢迎大家通过我们的联系方式给出意见和反馈，我们乐意听到不同的声音");
            $("#prototype_btn_text").html("原型展示版");

            $("#prototype_mobile_title").html("原型<br/>展示版");
            $("#prototype_mobile_text1").html("该版本仅为初版原型的展示，并非最终版本");
            $("#prototype_mobile_text2").html("该版本中出现的游戏仅为效果展示和布局结构可视化展示");
            $("#prototype_mobile_text3").html("版本会迭代开发，根据实际功能需求和用户反馈做出相应的调整和优化");
            $("#prototype_mobile_text4").html("欢迎大家通过我们的联系方式给出意见和反馈，我们乐意听到不同的声音");
            $("#prototype_btn_mobile_text").html("原型展示版");
        }else if(language == "ja"){
            console.log("ja")
            $("html").attr("lang", "ja");

            $("#prototype_title").html("Prototype <br/>Display Version");
            $("#prototype_text1").html(" This version is only a demonstration of the initial prototype, not the final version.");
            $("#prototype_text2").html("The games that appear in this version are only for effect display, layout and structure visualization display.");
            $("#prototype_text3").html("The version will be iteratively developed. And it will be adjusted and optimized correspondingly according to actual functional requirements and user feedback.");
            $("#prototype_text4").html("Everyone is welcome to contact with us and give comments and feedback. we are happy to hear different voices.");
            $("#prototype_btn_text").html("Prototyp Display Version");

            $("#prototype_mobile_title").html("Prototype <br/>Display Version");
            $("#prototype_mobile_text1").html(" This version is only a demonstration of the initial prototype, not the final version.");
            $("#prototype_mobile_text2").html("The games that appear in this version are only for effect display, layout and structure visualization display.");
            $("#prototype_mobile_text3").html("The version will be iteratively developed. And it will be adjusted and optimized correspondingly according to actual functional requirements and user feedback.");
            $("#prototype_mobile_text4").html("Everyone is welcome to contact with us and give comments and feedback. we are happy to hear different voices.");
            $("#prototype_btn_mobile_text").html("Prototyp Display Version");

        }else{
            console.log("en")
            $("html").attr("lang", "en");

            $("#prototype_title").html("Prototype <br/>Display Version");
            $("#prototype_text1").html(" This version is only a demonstration of the initial prototype, not the final version.");
            $("#prototype_text2").html("The games that appear in this version are only for effect display, layout and structure visualization display.");
            $("#prototype_text3").html("The version will be iteratively developed. And it will be adjusted and optimized correspondingly according to actual functional requirements and user feedback.");
            $("#prototype_text4").html("Everyone is welcome to contact with us and give comments and feedback. we are happy to hear different voices.");
            $("#prototype_btn_text").html("Prototype Display Version");

            $("#prototype_mobile_title").html("Prototype <br/>Display Version");
            $("#prototype_mobile_text1").html(" This version is only a demonstration of the initial prototype, not the final version.");
            $("#prototype_mobile_text2").html("The games that appear in this version are only for effect display, layout and structure visualization display.");
            $("#prototype_mobile_text3").html("The version will be iteratively developed. And it will be adjusted and optimized correspondingly according to actual functional requirements and user feedback.");
            $("#prototype_mobile_text4").html("Everyone is welcome to contact with us and give comments and feedback. we are happy to hear different voices.");
            $("#prototype_btn_mobile_text").html("Prototyp Display Version");
        }
    }
});