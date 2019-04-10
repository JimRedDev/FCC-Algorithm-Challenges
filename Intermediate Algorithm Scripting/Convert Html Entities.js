/* Intermediate Algorithm Scripting: Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. */

function convertHTML(str) {
    var newStr = '';
    for(let i = 0; i < str.length; i++) {
      if(/[&<>"']/.test(str[i])) {
        switch (str[i]) {
          case '&':
            newStr += '\&amp;';
            break;
          case '<':
            newStr += '\&lt;';
            break;
          case '>':
            newStr += '\&gt;';
            break;
          case '"':
            newStr += '\&quot;';
            break;
          case '\'':
            newStr += '\&apos;';
            break;
        }
      }else {
        newStr += str[i];
      }
    }
    return newStr;
  }
  
  convertHTML("Dolce & Gabbana");