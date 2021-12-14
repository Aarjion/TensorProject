var select = document.getElementById('input_wall');

select.onchange = function() {
  alert("FGHJKzjuhytrdes")
  var indexSelected = select.selectedIndex,
      option = select.querySelectorAll('option')[indexSelected];

  var selectedId = option.getAttribute('value');
  if( selectedId == 'л' ){
        document.getElementById('select2_id1').style.display = 'block';
        alert("AAAAAAAAAAA");
      }
};




// const div = document.getElementById('room');

// function dublicateForm(){
//   let forms = div.getElementsByClassName('room_renovation');
//   let firstForm = forms[0];
//   let formClone = firstForm.cloneNode(true);
//   div.appendChild(formClone);
// }


// var select = document.getElementById('input_ceiling');

// select.onchange = function() {
//   var indexSelected = select.selectedIndex,
//       option = select.querySelectorAll('option')[indexSelected];
      
//   var selected_val = option.getAttribute('value');
//   selected_val = document.getElementById("input_ceiling").value;
//   console.log(selected_val)
//   if( selected_val == "шт" ) {
//     document.getElementById('select1_id1').style.display = 'block';
//     document.getElementById('select1_id2').style.display = 'none';
//   }


//   if( selected_val == "м" ) 
//   {
//     document.getElementById('select1_id2').style.display = 'block';
//     document.getElementById('select1_id1').style.display = 'none';

//   } 


//   // if( selected_val == '3' ) alert(3);
//   // if( selected_val == '4' ) alert(4);
//   // if( selected_val == '5' ) alert(5);
//   // if( selected_val == '6' ) alert(6);
// };


// var select2 = document.getElementById('input_wall');

// select2.onchange = function() {
//   var indexSelected = select2.selectedIndex,
//       option = select2.querySelectorAll('option')[indexSelected];
      
//   var selectedId = option.getAttribute('id');
  
//   if( selectedId == '1' ) {
//     document.getElementById('select2_id1').style.display = 'block';
//     document.getElementById('select2_id2').style.display = 'none';
//   }


//   if( selectedId == '2' ) 
//   {
//     document.getElementById('select2_id2').style.display = 'block';
//     document.getElementById('select2_id1').style.display = 'none';

//   } 


//   // if( selectedId == '3' ) alert(3);
//   // if( selectedId == '4' ) alert(4);
//   // if( selectedId == '5' ) alert(5);
//   // if( selectedId == '6' ) alert(6);
// };










// // var vue = new Vue ({
// //     el: "#app",
// //     data: {
// //       text: 'Hi Kate !!!' 
// //     },
// //     methods: {
   
// //     }
// // });

