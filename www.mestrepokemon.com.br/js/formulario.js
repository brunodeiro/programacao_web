var enviar = document.getElementById("enviar");
enviar.setAttribute("onclick", "exibirDadosDigitados()")

function exibirDadosDigitados(){

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var mensagem = document.getElementById("mensagem").value;

    window.confirm(
        `
        - Nome: ${nome}
        - Email: ${email}
        - Telefone: ${telefone}
        - Mensagem: ${mensagem}
        `
    )

}

