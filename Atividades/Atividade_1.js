// importando o express
const express = require('express')
// criando uma instância entre do aplicativo express
const app = express();

// definindo uma rota para o endpoint rauiz ('/')
// quando uma solicitação GET é feita para '/', essa função é executada
app.get('/', function (request, response){
    // retorna uma resposta na forma JSON com uma mensagem de boas vindas
    return response.json({
        message: 'Muito boa noite senhoras e senhores, sejam bem vindos a livraria Halloween, apenas conhecimentos ocultos!!!'
    })
})
// definindo uma rota para o endpoint 'books'
// quando uma solicitação GET é feita '/books', a função a seguir é executada
app.get('/books', function(request, response){
    return response.json([ 'Senhor dos Aneis', 'Harry Potter: O Enigma do Príncipe'
])
})
// definindo uma rota para criar um novo livro
// quando uma solicitação do tipo POST é feita para '/books'
app.post('/books', function (request, response){
    //retorna uma mensagem com uma lista de livros. incluindo o novo livro
    return response.json(['Senhor dos Aneis', 'Harry Potter: O Enigma do Príncipe', 'Sherlock Holmes: Um Enigma Em Vermelho'])
})

// definindo uma rota para atualizar um livro específico
// o ':id' é um parâmetro de rota
app.put('/books/:id', function(request, response){
    // retorna uma resposta JSON com a lista de livros atualizada
    return response.json(['Ordem Paranormal: Iniciação', 'Harry Potter: O Enigma do Príncipe', 'Sherlock Holmes: Um Enigma Em Vermelho'])
})
app.delete('/books/:id', function(request, response){ 
    return response.json (['Harry Potter: O Enigma do Príncipe', 'Sherlock Holmes: Um Enigma Em Vermelho'])
})
// iniciando o servidor na porta 5000 (para orientar no terminal 
// que o servidor foi iniciado, vamos colocar uma mensagem)
app.listen(5000, () => {
    console.log('Servidor iniciando na porta 5000')
})