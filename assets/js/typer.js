function RemoveType(selector, opts) {
   var speed = opts.speed || 100;
   var cb = opts.finish || function () {
   };
   var obj = document.querySelector(selector);
   var val = obj.innerHTML;
   var index = val.length - 1;
   var handle = setInterval(function () {
      // check for HTML tags to ignore them
      if (val.charAt(index) === ">") {
         for (var ig = index -1 ; ig >= 0; ig--) {
            if (val.charAt(ig) === "<") {
               index = ig - 1;
               break;
            }
         }
      }

      if (--index <= 0) {
         obj.innerHTML = '';
         clearInterval(handle);
         cb();
      } else {
         obj.innerHTML = (val.substring(0, index - 1));
      }
   }, speed);
}

function Typer(selector, opts) {
   var val = opts.text || '';
   var speed = opts.speed || 100;
   var cb = opts.finish || function () {
   };
   var errors = opts.errors || 0;

   var state = {Typing: 0, Mistake: 1, Correction: 2, Wait: 3};
   var action = state.Typing;
   var last = action;
   var chars = ['qwertzuiop', 'asdfghjkl', 'yxcvbnm'];
   var cursor = '<span class="cursor"></span>';

   var obj = document.querySelector(selector);

   // remove all text
   obj.innerHTML = '';

   var index = 0;
   var handle = setInterval(function () {
      switch (action) {
         case state.Typing:
            // check for HTML tags to ignore them
            var ig;
            if (val.charAt(index) === "<") {
               ig = val.indexOf(">", index);
               index = (ig != -1) ? ig + 1 : index;
            }
            if (val.charAt(index) === "&") {
               ig = val.indexOf(";", index);
               index = (ig != -1) ? ig + 1 : index;
            }

            //# random error cases
            if (index > 0 && last === state.Typing && (Math.random() * 100) < errors) {
               last = action, action = state.Mistake;
               invalid = " ";

               for (var i = 0; i < chars.length; i++) {
                  var to = chars[i].indexOf(val.charAt(index));
                  if (to !== -1) {
                     invalid = ((to + 1) > chars[i].length) ? chars[i].charAt(to - 1) : chars[i].charAt(to + 1);
                     break;
                  }
               }

               obj.innerHTML = (val.substring(0, index - 1) + invalid) + cursor;
            }
            else {
               obj.innerHTML = (val.substring(0, index)) + cursor;
               last = action;
            }

            if (++index > val.length) {
               obj.innerHTML = val;
               clearInterval(handle);
               cb();
            }
            break;
         case state.Mistake:
            index -= 2;
            last = action, action = state.Correction;
            break;
         case state.Correction:
            obj.innerHTML = (val.substring(0, index)) + cursor;
            last = action, action = state.Wait;
            index++;
            break;
         case state.Wait:
            last = action, action = state.Typing;
            break;
      }
   }, speed);
}