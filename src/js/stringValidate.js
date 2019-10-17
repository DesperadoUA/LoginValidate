import {arrLowercase, arrUppercase, arrNumber, arrSpecialCharacters} from "../../src/js/specialCharacters.js";

class stringValidate {
    constructor(Lowercase, Uppercase, Numbers, SpecialCharacters) {
      this.arrLowercase = Lowercase || arrLowercase;
      this.arrUppercase = Uppercase || arrUppercase;
      this.arrNumber = Numbers || arrNumber;
      this.arrSpecialCharacters =  SpecialCharacters || arrSpecialCharacters;
    }
    fewCharacters(str, minValue){
        return str.length >= minValue ? false : true; 
      }
      moreCharacters(str, maxValue){
          return str.length <= maxValue ? false : true; 
      }
      hasSpecialCharacters(str){
          for( let i=0; i<str.length; i++ ) {
              if(this.arrSpecialCharacters.has(str[i])) return true;
            }
            return false;
      }
      hasUppercaseCharacters (str) {
          for( let i=0; i<str.length; i++ ) {
            if(this.arrUppercase.has(str[i])) return true;
          }
          return false;
      }
      hasLowercaseCharacters (str) {
          for( let i=0; i<str.length; i++ ) {
            if(this.arrLowercase.has(str[i])) return true;
          }
          return false;
      }
      hasNumber(str){
          for( let i=0; i<str.length; i++ ) {
              if(this.arrNumber.has(str[i])) return true;
            }
            return false;
      }
      hasEmpty(str){ return str === '' ? true: false; }
  }

export default stringValidate;