var myinput = document.getElementById('inp');

myinput.onfocus = (function (){
    'use strict';
    
    this.setAttribute('data-place',this.getAttribute('placeholder'));
    this.setAttribute('placeholder','');
})();

myinput.onblur = (function (){
    'use strict';
    
    this.setAttribute('placeholder',this.getAttribute('data-place'));
    this.setAttribute('data-place','');
})();