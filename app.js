function Salvar(){
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let email = document.getElementById('email').value
    let linha = '<tr><td>' + nome + '</td><td>' + sobrenome + '</td><td>' + email + '</td><td>' + senha + '</td><td>' + confirmacao + '</td><td>' + data + '</td><td>' + endereco + '</td><td>' + numero + '</td><td>' + cidade + '</td><td>' + estado + '</td></tr>'
    document.getElementById('clientes').innerHTML +=linha
}