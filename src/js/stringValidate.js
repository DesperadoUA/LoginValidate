import {setLowercase, setUppercase, setNumber, setSpecialCharacters} from "../../src/js/specialCharacters.js";

class stringValidate {
    constructor(Uppercase, Numbers, SpecialCharacters) {
      this.setUppercase = Uppercase || setUppercase;
      if(Uppercase != undefined) {
        this.setLowercase = new Set(Array.from(Uppercase).map(item => item.toLowerCase()));
      } else {
        this.setLowercase = setLowercase;
      }
      this.setNumber = Numbers || setNumber;
      this.setSpecialCharacters =  SpecialCharacters || setSpecialCharacters;
    }
    fewCharacters(str, minValue){
        return str.length >= minValue ? false : true; 
      }
      moreCharacters(str, maxValue){
          return str.length <= maxValue ? false : true; 
      }
      hasSpecialCharacters(str){
          for( let i=0; i<str.length; i++ ) {
              if(this.setSpecialCharacters.has(str[i])) return true;
            }
            return false;
      }
      hasUppercaseCharacters (str) {
          for( let i=0; i<str.length; i++ ) {
            if(this.setUppercase.has(str[i])) return true;
          }
          return false;
      }
      hasLowercaseCharacters (str) {
          for( let i=0; i<str.length; i++ ) {
            if(this.setLowercase.has(str[i])) return true;
          }
          return false;
      }
      hasNumber(str){
          for( let i=0; i<str.length; i++ ) {
              if(this.setNumber.has(str[i])) return true;
            }
            return false;
      }
      hasEmpty(str){ return str === '' ? true: false; }
  }

export default stringValidate;