
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')    
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        
        form.addEventListener('submit', function (event) { 
          const password2 = document.getElementById('password2');
          const password1 = document.getElementById('password1');
          
          if (password2.value === password1.value && password1.value.length > 0 && password2.value.length > 0) {
            console.log("son iguales")   
            document.querySelector('#segundacontraseña').style.display = 'none'; 
           document.querySelector('#password2').style = 'was-validated';

          } else {
            event.preventDefault()
            console.log('son distintas')
            document.querySelector('#segundacontraseña').style.display = 'block';
            document.querySelector('#password2').style.border = 'solid 1px red'
            
          };


         if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
         } 
            form.classList.add('was-validated') 
        }, false) 
      })
  })()
  
  function checkBoxValid(){
  const terminos = document.getElementById('terminos').checked;
  if (terminos){
    document.querySelector('label.terminos').style.display = 'none';
  } else {
    document.querySelector('label.terminos').style.display = 'block';
  }
  ; };


