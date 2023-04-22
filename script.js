const textoPrincipal = document.getElementById("texto1");
const msg = document.getElementById("texto2");


function buttonEncriptar() {
  const textoEncriptado = encripitar(textoPrincipal.value);
  msg.value = textoEncriptado;
  textoPrincipal.value = "";

}

function encripitar(msgEncriptada) {

  let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]
  msgEncriptada = msgEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (msgEncriptada.includes(matrizCodigo[i][0])) {
      msgEncriptada = msgEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return msgEncriptada;

}

function buttonDesencriptar() {
  const textDescription = desencripitar(textoPrincipal.value);
  msg.value = textDescription;
  textoPrincipal.value = "";

}

function desencripitar(msgEncriptada) {

  let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]
  msgEncriptada = msgEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (msgEncriptada.includes(matrizCodigo[i][1])) {
      msgEncriptada = msgEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return msgEncriptada;

}


function copiarTexto(){
  let textoCopiado = document.getElementById("texto2");

  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");

  alert("O texto foi copiado para a área de transferência.");
}
