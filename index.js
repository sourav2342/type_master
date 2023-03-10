function textGenerator() {
  let result = "";
  let charset = "ABC DEF GHI JKLM NOP QRSTU VWXY Zab  cdefgh ijk lm nopq rstu vwx yz ";
  let charLength = charset.length;


  for (let i = 0; i < 30; i++) {
    result += charset.charAt(Math.floor(Math.random() * charLength));
  }

  return result;

}

$("p").text(textGenerator());
