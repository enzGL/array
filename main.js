let nomeClientes = new Array()

nomeClientes.push('Enzo')
nomeClientes.push('Murilo')
nomeClientes.push('Gustavo')
nomeClientes.push('Luiz')
nomeClientes.push('Felipe')

console.dir(nomeClientes)

document.getElementById("conteudo").innerHTML = nomeClientes[0] + ' - ' 
document.getElementById("conteudo").innerHTML += nomeClientes[1] + ' - '
document.getElementById("conteudo").innerHTML += nomeClientes[2] + ' - '