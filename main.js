$(document).ready(function(){
    /*最初は＋-×÷は入力できない*/
    $(".btnOperator").prop("disabled","false");

    /*数字をクリックすると画面に表示される。*/
    $(".btnNum").click(function(){
        /*02や07のような表記にならないようにする*/
        let moniter=$("#moniter").text();
        if(moniter==="0"){                        /*==== 修正　moniter==0　→　moniter==="0" ==*/ 
            $("#moniter").empty();}
            
        let num= $(this).text();
        $("#moniter").append(num);
        $(".btn").removeAttr("disabled");
    });

    /*＋-×÷をクリックすると画面に表示される。＋-×÷、00、＝、小数点は入力を入力できなくする*/
    $(".btnOperator").click(function(){
        let num= $(this).text();
        $("#moniter").append(num);
        $(".btn").removeAttr("disabled");
        $(".btnOperator").prop("disabled","false");
        $("#num00").prop("disabled","false");
        $("#equal").prop("disabled","false")
        $("#point").prop("disabled","false")
    })
    /*ACをクリックするとmoniterの表示を消す。＋-×÷、00は入力を入力できなくする*/
    $("#AC").click(function(){
        $("#moniter").empty();
        $(".btn").removeAttr("disabled");
        $(".btnOperator").prop("disabled","false");
        $("#num00").prop("disabled","false");
    })    

    /*＝をクリックすると計算する。moniterの表示を消して、計算結果を表示する。*/
    $("#equal").click(function(){
        let calc=$("#moniter").text();
        let result=eval(calc);
        $("#moniter").text(result);
        $(".btn").removeAttr("disabled");
    })
    /*小数点をクリックすると、＋-×÷,=,小数点は入力できない*/
    $("#point").click(function(){
        let num= $(this).text();
        $("#moniter").append(num);
        $(".btn").removeAttr("disabled");
        $(".btnOperator").prop("disabled","false");
        $("#equal").prop("disabled","false");
        $("#point").prop("disabled","false");
    })
    /*00をクリックした時、モニターの表示が0ならそのまま0。
    モニターに表示されていないなら、クリックした時に0が表示される*/
    $("#num00").click(function(){
        let moniter=$("#moniter").text();
        if(moniter=="0"){
            $("#moniter").text(0);    
        }
        else if(moniter==""){
            $("#moniter").text(0); 
        }
    })
    /*クリックボタンの色が0.1秒濃くなる*/
    $(".btn").click(function(){
        $(this).addClass("bunColor");
        setTimeout(()=>{$(this).removeClass("bunColor")},100)
    })

    /*ボタンの上に乗るとカーソルの形が変わる*/
    $(".btn").hover(function(){
        $(this).css("cursor","pointer")
    })

})