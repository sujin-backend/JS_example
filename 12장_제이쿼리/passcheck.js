$(document).ready(function(){
                $("input[name=pwd]").blur(function(){
                    var check = /^[a-zA-Z0-9]{4,10}/g;
                    var result = check.test($(this).val());
                    if(result){
                        $("#d1").show().text("사용할 수 있는 비밀번호입니다.").css("color","blue");
                    }else{
                        $("#d1").show().text("사용할 수 없는 비밀번호입니다.").css("color","red");
                    }
                });
                $("input[name=pwdRe]").blur(function(){
                    var pwd = $("input[name=pwd]").val();
                    var pwdRe = $(this).val();
                    if(pwd==pwdRe){
                        $("#d2").show().text("비밀번호가 일치합니다.").css("color","blue");
                    }else{
                        $("#d2").show().text("비밀번호가 일치하지 않습니다.").css("color","red");
                    }
                });
                
            });