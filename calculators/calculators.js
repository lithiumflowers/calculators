 /*在网页加载时  给按钮添加点击事件*/
window.onload = function () {
        let way_res = [];
        let txt = document.getElementsByClassName("txt");
        let btn = document.getElementsByClassName("btn");
        let btn_click = document.getElementsByClassName("btn_click");

        for(let i = 0;i < btn_click;i ++){
            btn_click.onclick = function(){
                if(this.value == "AC" ){
                    way_res = [];
                    txt.value = "";
                }
                else{}
            }
        }
        for(let i = 0;i < way_res.length;i ++){}
}
