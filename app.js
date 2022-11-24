function Salvar(){
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let email = document.getElementById('email').value
    let linha = '<tr><td>' + nome + '</td><td>' + sobrenome + '</td><td>' + email + '</td></tr>'
    document.getElementById('clientes').innerHTML +=linha
}