let inputRegex = /[a-z]+|[^a-z]+/gi

function ConvertHandler() {

  this.getNum = function (input) {
    var result;

    result = input.match(inputRegex)[0]

    let numberRegex = /\d/

    if (numberRegex.test(result) === false) {
      result = 1
    }

    if (result.toString().includes('/')) {
      let values = result.toString().split('/')
      if (values.length != 2) {
        return 'invalid number'
      }
      values[0] = parseFloat(values[0])
      values[1] = parseFloat(values[1])
      result = parseFloat((values[0] / values[1]).toFixed(5))
    }

    if (isNaN(result)) {
      return 'invalid number'
    }

    return result;
  };

  this.getUnit = function (input) {
    var result;

    result = input.match(inputRegex)[1]

    if (!result) {
      result = input.match(inputRegex)[0]
    }

    let validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg']

    if (!validUnits.includes(result.toLowerCase())) {
      return 'invalid unit'
    }

    return result.toLowerCase() === 'l' ? 'L' : result.toLowerCase();
  };

  this.getReturnUnit = function (initUnit) {
    var result;

    switch (initUnit.toLowerCase()) {
      case 'gal':
        result = 'L';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      default:
        result = 'invalid unit';
    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    var result;

    switch (unit.toLowerCase()) {
      case 'gal':
        result = 'gallons';
        break;
      case 'l':
        result = 'liters';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
      default:
        result = 'invalid unit';
    }

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    switch (initUnit.toLowerCase()) {
      case 'gal':
        result = (initNum * galToL).toFixed(5);
        break;
      case 'l':
        result = (initNum / galToL).toFixed(5);
        break;
      case 'lbs':
        result = (initNum * lbsToKg).toFixed(5);
        break;
      case 'kg':
        result = (initNum / lbsToKg).toFixed(5);
        break;
      case 'mi':
        result = (initNum * miToKm).toFixed(5);
        break;
      case 'km':
        result = (initNum / miToKm).toFixed(5);
        break;
      default:
        result = 'invalid unit';
    }

    return parseFloat(result);
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    var result;

    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit)}`;

    return result;
  };
}

module.exports = ConvertHandler;