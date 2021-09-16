import React from "react";

import { withTranslation } from "react-i18next";
class Footer extends React.Component {
  twoSum = (num) => {
    var lookup = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I",
      },
      roman = "",
      i;
    for (i in lookup) {
      while (num >= lookup[i]) {
        roman += i;
        num -= lookup[i];
      }
    }
    console.log(roman);
    return roman;
  };
  render() {
    // let firstArray = [2, 4, 3];
    // firstArray = firstArray.reverse();

    // var i;
    // var b;
    // for (i = 0; i < firstArray.length; i++) {
    //   console.log(firstArray[i]);
    //   for (b = 0; i < firstArray.length; i++) {
    //     console.log(firstArray[i]);
    //   }
    // }
    this.twoSum("LVIII");
    return <div className="footer"></div>;
  }
}

export default withTranslation("common")(Footer);
