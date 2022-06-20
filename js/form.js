let first=document.reservation.first.value;  

function validateForm(){  
  if (first==null || first=="" || first.length<2) {  
    console.log('⛔️ not all conditions are met');
  } else {
    console.log('😀');
  }  
}