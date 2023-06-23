function concatenarNum(numero) {
  document.getElementById('valoractual').value+=numero;  
}

function calcularOperacion(){
  let resultado=eval(document.getElementById('valoractual').value);
  document.getElementById('valoractual').value=resultado

}
function borrarNum(){
  document.getElementById('valoractual').value="";
}