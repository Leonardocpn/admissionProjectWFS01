function valida_email(){
    var nome = document.getElementById("campo_email").value;
    // a@a.com
    // lastIndexOf - traz a ultima posição de um caracter na string
    // se um email tiver o @ antes do . ou tiver menos q 7 letras ou nao tiver pelo menos um . retorna falso
	if(campo_email.value.indexOf("@") > campo_email.value.lastIndexOf(".") || campo_email.value.length <7 ||
    campo_email.value.indexOf(".")<=0){
    alert("Email invalido!");
    campo_email.focus()
    return false;
    }
    document.getElementById("bem_vindo").innerHTML = "\n Bem vindo " + nome;
    alert("O email " + nome + " foi enviado");
}