$(function(){

window.onload = function(){
// 初期設定
//ここにコンマ区切りで画像を追加していく。何枚でもOK
var bgImages = ["pic-1.jpg","pic-2.jpg","pic-3.jpg"];
// htmlファイルから画像までのパス(フォルダ名)。この場合imageというフォルダの1.jpg〜4.jpg。名前は変えて下さい。
var path = "photos/";
var i = 0;
// 最大数
var max = bgImages.length-1;
// 切り替わる速度(1000 = 1秒)
var timer = 5000; 

// ここから画像の変更
setInterval(function(){
if(i < max){// 画像が一番最後のものになるまでiをプラス
i++;
}else{// 一番最後の画像になったら最初に戻る
i=0;
}
// 背景を設定
document.getElementsByTagName("header")[0].style.backgroundImage = "url("+path + bgImages[i]+")";
},timer)
}

});