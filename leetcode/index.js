var minMaxDifference = function (num) {
  const splitNum = num.toString().split("");

  const maxDigit = [...splitNum].find((c) => c !== "9");
  const minDigit = splitNum[0];
  let maxstr = "";
  let minstr = "";
  for (let a of splitNum) {
    maxstr += a === maxDigit ? "9" : a;
    minstr += a === minDigit ? "0" : a;
  }
  console.log(splitNum);
  console.log(maxDigit);
  console.log(minDigit);
};

minMaxDifference(901);
