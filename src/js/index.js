import obj_eror from "../../src/js/error.js";
import {arrLowercase, arrUppercase, arrNumber, arrSpecialCharacters} from "../../src/js/specialCharacters.js";
jQuery(document).ready(function() {
    jQuery("#submite").click(function(){
      const loginValue = jQuery("#login").val();
      const passwordValue = jQuery("#password").val(); 
      dataValidate(loginValue, passwordValue);
    });

    jQuery("input").focus(function(){
      jQuery(".wrapper_input").removeClass("empty_input");
    });

    function dataValidate(loginValue, passwordValue){
      let arrError=[];
      if(loginFewCharacters(loginValue)) arrError.push("loginFewCharacters");
      if(loginMoreCharacters(loginValue)) arrError.push("loginMoreCharacters");
      if(loginSpecialCharacters(loginValue)) arrError.push("loginSpecialCharacters");
      if(passwordFewCharacters(passwordValue)) arrError.push("passwordFewCharacters");
      if(passwordMoreCharacters(passwordValue)) arrError.push("passwordMoreCharacters");
      if(passwordUppercaseCharacters(passwordValue)) arrError.push("passwordUppercaseCharacters");
      if(passwordLowercaseCharacters(passwordValue)) arrError.push("passwordLowercaseCharacters");
      if(passwordNumberCharacters(passwordValue)) arrError.push("passwordNumberCharacters");
      if(passwordSpecialCharacters(passwordValue)) arrError.push("passwordSpecialCharacters");
      if(emptyFieldLogin(loginValue)) arrError.push("emptyFieldLogin");
      if(emptyFieldPassword(passwordValue)) arrError.push("emptyFieldPassword");
      
      if(arrError.length === 0) {
        jQuery(".error").html("");
        alert("You’re welcome!");
      } else writeError(arrError);
    }
    function writeError ( arrError ) {
      let strCod="";
      arrError.forEach(error => strCod+=`<p>${obj_eror[error]}</p>`);
      jQuery(".error").html(strCod);
    }
    function loginFewCharacters ( loginValue ) {
      if(loginValue.length<3) return true;
      else return false;
    }
    function loginMoreCharacters ( loginValue ) {
      if(loginValue.length>20) return true;
      else return false;
    }
    function loginSpecialCharacters ( loginValue ) {
      for( let i=0; i<loginValue.length; i++ ) {
        if(arrSpecialCharacters.has(loginValue[i])) return true;
      }
      return false;
    }
    function passwordFewCharacters( passwordValue ) {
      if(passwordValue.length<5) return true;
      else return false;
    }
    function passwordMoreCharacters ( passwordValue ) {
      if(passwordValue.length>20) return true;
      else return false;
    }
    function passwordUppercaseCharacters ( passwordValue ) {
      for( let i=0; i<passwordValue.length; i++ ) {
        if(arrUppercase.has(passwordValue[i])) return false;
      }
      return true;
    }
    function passwordLowercaseCharacters ( passwordValue ) {
        for( let i=0; i<passwordValue.length; i++ ) {
          if(arrLowercase.has(passwordValue[i])) return false;
        }
        return true;
    }
    function passwordNumberCharacters ( passwordValue ) {
      for( let i=0; i<passwordValue.length; i++ ) {
        if(arrNumber.has(passwordValue[i])) return false;
      }
      return true;
    }
    function emptyFieldLogin(loginValue) {
      if(loginValue === '') {
        jQuery(".wrapper_input").eq(0).addClass("empty_input");
        return true;
      } else {
        return false;
      }
    }
    function emptyFieldPassword( passwordValue ) {
      if(passwordValue === '') {
        jQuery(".wrapper_input").eq(1).addClass("empty_input");
        return true;
      } else {
        return false;
      }
    }
    function passwordSpecialCharacters( passwordValue ){
      for( let i=0; i<passwordValue.length; i++ ) {
        if(arrSpecialCharacters.has(passwordValue[i])) return false;
      }
      return true;
    }

  });
  
