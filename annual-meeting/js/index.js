//一等奖内定抽奖系统
window.onload=function(){
        var pp = {
            pl : 0,
            img:['img/1.png','img/0.png','img/2.png','img/3.png','img/4.png','img/5.png','img/6.png','img/7.png','img/8.png','img/9.png',
                // 'img/1-1.png','img/0-1.png','img/2-1.png','img/3-1.png','img/4-1.png','img/5-1.png','img/6-1.png','img/7-1.png','img/8-1.png','img/9-1.png',
                // 'img/1-2.png','img/0-2.png','img/2-2.png','img/3-2.png','img/4-2.png','img/5-2.png','img/6-2.png','img/7-2.png','img/8-2.png','img/9-2.png',
            ],
            c : 0,
            step : 500
        };
        var stopArr=["459", "324", "117", "384", "352", "247", "085", "489",
            "005", "070", "235", "405", "041", "276", "021", "300", "272", "496", "387", "224",
            "356", "467", "354", "200", "017", "417", "296", "329", "458",
            "059", "469", "391", "107", "421", "498", "149","109", "479", "056", "122", "302", "193", "446", "012", "209", "126"
        ];
        var rewardZone1=document.getElementById('rewardZone1');
        var rewardZone2=document.getElementById('rewardZone2');
        var aImag=rewardZone1.getElementsByTagName('img');
        var rewardImg=document.getElementById('rewardImg');
        var grd=document.getElementById('grd');
        console.log(aImag);
        // var oInput=document.getElementsByClassName('dv');
        var timer1=null;
        var timer2=null;
        var timer3=null;
        var state=0;
        var status=0;
        var pic1;
        var pic2;
        var pic3;
        var str;
        var strl1;
        var strl2;
        var strl3;
        var strl4;
        var strl5;
        var strr1;
        var strr2;
        var strr3;
        var strr4;
        var strr5;
        var arr=[];
        var arr10=[];
        // var timer4=null;
        var num=0;

    //	图片随随机数变化
        function haha1(){
            //0 1 2百位 十位 个数
            pic1=Math.floor(Math.random()*5);
            aImag[0].src='img/'+pic1+'.png'
        }
        function haha2(){
            pic2=Math.floor(Math.random()*10);
            aImag[1].src='img/'+pic2+'.png';
        }
        function haha3(){
            pic3=Math.floor(Math.random()*10);
            aImag[2].src='img/'+pic3+'.png';
        }
        function use(){
            if(state==1){
                clearInterval(timer1);
                clearInterval(timer2);
                clearInterval(timer3);
                $('.number-launch').css('display','block');
                $('#number-launch').css('display','none');
                timer1=setInterval(haha1,50);
                timer2=setInterval(haha2,50);
                timer3=setInterval(haha3,50);
            }
        }
    function paopao(){
        var html='<div class="paopao" style="left: '+ pp.pl + 'rem;position: absolute;top: -0.3rem;"><img src="'+pp.img[pp.c]+'" width="30" height="30"></div>'
        $(".number-launch").append(html);
        pp.c ++;
        if(pp.c >= pp.img.length){
            pp.c = 0;
        }
        pp.pl = Math.random()/3+0.4;
        $(".paopao").each(function () {

            if($(this).index()%2 == 0){
                pp.step = 120;
            }else if($(this).index()%3 == 0){
                pp.step = 220;
            }else{
                pp.step = 320;
            }

            if (!$(this).is(":animated")) {
                $(this).animate({
                        bottom: "4rem",
                        fontSize: "0.5rem",
                        opacity: "0"
                    }, (500-pp.step)*10,
                    function () {
                        $(this).remove();
                    })
            }
        });
        setTimeout(paopao,pp.step);
    }
    $(document).keypress(function (e) {
        // alert(e.keyCode);
        //开始抽奖
        if (e.keyCode == 32) {
            paopao();
            aImag[0].style.display='block';
            aImag[1].style.display='block';
            aImag[2].style.display='block';
            $('#rewardZone2 img').css('display','none');
            // lottery_btn.click();
            state=1;
            use();
        }
        /*s键开始*/
        if (e.keyCode == 115) {
            paopao();
            status=1;
            $('#rewardZone1 img').css('display','none');
            $('#rewardZone2 img').css('display','block');
            l11Use();
            l21Use();
            l31Use();
            l41Use();
            l51Use();
            r11Use();
            r21Use();
            r31Use();
            r41Use();
            r51Use();
            $('.number-launch').css('display','block');
            $('#number-launch').css('display','none');
        }
        if (e.keyCode == 49) {
            $('#rewardZone1 img').css('display','none');
            $('#rewardZone2 img').css('display','none');
            rewardImg.src='img/third-one.png';
            grd.src='img/third-grd.png';
            rewardZone1.style.display='none';
            rewardZone2.style.display='block';
        }
        if (e.keyCode == 50) {
            $('#rewardZone1 img').css('display','none');
            $('#rewardZone2 img').css('display','none');
            rewardImg.src='img/third-two.png';
            grd.src='img/third-grd.png';
            rewardZone1.style.display='none';
            rewardZone2.style.display='block';
        }
        if (e.keyCode == 51) {
            $('#rewardZone1 img').css('display','none');
            $('#rewardZone2 img').css('display','none');
            rewardImg.src='img/second-reward.png';
            grd.src='img/second-grd.png';
            rewardZone1.style.display='block';
            rewardZone2.style.display='none';
        }
        if (e.keyCode == 52) {
            $('#rewardZone1 img').css('display','none');
            $('#rewardZone2 img').css('display','none');
            rewardImg.src='img/first-reward.png';
            grd.src='img/first-grd.png';
            rewardZone1.style.display='block';
            rewardZone2.style.display='none';
        }
        if (e.keyCode == 53) {
            $('#rewardZone1 img').css('display','none');
            $('#rewardZone2 img').css('display','none');
            rewardImg.src='img/special-reward.png';
            grd.src='img/special-grd.png';
            rewardZone1.style.display='block';
            rewardZone2.style.display='none';
        }
        if (e.keyCode == 54) {
            $('#rewardZone1 img').css('display','none');
            $('#rewardZone2 img').css('display','none');
            rewardImg.src='img/third-one.png';
            grd.src='img/third-grd.png';
            rewardZone1.style.display='block';
            rewardZone2.style.display='none';
        }
        if (e.keyCode == 55) {
            $('#rewardZone1 img').css('display','none');
            $('#rewardZone2 img').css('display','none');
            rewardImg.src='img/third-two.png';
            grd.src='img/third-grd.png';
            rewardZone1.style.display='block';
            rewardZone2.style.display='none';
        }
        //额外增加抽奖
        if (e.keyCode == 56) {
            $('#rewardZone1 img').css('display','none');
            $('#rewardZone2 img').css('display','none');
            rewardImg.src='img/extra-reward.png';
            grd.src='img/extra-grd.png';
            rewardZone1.style.display='block';
            rewardZone2.style.display='none';
        }
        //停止抽奖
        if (e.keyCode == 13) {
            console.log(state);
            check();
        };
        function check() {
            setTimeout(function () {
                clearInterval(timer3);
                if(pic3!==undefined){
                    str=pic3+'';
                }
            },1000);
            setTimeout(function () {
                clearInterval(timer2);
                if(pic2!==undefined){
                    str=pic2+str;
                }
            },2000);
            setTimeout(function () {
                clearInterval(timer1);
                if(pic1!==undefined){
                    str=pic1+str;
                }
                if(arr.length!==0){
                    console.log(str);
                    if(arr.indexOf(str)!==-1){
                        if(state==1){
                            // alert('该号码已中奖项，已经重新抽下一个中奖号码!，再点击enter停止抽奖');
                            use();
                            check();
                        }else{
                            console.log('请点击空格键开始抽奖或者开始下次抽奖');
                        }
                    }else{
                        if(str.length==3){
                            $('.number-launch').css('display','none');
                            $('#number-launch').css('display','block');
                            if(arr10.length){
                                if(arr10.indexOf(str)!==-1){
                                    // alert('包含了');
                                    use();
                                    check();
                                }else {
                                    if(stopArr.length){
                                        if(stopArr.indexOf(str)!==-1){
                                            // alert('包含了');
                                            use();
                                            check();
                                        }else {
                                            arr.push(str);
                                        }
                                    }else{
                                        arr.push(str);
                                    }
                                }
                            }else{
                                if(stopArr.length){
                                    if(stopArr.indexOf(str)!==-1){
                                        // alert('包含了');
                                        use();
                                        check();
                                    }else {
                                        arr.push(str);
                                    }
                                }else{
                                    arr.push(str);
                                }
                            }
                        }
                    }
                }else{
                    if(str!==undefined){
                        $('.number-launch').css('display','none');
                        $('#number-launch').css('display','block');
                        if(arr10.length){
                            if(arr10.indexOf(str)!==-1){
                                // alert('包含了');
                                use();
                                check();
                            }else {
                                if(stopArr.length){
                                    if(stopArr.indexOf(str)!==-1){
                                         // alert('包含了');
                                         use();
                                         check();
                                    }else {
                                        arr.push(str);
                                    }
                                }else{
                                    arr.push(str);
                                };
                            }
                        }else{
                            if(stopArr.length){
                                if(stopArr.indexOf(str)!==-1){
                                    // alert('包含了');
                                    use();
                                    check();
                                }else {
                                    arr.push(str);
                                }
                            }else{
                                arr.push(str);
                            }
                        }
                    }
                }
                state=0;
                console.log(arr);
            },4000);
        }
        /*结束10次获取数字*/
        if (e.keyCode == 101) {
            // $('#clear-control').click();
            // alert(123)
            endl1();
            endl2();
            endl3();
            endl4();
            endl5();
            endr1();
            endr2();
            endr3();
            endr4();
            endr5();
        }
    });
    /***每组十个开始*/
    /*left leftOne开始*/
    var l1=document.getElementById('l1');
    var l1Imag=l1.getElementsByTagName('img');
    var pl11;
    var pl12;
    var pl13;
    var tl11=null;
    var tl12=null;
    var tl13=null;
    function hunl11(){
        //0 1 2百位 十位 个数
        pl11=Math.floor(Math.random()*5);
        l1Imag[0]['src']='img/'+pl11+'.png'
    }
    function hunl12(){
        pl12=Math.floor(Math.random()*10);
        l1Imag[1]['src']='img/'+pl12+'.png';
    }
    function hunl13(){
        pl13=Math.floor(Math.random()*10);
        l1Imag[2]['src']='img/'+pl13+'.png';
    }
    console.log(l1Imag);
    function l11Use(){
        clearInterval(tl11);
        clearInterval(tl12);
        clearInterval(tl13);
        $('.number-launch').css('display','block');
        $('#number-launch').css('display','none');
        tl11=setInterval(hunl11,50);
        tl12=setInterval(hunl12,50);
        tl13=setInterval(hunl13,50);
    }
    /*left leftOne结束*/
    /*left rightOne开始*/
    var r1=document.getElementById('r1');
    var r1Imag=r1.getElementsByTagName('img');
    var pr11;
    var pr12;
    var pr13;
    var tr11=null;
    var tr12=null;
    var tr13=null;
    function hunr11(){
        //0 1 2百位 十位 个数
        pr11=Math.floor(Math.random()*5);
        r1Imag[0]['src']='img/'+pr11+'.png'
    }
    function hunr12(){
        pr12=Math.floor(Math.random()*10);
        r1Imag[1]['src']='img/'+pr12+'.png';
    }
    function hunr13(){
        pr13=Math.floor(Math.random()*10);
        r1Imag[2]['src']='img/'+pr13+'.png';
    }
    console.log(r1Imag);
    function r11Use(){
        clearInterval(tr11);
        clearInterval(tr12);
        clearInterval(tr13);
        $('.number-launch').css('display','block');
        $('#number-launch').css('display','none');
        tr11=setInterval(hunr11,50);
        tr12=setInterval(hunr12,50);
        tr13=setInterval(hunr13,50);
    }
    /*left rightOne结束*/
    /*left leftTwo开始*/
    var l2=document.getElementById('l2');
    var l2Imag=l2.getElementsByTagName('img');
    var pl21;
    var pl22;
    var pl23;
    var tl21=null;
    var tl22=null;
    var tl23=null;
    function hunl21(){
        //0 1 2百位 十位 个数
        pl21=Math.floor(Math.random()*5);
        l2Imag[0]['src']='img/'+pl21+'.png'
    }
    function hunl22(){
        pl22=Math.floor(Math.random()*10);
        l2Imag[1]['src']='img/'+pl22+'.png';
    }
    function hunl23(){
        pl23=Math.floor(Math.random()*10);
        l2Imag[2]['src']='img/'+pl23+'.png';
    }
    console.log(l2Imag);
    function l21Use(){
        clearInterval(tl21);
        clearInterval(tl22);
        clearInterval(tl23);
        $('.number-launch').css('display','block');
        $('#number-launch').css('display','none');
        tl21=setInterval(hunl21,50);
        tl22=setInterval(hunl22,50);
        tl23=setInterval(hunl23,50);
    }
    /*left leftTwo结束*/
    /*left rightTwo开始*/
    var r2=document.getElementById('r2');
    var r2Imag=r2.getElementsByTagName('img');
    var pr21;
    var pr22;
    var pr23;
    var tr21=null;
    var tr22=null;
    var tr23=null;
    function hunr21(){
        //0 1 2百位 十位 个数
        pr21=Math.floor(Math.random()*5);
        r2Imag[0]['src']='img/'+pr21+'.png'
    }
    function hunr22(){
        pr22=Math.floor(Math.random()*10);
        r2Imag[1]['src']='img/'+pr22+'.png';
    }
    function hunr23(){
        pr23=Math.floor(Math.random()*10);
        r2Imag[2]['src']='img/'+pr23+'.png';
    }
    console.log(r2Imag);
    function r21Use(){
        clearInterval(tr21);
        clearInterval(tr22);
        clearInterval(tr23);
        $('.number-launch').css('display','block');
        $('#number-launch').css('display','none');
        tr21=setInterval(hunr21,50);
        tr22=setInterval(hunr22,50);
        tr23=setInterval(hunr23,50);
    }
    /*left rightTwo结束*/
    /*left lefttThree开始*/
    var l3=document.getElementById('l3');
    var l3Imag=l3.getElementsByTagName('img');
    var pl31;
    var pl32;
    var pl33;
    var tl31=null;
    var tl32=null;
    var tl33=null;
    function hunl31(){
        //0 1 2百位 十位 个数
        pl31=Math.floor(Math.random()*5);
        l3Imag[0]['src']='img/'+pl31+'.png'
    }
    function hunl32(){
        pl32=Math.floor(Math.random()*10);
        l3Imag[1]['src']='img/'+pl32+'.png';
    }
    function hunl33(){
        pl33=Math.floor(Math.random()*10);
        l3Imag[2]['src']='img/'+pl33+'.png';
    }
    console.log(l3Imag);
    function l31Use(){
        clearInterval(tl31);
        clearInterval(tl32);
        clearInterval(tl33);
        $('.number-launch').css('display','block');
        $('#number-launch').css('display','none');
        tl31=setInterval(hunl31,50);
        tl32=setInterval(hunl32,50);
        tl33=setInterval(hunl33,50);
    }
    /*left leftThree结束*/
    /*left rightThree开始*/
    var r3=document.getElementById('r3');
    var r3Imag=r3.getElementsByTagName('img');
    var pr31;
    var pr32;
    var pr33;
    var tr31=null;
    var tr32=null;
    var tr33=null;
    function hunr31(){
        //0 1 2百位 十位 个数
        pr31=Math.floor(Math.random()*5);
        r3Imag[0]['src']='img/'+pr31+'.png'
    }
    function hunr32(){
        pr32=Math.floor(Math.random()*10);
        r3Imag[1]['src']='img/'+pr32+'.png';
    }
    function hunr33(){
        pr33=Math.floor(Math.random()*10);
        r3Imag[2]['src']='img/'+pr33+'.png';
    }
    console.log(r3Imag);
    function r31Use(){
        clearInterval(tr31);
        clearInterval(tr32);
        clearInterval(tr33);
        $('.number-launch').css('display','block');
        $('#number-launch').css('display','none');
        tr31=setInterval(hunr31,50);
        tr32=setInterval(hunr32,50);
        tr33=setInterval(hunr33,50);
    }
    /*left rightThree结束*/
    /*left leftFour开始*/
    var l4=document.getElementById('l4');
    var l4Imag=l4.getElementsByTagName('img');
    var pl41;
    var pl42;
    var pl43;
    var tl41=null;
    var tl42=null;
    var tl43=null;
    function hunl41(){
        //0 1 2百位 十位 个数
        pl41=Math.floor(Math.random()*5);
        l4Imag[0]['src']='img/'+pl41+'.png'
    }
    function hunl42(){
        pl42=Math.floor(Math.random()*10);
        l4Imag[1]['src']='img/'+pl42+'.png';
    }
    function hunl43(){
        pl43=Math.floor(Math.random()*10);
        l4Imag[2]['src']='img/'+pl43+'.png';
    }
    console.log(l4Imag);
    function l41Use(){
        clearInterval(tl41);
        clearInterval(tl42);
        clearInterval(tl43);
        $('.number-launch').css('display','block');
        $('#number-launch').css('display','none');
        tl41=setInterval(hunl41,50);
        tl42=setInterval(hunl42,50);
        tl43=setInterval(hunl43,50);
    }
    /*left leftFour结束*/
    /*left rightFour开始*/
    var r4=document.getElementById('r4');
    var r4Imag=r4.getElementsByTagName('img');
    var pr41;
    var pr42;
    var pr43;
    var tr41=null;
    var tr42=null;
    var tr43=null;
    function hunr41(){
        //0 1 2百位 十位 个数
        pr41=Math.floor(Math.random()*5);
        r4Imag[0]['src']='img/'+pr41+'.png'
    }
    function hunr42(){
        pr42=Math.floor(Math.random()*10);
        r4Imag[1]['src']='img/'+pr42+'.png';
    }
    function hunr43(){
        pr43=Math.floor(Math.random()*10);
        r4Imag[2]['src']='img/'+pr43+'.png';
    }
    console.log(r4Imag);
    function r41Use(){
        clearInterval(tr41);
        clearInterval(tr42);
        clearInterval(tr43);
        $('.number-launch').css('display','block');
        $('#number-launch').css('display','none');
        tr41=setInterval(hunr41,50);
        tr42=setInterval(hunr42,50);
        tr43=setInterval(hunr43,50);
    }
    /*left rightFour结束*/
    /*left leftFive开始*/
    var l5=document.getElementById('l5');
    var l5Imag=l5.getElementsByTagName('img');
    var pl51;
    var pl52;
    var pl53;
    var tl51=null;
    var tl52=null;
    var tl53=null;
    function hunl51(){
        //0 1 2百位 十位 个数
        pl51=Math.floor(Math.random()*5);
        l5Imag[0]['src']='img/'+pl51+'.png'
    }
    function hunl52(){
        pl52=Math.floor(Math.random()*10);
        l5Imag[1]['src']='img/'+pl52+'.png';
    }
    function hunl53(){
        pl53=Math.floor(Math.random()*10);
        l5Imag[2]['src']='img/'+pl53+'.png';
    }
    console.log(l5Imag);
    function l51Use(){
        clearInterval(tl51);
        clearInterval(tl52);
        clearInterval(tl53);
        $('.number-launch').css('display','block');
        $('#number-launch').css('display','none');
        tl51=setInterval(hunl51,50);
        tl52=setInterval(hunl52,50);
        tl53=setInterval(hunl53,50);
    }
    /*left leftFive结束*/
    /*left rightFive开始*/
    var r5=document.getElementById('r5');
    var r5Imag=r5.getElementsByTagName('img');
    var pr51;
    var pr52;
    var pr53;
    var tr51=null;
    var tr52=null;
    var tr53=null;
    function hunr51(){
        //0 1 2百位 十位 个数
        pr51=Math.floor(Math.random()*5);
        r5Imag[0]['src']='img/'+pr51+'.png'
    }
    function hunr52(){
        pr52=Math.floor(Math.random()*10);
        r5Imag[1]['src']='img/'+pr52+'.png';
    }
    function hunr53(){
        pr53=Math.floor(Math.random()*10);
        r5Imag[2]['src']='img/'+pr53+'.png';
    }
    console.log(r5Imag);
    function r51Use(){
        clearInterval(tr51);
        clearInterval(tr52);
        clearInterval(tr53);
        $('.number-launch').css('display','block');
        $('#number-launch').css('display','none');
        tr51=setInterval(hunr51,50);
        tr52=setInterval(hunr52,50);
        tr53=setInterval(hunr53,50);
    }
    /*left rightFive结束*/
    /***每组十个结束*/
    /***停止10个每组十个开始*/
    /*l1结束开始*/
    function endl1() {
            setTimeout(function () {
                clearInterval(tl13);
                if(pl13!==undefined){
                    strl1=pl13+'';
                }
            },1000);
            setTimeout(function () {
                clearInterval(tl12);
                if(pl12!==undefined){
                    strl1=pl12+strl1;
                }
            },2000);
            setTimeout(function () {
                clearInterval(tl11);
                if(pl11!==undefined){
                    strl1=pl11+strl1;
                }
                if(arr10.length!==0){
                    console.log(strl1);
                    if(arr10.indexOf(strl1)!==-1){
                        if(status==1){
                            // alert('该号码已中奖项，已经重新抽下一个中奖号码!，再点击enter停止抽奖');
                            l11Use();
                            endl1();
                        }else{
                            console.log('请点击空格键开始抽奖或者开始下次抽奖');
                        }
                    }else{
                        if(strl1.length==3){
                            // alert(strl1+'得到了');
                            $('.number-launch').css('display','none');
                            $('#number-launch').css('display','block');
                            if(arr.length){
                                if(arr.indexOf(strl1)!==-1){
                                    // alert('包含了');
                                    l11Use();
                                    endl1();
                                }else {
                                    if(stopArr.length){
                                        if(stopArr.indexOf(strl1)!==-1){
                                            // alert('包含了');
                                            l11Use();
                                            endl1();
                                        }else {
                                            arr10.push(strl1);
                                        }
                                    }else{
                                        arr10.push(strl1);
                                    };
                                }
                            }else{
                                if(stopArr.length){
                                    if(stopArr.indexOf(strl1)!==-1){
                                        // alert('包含了');
                                        l11Use();
                                        endl1();
                                    }else {
                                        arr10.push(strl1);
                                    }
                                }else{
                                    arr10.push(strl1);
                                };
                            }
                        }
                    }
                }else{
                    if(strl1!==undefined){
                        // alert(strl1+'得到了');
                        $('.number-launch').css('display','none');
                        $('#number-launch').css('display','block');
                        if(arr.length){
                            if(arr.indexOf(strl1)!==-1){
                                // alert('包含了');
                                l11Use();
                                endl1();
                            }else {
                                if(stopArr.length){
                                    if(stopArr.indexOf(strl1)!==-1){
                                        // alert('包含了');
                                        l11Use();
                                        endl1();
                                    }else {
                                        arr10.push(strl1);
                                    }
                                }else{
                                    arr10.push(strl1);
                                };
                            }
                        }else{
                            if(stopArr.length){
                                if(stopArr.indexOf(strl1)!==-1){
                                    // alert('包含了');
                                    l11Use();
                                    endl1();
                                }else {
                                    arr10.push(strl1);
                                }
                            }else{
                                arr10.push(strl1);
                            };
                        }
                    }
                }
                console.log(arr10);
            },4000);
        }
    /*l1结束结束*/
    /*r1结束开始*/
    function endr1() {
        setTimeout(function () {
            clearInterval(tr13);
            if(pr13!==undefined){
                strr1=pr13+'';
            }
        },1000);
        setTimeout(function () {
            clearInterval(tr12);
            if(pr12!==undefined){
                strr1=pr12+strr1;
            }
        },2000);
        setTimeout(function () {
            clearInterval(tr11);
            if(pr11!==undefined){
                strr1=pr11+strr1;
            }
            if(arr10.length!==0){
                console.log(strr1);
                if(arr10.indexOf(strr1)!==-1){
                    if(status==1){
                        // alert('该号码已中奖项，已经重新抽下一个中奖号码!，再点击enter停止抽奖');
                        r11Use();
                        endr1();
                    }else{
                        console.log('请点击空格键开始抽奖或者开始下次抽奖');
                    }
                }else{
                    if(strr1.length==3){
                        $('.number-launch').css('display','none');
                        $('#number-launch').css('display','block');
                        if(arr.length){
                            if(arr.indexOf(strr1)!==-1){
                                // alert('包含了');
                                r11Use();
                                endr1();
                            }else {
                                if(stopArr.length){
                                    if(stopArr.indexOf(strr1)!==-1){
                                        // alert('包含了');
                                        r11Use();
                                        endr1();
                                    }else {
                                        arr10.push(strr1);
                                    }
                                }else{
                                    arr10.push(strr1);
                                };
                            }
                        }else{
                            if(stopArr.length){
                                if(stopArr.indexOf(strr1)!==-1){
                                    // alert('包含了');
                                    r11Use();
                                    endr1();
                                }else {
                                    arr10.push(strr1);
                                }
                            }else{
                                arr10.push(strr1);
                            };
                        }
                    }
                }
            }else{
                if(strr1!==undefined){
                    $('.number-launch').css('display','none');
                    $('#number-launch').css('display','block');
                    if(arr.length){
                        if(arr.indexOf(strr1)!==-1){
                            // alert('包含了');
                            r11Use();
                            endr1();
                        }else {
                            if(stopArr.length){
                                if(stopArr.indexOf(strr1)!==-1){
                                    // alert('包含了');
                                    r11Use();
                                    endr1();
                                }else {
                                    arr10.push(strr1);
                                }
                            }else{
                                arr10.push(strr1);
                            };
                        }
                    }else{
                        if(stopArr.length){
                            if(stopArr.indexOf(strr1)!==-1){
                                // alert('包含了');
                                r11Use();
                                endr1();
                            }else {
                                arr10.push(strr1);
                            }
                        }else{
                            arr10.push(strr1);
                        };
                    }
                }
            }
            console.log(arr10);
        },4000);
    }
    /*r1结束结束*/
    /*l2结束开始*/
    function endl2() {
        setTimeout(function () {
            clearInterval(tl23);
            if(pl23!==undefined){
                strl2=pl23+'';
            }
        },1000);
        setTimeout(function () {
            clearInterval(tl22);
            if(pl22!==undefined){
                strl2=pl22+strl2;
            }
        },2000);
        setTimeout(function () {
            clearInterval(tl21);
            if(pl21!==undefined){
                strl2=pl21+strl2;
            }
            if(arr10.length!==0){
                console.log(strl2);
                if(arr10.indexOf(strl2)!==-1){
                    if(status==1){
                        // alert('该号码已中奖项，已经重新抽下一个中奖号码!，再点击enter停止抽奖');
                        l21Use();
                        endl2();
                    }else{
                        console.log('请点击空格键开始抽奖或者开始下次抽奖');
                    }
                }else{
                    if(strl2.length==3){
                        $('.number-launch').css('display','none');
                        $('#number-launch').css('display','block');
                        if(arr.length){
                            if(arr.indexOf(strl2)!==-1){
                                // alert('包含了');
                                l21Use();
                                endl2();
                            }else {
                                if(stopArr.length){
                                    if(stopArr.indexOf(strl2)!==-1){
                                        // alert('包含了');
                                        l21Use();
                                        endl2();
                                    }else {
                                        arr10.push(strl2);
                                    }
                                }else{
                                    arr10.push(strl2);
                                };
                            }
                        }else{
                            if(stopArr.length){
                                if(stopArr.indexOf(strl2)!==-1){
                                    // alert('包含了');
                                    l21Use();
                                    endl2();
                                }else {
                                    arr10.push(strl2);
                                }
                            }else{
                                arr10.push(strl2);
                            };
                        }
                    }
                }
            }else{
                if(strl2!==undefined){
                    $('.number-launch').css('display','none');
                    $('#number-launch').css('display','block');
                    if(arr.length){
                        if(arr.indexOf(strl2)!==-1){
                            // alert('包含了');
                            l21Use();
                            endl2();
                        }else {
                            if(stopArr.length){
                                if(stopArr.indexOf(strl2)!==-1){
                                    // alert('包含了');
                                    l21Use();
                                    endl2();
                                }else {
                                    arr10.push(strl2);
                                }
                            }else{
                                arr10.push(strl2);
                            };
                        }
                    }else{
                        if(stopArr.length){
                            if(stopArr.indexOf(strl2)!==-1){
                                // alert('包含了');
                                l21Use();
                                endl2();
                            }else {
                                arr10.push(strl2);
                            }
                        }else{
                            arr10.push(strl2);
                        };
                    }
                }
            }
            console.log(arr10);
        },4000);
    }
    /*l2结束结束*/
    /*r2结束开始*/
    function endr2() {
        setTimeout(function () {
            clearInterval(tr23);
            if(pr23!==undefined){
                strr2=pr23+'';
            }
        },1000);
        setTimeout(function () {
            clearInterval(tr22);
            if(pr22!==undefined){
                strr2=pr22+strr2;
            }
        },2000);
        setTimeout(function () {
            clearInterval(tr21);
            if(pr21!==undefined){
                strr2=pr21+strr2;
            }
            if(arr10.length!==0){
                console.log(strr2);
                if(arr10.indexOf(strr2)!==-1){
                    if(status==1){
                        // alert('该号码已中奖项，已经重新抽下一个中奖号码!，再点击enter停止抽奖');
                        r21Use();
                        endr2();
                    }else{
                        console.log('请点击空格键开始抽奖或者开始下次抽奖');
                    }
                }else{
                    if(strr2.length==3){
                        $('.number-launch').css('display','none');
                        $('#number-launch').css('display','block');
                        if(arr.length){
                            if(arr.indexOf(strr2)!==-1){
                                // alert('包含了');
                                r21Use();
                                endr2();
                            }else {
                                if(stopArr.length){
                                    if(stopArr.indexOf(strr2)!==-1){
                                        // alert('包含了');
                                        r21Use();
                                        endr2();
                                    }else {
                                        arr10.push(strr2);
                                    }
                                }else{
                                    arr10.push(strr2);
                                };
                            }
                        }else{
                            if(stopArr.length){
                                if(stopArr.indexOf(strr2)!==-1){
                                    // alert('包含了');
                                    r21Use();
                                    endr2();
                                }else {
                                    arr10.push(strr2);
                                }
                            }else{
                                arr10.push(strr2);
                            };
                        }
                    }
                }
            }else{
                if(strr2!==undefined){
                    $('.number-launch').css('display','none');
                    $('#number-launch').css('display','block');
                    if(arr.length){
                        if(arr.indexOf(strr2)!==-1){
                            // alert('包含了');
                            r21Use();
                            endr2();
                        }else {
                            if(stopArr.length){
                                if(stopArr.indexOf(strr2)!==-1){
                                    // alert('包含了');
                                    r21Use();
                                    endr2();
                                }else {
                                    arr10.push(strr2);
                                }
                            }else{
                                arr10.push(strr2);
                            };
                        }
                    }else{
                        if(stopArr.length){
                            if(stopArr.indexOf(strr2)!==-1){
                                // alert('包含了');
                                r21Use();
                                endr2();
                            }else {
                                arr10.push(strr2);
                            }
                        }else{
                            arr10.push(strr2);
                        };
                    }
                }
            }
            console.log(arr10);
        },4000);
    }
    /*r2结束结束*/
    /*l3结束开始*/
    function endl3() {
        setTimeout(function () {
            clearInterval(tl33);
            if(pl33!==undefined){
                strl3=pl33+'';
            }
        },1000);
        setTimeout(function () {
            clearInterval(tl32);
            if(pl32!==undefined){
                strl3=pl32+strl3;
            }
        },2000);
        setTimeout(function () {
            clearInterval(tl31);
            if(pl31!==undefined){
                strl3=pl31+strl3;
            }
            if(arr10.length!==0){
                console.log(strl3);
                if(arr10.indexOf(strl3)!==-1){
                    if(status==1){
                        // alert('该号码已中奖项，已经重新抽下一个中奖号码!，再点击enter停止抽奖');
                        l31Use();
                        endl3();
                    }else{
                        console.log('请点击空格键开始抽奖或者开始下次抽奖');
                    }
                }else{
                    if(strl3.length==3){
                        $('.number-launch').css('display','none');
                        $('#number-launch').css('display','block');
                        if(arr.length){
                            if(arr.indexOf(strl3)!==-1){
                                // alert('包含了');
                                l31Use();
                                endl3();
                            }else {
                                if(stopArr.length){
                                    if(stopArr.indexOf(strl3)!==-1){
                                        // alert('包含了');
                                        l31Use();
                                        endl3();
                                    }else {
                                        arr10.push(strl3);
                                    }
                                }else{
                                    if(stopArr.length){
                                        if(stopArr.indexOf(strl3)!==-1){
                                            // alert('包含了');
                                            l31Use();
                                            endl3();
                                        }else {
                                            arr10.push(strl3);
                                        }
                                    }else{
                                        arr10.push(strl3);
                                    };
                                };
                            }
                        }else{
                            arr10.push(strl3);
                        }
                    }
                }
            }else{
                if(strl3!==undefined){
                    $('.number-launch').css('display','none');
                    $('#number-launch').css('display','block');
                    if(arr.length){
                        if(arr.indexOf(strl3)!==-1){
                            // alert('包含了');
                            l31Use();
                            endl3();
                        }else {
                            if(stopArr.length){
                                if(stopArr.indexOf(strl3)!==-1){
                                    // alert('包含了');
                                    l31Use();
                                    endl3();
                                }else {
                                    arr10.push(strl3);
                                }
                            }else{
                                arr10.push(strl3);
                            };
                        }
                    }else{
                        if(stopArr.length){
                            if(stopArr.indexOf(strl3)!==-1){
                                // alert('包含了');
                                l31Use();
                                endl3();
                            }else {
                                arr10.push(strl3);
                            }
                        }else{
                            arr10.push(strl3);
                        };
                    }
                }
            }
            console.log(arr10);
        },4000);
    }
    /*l3结束结束*/
    /*r3结束开始*/
    function endr3() {
        setTimeout(function () {
            clearInterval(tr33);
            if(pr33!==undefined){
                strr3=pr33+'';
            }
        },1000);
        setTimeout(function () {
            clearInterval(tr32);
            if(pr32!==undefined){
                strr3=pr32+strr3;
            }
        },2000);
        setTimeout(function () {
            clearInterval(tr31);
            if(pr31!==undefined){
                strr3=pr31+strr3;
            }
            if(arr10.length!==0){
                console.log(strr3);
                if(arr10.indexOf(strr3)!==-1){
                    if(status==1){
                        // alert('该号码已中奖项，已经重新抽下一个中奖号码!，再点击enter停止抽奖');
                        r31Use();
                        endr3();
                    }else{
                        console.log('请点击空格键开始抽奖或者开始下次抽奖');
                    }
                }else{
                    if(strr3.length==3){
                        $('.number-launch').css('display','none');
                        $('#number-launch').css('display','block');
                        if(arr.length){
                            if(arr.indexOf(strr3)!==-1){
                                // alert('包含了');
                                r31Use();
                                endr3();
                            }else {
                                if(stopArr.length){
                                    if(stopArr.indexOf(strr3)!==-1){
                                        // alert('包含了');
                                        r31Use();
                                        endr3();
                                    }else {
                                        arr10.push(strr3);
                                    }
                                }else{
                                    arr10.push(strr3);
                                };
                            }
                        }else{
                            if(stopArr.length){
                                if(stopArr.indexOf(strr3)!==-1){
                                    // alert('包含了');
                                    r31Use();
                                    endr3();
                                }else {
                                    arr10.push(strr3);
                                }
                            }else{
                                arr10.push(strr3);
                            };
                        }
                    }
                }
            }else{
                if(strr3!==undefined){
                    $('.number-launch').css('display','none');
                    $('#number-launch').css('display','block');
                    if(arr.length){
                        if(arr.indexOf(strr3)!==-1){
                            // alert('包含了');
                            r31Use();
                            endr3();
                        }else {
                            if(stopArr.length){
                                if(stopArr.indexOf(strr3)!==-1){
                                    // alert('包含了');
                                    r31Use();
                                    endr3();
                                }else {
                                    arr10.push(strr3);
                                }
                            }else{
                                arr10.push(strr3);
                            };
                        }
                    }else{
                        if(stopArr.length){
                            if(stopArr.indexOf(strr3)!==-1){
                                // alert('包含了');
                                r31Use();
                                endr3();
                            }else {
                                arr10.push(strr3);
                            }
                        }else{
                            arr10.push(strr3);
                        };
                    }
                }
            }
            console.log(arr10);
        },4000);
    }
    /*r3结束结束*/
    /*l4结束开始*/
    function endl4() {
        setTimeout(function () {
            clearInterval(tl43);
            if(pl43!==undefined){
                strl4=pl43+'';
            }
        },1000);
        setTimeout(function () {
            clearInterval(tl42);
            if(pl42!==undefined){
                strl4=pl42+strl4;
            }
        },2000);
        setTimeout(function () {
            clearInterval(tl41);
            if(pl41!==undefined){
                strl4=pl41+strl4;
            }
            if(arr10.length!==0){
                console.log(strl4);
                if(arr10.indexOf(strl4)!==-1){
                    if(status==1){
                        // alert('该号码已中奖项，已经重新抽下一个中奖号码!，再点击enter停止抽奖');
                        l41Use();
                        endl4();
                    }else{
                        console.log('请点击空格键开始抽奖或者开始下次抽奖');
                    }
                }else{
                    if(strl4.length==3){
                        $('.number-launch').css('display','none');
                        $('#number-launch').css('display','block');
                        if(arr.length){
                            if(arr.indexOf(strl4)!==-1){
                                // alert('包含了');
                                l41Use();
                                endl4();
                            }else {
                                if(stopArr.length){
                                    if(stopArr.indexOf(strl4)!==-1){
                                        // alert('包含了');
                                        l41Use();
                                        endl4();
                                    }else {
                                        arr10.push(strl4);
                                    }
                                }else{
                                    arr10.push(strl4);
                                };
                            }
                        }else{
                            if(stopArr.length){
                                if(stopArr.indexOf(strl4)!==-1){
                                    // alert('包含了');
                                    l41Use();
                                    endl4();
                                }else {
                                    arr10.push(strl4);
                                }
                            }else{
                                arr10.push(strl4);
                            };
                        }
                    }
                }
            }else{
                if(strl4!==undefined){
                    $('.number-launch').css('display','none');
                    $('#number-launch').css('display','block');
                    if(arr.length){
                        if(arr.indexOf(strl4)!==-1){
                            // alert('包含了');
                            l41Use();
                            endl4();
                        }else {
                            if(stopArr.length){
                                if(stopArr.indexOf(strl4)!==-1){
                                    // alert('包含了');
                                    l41Use();
                                    endl4();
                                }else {
                                    arr10.push(strl4);
                                }
                            }else{
                                arr10.push(strl4);
                            };
                        }
                    }else{
                        if(stopArr.length){
                            if(stopArr.indexOf(strl4)!==-1){
                                // alert('包含了');
                                l41Use();
                                endl4();
                            }else {
                                arr10.push(strl4);
                            }
                        }else{
                            arr10.push(strl4);
                        };
                    }
                }
            }
            console.log(arr10);
        },4000);
    }
    /*l4结束结束*/
    /*r4结束开始*/
    function endr4() {
        setTimeout(function () {
            clearInterval(tr43);
            if(pr43!==undefined){
                strr4=pr43+'';
            }
        },1000);
        setTimeout(function () {
            clearInterval(tr42);
            if(pr42!==undefined){
                strr4=pr42+strr4;
            }
        },2000);
        setTimeout(function () {
            clearInterval(tr41);
            if(pr41!==undefined){
                strr4=pr41+strr4;
            }
            if(arr10.length!==0){
                console.log(strr4);
                if(arr10.indexOf(strr4)!==-1){
                    if(status==1){
                        // alert('该号码已中奖项，已经重新抽下一个中奖号码!，再点击enter停止抽奖');
                        r41Use();
                        endr4();
                    }else{
                        console.log('请点击空格键开始抽奖或者开始下次抽奖');
                    }
                }else{
                    if(strr4.length==3){
                        $('.number-launch').css('display','none');
                        $('#number-launch').css('display','block');
                        if(arr.length){
                            if(arr.indexOf(strr4)!==-1){
                                // alert('包含了');
                                r41Use();
                                endr4();
                            }else {
                                if(stopArr.length){
                                    if(stopArr.indexOf(strr4)!==-1){
                                        // alert('包含了');
                                        r41Use();
                                        endr4();
                                    }else {
                                        arr10.push(strr4);
                                    }
                                }else{
                                    arr10.push(strr4);
                                };
                            }
                        }else{
                            if(stopArr.length){
                                if(stopArr.indexOf(strr4)!==-1){
                                    // alert('包含了');
                                    r41Use();
                                    endr4();
                                }else {
                                    arr10.push(strr4);
                                }
                            }else{
                                arr10.push(strr4);
                            };
                        }
                    }
                }
            }else{
                if(strr4!==undefined){
                    $('.number-launch').css('display','none');
                    $('#number-launch').css('display','block');
                    if(arr.length){
                        if(arr.indexOf(strr4)!==-1){
                            // alert('包含了');
                            r41Use();
                            endr4();
                        }else {
                            if(stopArr.length){
                                if(stopArr.indexOf(strr4)!==-1){
                                    // alert('包含了');
                                    r41Use();
                                    endr4();
                                }else {
                                    arr10.push(strr4);
                                }
                            }else{
                                arr10.push(strr4);
                            };
                        }
                    }else{
                        if(stopArr.length){
                            if(stopArr.indexOf(strr4)!==-1){
                                // alert('包含了');
                                r41Use();
                                endr4();
                            }else {
                                arr10.push(strr4);
                            }
                        }else{
                            arr10.push(strr4);
                        };
                    }
                }
            }
            console.log(arr10);
        },4000);
    }
    /*r4结束结束*/
    /*l5结束开始*/
    function endl5() {
        setTimeout(function () {
            clearInterval(tl53);
            if(pl53!==undefined){
                strl5=pl53+'';
            }
        },1000);
        setTimeout(function () {
            clearInterval(tl52);
            if(pl52!==undefined){
                strl5=pl52+strl5;
            }
        },2000);
        setTimeout(function () {
            clearInterval(tl51);
            if(pl51!==undefined){
                strl5=pl51+strl5;
            }
            if(arr10.length!==0){
                console.log(strl5);
                if(arr10.indexOf(strl5)!==-1){
                    if(status==1){
                        // alert('该号码已中奖项，已经重新抽下一个中奖号码!，再点击enter停止抽奖');
                        l51Use();
                        endl5();
                    }else{
                        console.log('请点击空格键开始抽奖或者开始下次抽奖');
                    }
                }else{
                    if(strl5.length==3){
                        $('.number-launch').css('display','none');
                        $('#number-launch').css('display','block');
                        if(arr.length){
                            if(arr.indexOf(strl5)!==-1){
                                // alert('包含了');
                                l51Use();
                                endl5();
                            }else {
                                if(stopArr.length){
                                    if(stopArr.indexOf(strl5)!==-1){
                                        // alert('包含了');
                                        l51Use();
                                        endl5();
                                    }else {
                                        arr10.push(strl5);
                                    }
                                }else{
                                    arr10.push(strl5);
                                };
                            }
                        }else{
                            if(stopArr.length){
                                if(stopArr.indexOf(strl5)!==-1){
                                    // alert('包含了');
                                    l51Use();
                                    endl5();
                                }else {
                                    arr10.push(strl5);
                                }
                            }else{
                                arr10.push(strl5);
                            };
                        }
                    }
                }
            }else{
                if(strl5!==undefined){
                    $('.number-launch').css('display','none');
                    $('#number-launch').css('display','block');
                    if(arr.length){
                        if(arr.indexOf(strl5)!==-1){
                            // alert('包含了');
                            l51Use();
                            endl5();
                        }else {
                            if(stopArr.length){
                                if(stopArr.indexOf(strl5)!==-1){
                                    // alert('包含了');
                                    l51Use();
                                    endl5();
                                }else {
                                    arr10.push(strl5);
                                }
                            }else{
                                arr10.push(strl5);
                            };
                        }
                    }else{
                        if(stopArr.length){
                            if(stopArr.indexOf(strl5)!==-1){
                                // alert('包含了');
                                l51Use();
                                endl5();
                            }else {
                                arr10.push(strl5);
                            }
                        }else{
                            arr10.push(strl5);
                        };
                    }
                }
            }
            console.log(arr10);
        },4000);
    }
    /*l5结束结束*/
    /*r5结束开始*/
    function endr5() {
        setTimeout(function () {
            clearInterval(tr53);
            if(pr53!==undefined){
                strr5=pr53+'';
            }
        },1000);
        setTimeout(function () {
            clearInterval(tr52);
            if(pr52!==undefined){
                strr5=pr52+strr5;
            }
        },2000);
        setTimeout(function () {
            clearInterval(tr51);
            if(pr51!==undefined){
                strr5=pr51+strr5;
            }
            if(arr10.length!==0){
                console.log(strr5);
                if(arr10.indexOf(strr5)!==-1){
                    if(status==1){
                        // alert('该号码已中奖项，已经重新抽下一个中奖号码!，再点击enter停止抽奖');
                        r51Use();
                        endr5();
                    }else{
                        console.log('请点击空格键开始抽奖或者开始下次抽奖');
                    }
                }else{
                    if(strr5.length==3){
                        $('.number-launch').css('display','none');
                        $('#number-launch').css('display','block');
                        if(arr.length){
                            if(arr.indexOf(strr5)!==-1){
                                // alert('包含了');
                                r51Use();
                                endr5();
                            }else {
                                if(stopArr.length){
                                    if(stopArr.indexOf(strr5)!==-1){
                                        // alert('包含了');
                                        r51Use();
                                        endr5();
                                    }else {
                                        arr10.push(strr5);
                                    }
                                }else{
                                    arr10.push(strr5);
                                };
                            }
                        }else{
                            if(stopArr.length){
                                if(stopArr.indexOf(strr5)!==-1){
                                    // alert('包含了');
                                    r51Use();
                                    endr5();
                                }else {
                                    arr10.push(strr5);
                                }
                            }else{
                                arr10.push(strr5);
                            };
                        }
                    }
                }
            }else{
                if(strr5!==undefined){
                    $('.number-launch').css('display','none');
                    $('#number-launch').css('display','block');
                    if(arr.length){
                        if(arr.indexOf(strr5)!==-1){
                            // alert('包含了');
                            r51Use();
                            endr5();
                        }else {
                            if(stopArr.length){
                                if(stopArr.indexOf(strr5)!==-1){
                                    // alert('包含了');
                                    r51Use();
                                    endr5();
                                }else {
                                    arr10.push(strr5);
                                }
                            }else{
                                arr10.push(strr5);
                            };
                        }
                    }else{
                        if(stopArr.length){
                            if(stopArr.indexOf(strr5)!==-1){
                                // alert('包含了');
                                r51Use();
                                endr5();
                            }else {
                                arr10.push(strr5);
                            }
                        }else{
                            arr10.push(strr5);
                        };
                    }
                }
            }
            console.log(arr10);
        },4000);
    }
    /*r5结束结束*/
    /***停止10个每组十个结束*/
}
