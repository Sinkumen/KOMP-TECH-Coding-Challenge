import CryptoJS from 'crypto-js';

// Define an object that contains four functions for performing basic statistical calculations
const funcs: any = {
  // SHA function simply returns an array of the values in the 'values' object
  // without performing any calculations. It also logs the values to the console.
  sha256: (values: object) => {
    const vals: any = Object.values(values);
    // Concatenate the two strings with a delimiter
    const combinedString = vals[0] + '|' + vals[1];

    // Hash the combined string using SHA256
    const uniqueHash = CryptoJS.SHA256(combinedString).toString();

    return uniqueHash;
  },
  // Mean function calculates the mean (average) of the values in the 'values' object,
  // by summing the values and dividing by the number of values.
  mean: (values: object) => {
    const vals: any = Object.values(values);
    console.log(vals);
    var total = 0;
    for (var key in vals) {
      total += Number(vals[key]);
    }
    var meanVal = total / vals.length;
    return meanVal;
  },
  // Median function calculates the median (middle value) of the values in the 'values' object,
  // by sorting the values and then returning either the middle value (if there are an odd number of values)
  // or the average of the two middle values (if there are an even number of values).
  median: (values: object) => {
    const vals: string[] = Object.values(values);
    vals.sort((a: any, b: any) => a - b);

    const middle = Math.floor(vals.length / 2);

    if (vals.length % 2 === 0) {
      return (Number(vals[middle - 1]) + Number(vals[middle])) / 2;
    }

    return vals[middle];
  },
  // Standard deviation function calculates the standard deviation of the values in the 'values' object,
  // by first calculating the mean (average) of the values, and then calculating the square root of the sum
  // of the squared differences between each value and the mean, divided by the number of values minus one.
  sd: (values: object) => {
    const vals: any = Object.values(values);
    // CALCULATE AVERAGE
    var total = 0;
    for (var key in vals) {
      total += Number(vals[key]);
    }
    var meanVal = total / vals.length;
    // CALCULATE AVERAGE

    // CALCULATE STANDARD DEVIATION
    var temp = 0;
    for (var key in vals) {
      temp += Math.pow(parseFloat(vals[key]) - meanVal, 2);
    }
    var sd = Math.sqrt(temp / (vals.length - 1));
    // CALCULATE STANDARD DEVIATION

    return sd;
  },
};

// Export the object of statistical functions for use in other modules
export default funcs;
