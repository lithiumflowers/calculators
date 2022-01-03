window.onload =  function() {
        let way_res = [];
        let txt = document.getElementsByClassName("txt")[0];
        let btn = document.getElementsByClassName("btn");
        let btn_click = document.getElementsByClassName("btn_click");

        function strip(num, precision = 12) {
            return +parseFloat(num.toPrecision(precision));
        };

        for(let i = 0;i < btn_click.length;i++){
            btn_click[i].onclick = function() {
                if(this.value == "AC" ){    //清空键
                    way_res = [];
                    txt.value = "";
                }
                else{
                    txt.value = txt.value.substr(0, txt.value.length - 1);
                }
            }
        }
        for(let i = 0;i < btn.length;i++){
            btn[i].onclick = function() {
                if(txt.value == "" && this.value == "."){
                    txt.value = "0.";
                }
                else{
                    if(!isNaN(this.value) || this.value == "."){
                        //输入数值或小数点时
                        txt.value += this.value;
                    }
                    else{
                        //输入符号时
                        if(this.value != "="){
                            way_res[way_res.length] = txt.value;
                            way_res[way_res.length] = this.value;
                            txt.value = "";
                        }
                        else{            //输入等号时
                            way_res[way_res.length] = txt.value;
                            txt.value = strip(eval(way_res.join("")));
                            way_res = [];
                        }
                    }
                }
            }
        }
}
