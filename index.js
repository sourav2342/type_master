//generates random text;
function textGenerator() {
  let result = "";
  let charset = "ABC DEF GHI JKLM NOP QRSTU VWXY Zab  cdefgh ijk lm nopq rstu vwx yz ";
  let charLength = charset.length;


  for (let i = 0; i < 30; i++) {
    result += charset.charAt(Math.floor(Math.random() * charLength));
  }

  return result;

}

let str="",i=0,wrg=0;

// when refresh btn is pressed shiftes the position of blocks using addclass
$(".ref_btn").click(function(){
    $(".type_area").addClass("type_shift");
    $(".ref_btn").addClass("ref");
    $("#text").addClass("text_diplay");
    str = textGenerator();
    $("#text").text(str);
    wrg=0,i=0;
});


$(".type_area").keypress(function(e){

   if(e.keyCode == 8){
     i--;
   }

   if(e.key != str.charAt(i) && e.keyCode != 8 ){
     wrg++;
     console.log("pressed wrong key"+ i);
     i++;
   }

   if(i==str.length){
     console.log("Wrong Keys pressed:" +wrg);
     i=0;
     $(".type_area").removeClass("type_shift");
     $(".ref_btn").removeClass("ref");
     $("#text").removeClass("text_diplay");
   }

});


// removes the text in input tag when a space is pressed
$(".type_area").keypress(function(e){
    if(e.keyCode == 32)e.target.value = "";
});
