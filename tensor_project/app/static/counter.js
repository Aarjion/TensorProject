const div = document.getElementById('room');

function dublicateForm(){
  let forms = div.getElementsByClassName('room_renovation');
  let firstForm = forms[0];
  let formClone = firstForm.cloneNode(true);
  div.appendChild(formClone);
}







// var vue = new Vue ({
//     el: "#app",
//     data: {
//       text: 'Hi Kate !!!' 
//     },
//     methods: {
   
//     }
// });
