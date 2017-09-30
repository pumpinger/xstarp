/**
 * Created by Administrator on 2016/12/20.
 */

//格式化
window.xFormat={
    /**
     *     2016/06/06
     *     2016-06-06
     *     2016/06/06
     *     11:11:11
     *     11:11
     *     20160606
     *     2016 06 06
     */
    str2time:function(str){

        var res=str.replace(/-/g, "/");

        if(  res.indexOf("/")    == -1 ){
            if(  res.indexOf(":")    == -1 ){
                //纯年

                if(res.length == 8){
                    res=res.substr(0,4)+'/'+res.substr(4,2)+'/'+res.substr(6,2);
                }else{


                    var temp =res.substr(0,2);
                    if(  temp<100  &&  temp>30 ){
                        temp  = '19'+temp
                    }

                    if(  temp<30  &&  temp>0 ){
                        temp  = '20'+temp
                    }

                    res=temp+'/'+res.substr(2,2)+'/'+res.substr(4,2);

                }

            }else{
                //纯时间
                res='2016/06/06 '+res;

            }

        }else{
            //处理年
            var temp =res.split('/');
            if(  temp[0]<100  &&  temp[0]>30 ){
                temp[0]  = '19'+temp[0]
            }

            if(  temp[0]<30  &&  temp[0]>0 ){
                temp[0]  = '20'+temp[0]
            }
            res=temp[0]+'/'+temp[1]+'/'+temp[2];

        }


        res=new Date(Date.parse(res));


        if(res.getTime()){
            return  res.getTime()/1000;
        }else{
            return false;
        }



    },
    time2str:function(time){
        var   now=new   Date(time*1000);
        var   year=now.getFullYear();
        var   month=now.getMonth()+1;
        var   date=now.getDate();
        var   hour=now.getHours();
        var   minute=now.getMinutes();
        var   second=now.getSeconds();

        if(month  < 10){
            month=  '0' + month;
        }

        if(date  < 10){
            date=  '0' + date;
        }

        return   year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
    },
    number2money:function (number,n) {
        n = n > 0 && n <= 20 ? n : 2;
        number = parseFloat((number + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var l = number.split(".")[0].split("").reverse(),
            r = number.split(".")[1];
        var t = "";
        for(i = 0; i < l.length; i ++ )
        {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
        }
        return t.split("").reverse().join("") + "." + r;

    },
    number2word:function (number) {


    }
};


