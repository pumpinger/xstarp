/**
 * Created by Administrator on 2017/1/5.
 */

;(function () {

    window.xTime = gettime();

    function gettime(date) {
        var psecond = 1000,
            pminute = 60*psecond,
            phour = 60*pminute,
            pday = 24*phour,
            pweek = 7*pday,
            pmonth = 30*pday,
            pyear = 365*pday;

        console.log('pday',pday,'pweek',pweek,'pmonth',pmonth,'pyear',pyear);

        var nowDate = new Date();
        if(date){
            nowDate = date;
        }

        var now = nowDate.getTime(),
            ms = nowDate.getMilliseconds(),
            second = nowDate.getSeconds(),
            minute = nowDate.getMinutes(),
            hour = nowDate.getHours(),
            dw = nowDate.getDay(),
            dm = nowDate.getDate(),
            month = nowDate.getMonth(),
            year = nowDate.getFullYear();

        var dayP = hour*phour + minute*pminute+ second,
            dayL = pday - dayP,
            dayS = now - dayP,
            dayE = now + dayL;


        return {
            dayStart: function () {
                return dayS;
            }
        }
    }

})();