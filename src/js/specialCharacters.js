const arrEn = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const arrRu = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];
export const setUppercase = new Set(arrEn.concat(arrRu));
export const setLowercase = new Set(arrEn.concat(arrRu).map( item => item.toLowerCase()));
export const setNumber = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
export const setSpecialCharacters = new Set(['\'', '@', "!", ">", "<", ",", ".", "?", "^", "#", "(", ")", "~", "`"]);
