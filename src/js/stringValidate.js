class stringValidate {
    constructor(arrLowercase, arrUppercase, arrNumber, arrSpecialCharacters) {
      this.arrLowercase = arrLowercase;
      this.arrUppercase = arrUppercase;
      this.arrNumber = arrNumber;
      this.arrSpecialCharacters =  arrSpecialCharacters;
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
      hasEmpty(str){
         return str === '' ? true: false;
      }
  }

export default stringValidate;