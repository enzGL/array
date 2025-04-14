let nomeClientes = new Array()

nomeClientes.push('Enzo')
nomeClientes.push('Murilo')
nomeClientes.push('Gustavo')
nomeClientes.push('Luiz')
nomeClientes.push('Felipe')

console.dir(nomeClientes)
document.getElementById("conteudo").innerHTML = "<ul>"
document.getElementById("conteudo").innerHTML += "<li>" + nomeClientes[0] + "</li>" 
document.getElementById("conteudo").innerHTML += "<li>" + nomeClientes[1] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + nomeClientes[2] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + nomeClientes[3] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + nomeClientes[4] + "</li>"
document.getElementById("conteudo").innerHTML += "</ul>"