import obj_eror from "../../src/js/error.js";
import Validate from "../../src/js/stringValidate.js";

jQuery(document).ready(function() {
    const stringValidate = new Validate();
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
      if(stringValidate.fewCharacters(loginValue, 3)) arrError.push("loginFewCharacters");
      if(stringValidate.moreCharacters(loginValue, 20)) arrError.push("loginMoreCharacters");
      if(stringValidate.hasSpecialCharacters(loginValue)) arrError.push("loginSpecialCharacters");
      if(stringValidate.fewCharacters(passwordValue, 5)) arrError.push("passwordFewCharacters");
      if(stringValidate.moreCharacters(passwordValue, 20)) arrError.push("passwordMoreCharacters");
      if(!stringValidate.hasUppercaseCharacters(passwordValue)) arrError.push("passwordUppercaseCharacters");
      if(!stringValidate.hasLowercaseCharacters(passwordValue)) arrError.push("passwordLowercaseCharacters");
      if(!stringValidate.hasNumber(passwordValue)) arrError.push("passwordNumberCharacters");
      if(!stringValidate.hasSpecialCharacters(passwordValue)) arrError.push("passwordSpecialCharacters");
      if(stringValidate.hasEmpty(loginValue)) arrError.push("emptyFieldLogin");
      if(stringValidate.hasEmpty(passwordValue)) arrError.push("emptyFieldPassword");
      
      if(arrError.length === 0) {
        jQuery(".error").html("");
        alert("You’re welcome!");
      } else writeError(arrError);
    }
    function writeError ( arrError ) {
      if(arrError.includes("emptyFieldLogin")) jQuery(".wrapper_input").eq(0).addClass("empty_input");
      if(arrError.includes("emptyFieldPassword")) jQuery(".wrapper_input").eq(1).addClass("empty_input");
      let strCod="";
      arrError.forEach(error => strCod+=`<p>${obj_eror[error]}</p>`);
      jQuery(".error").html(strCod);
    }
  });
  