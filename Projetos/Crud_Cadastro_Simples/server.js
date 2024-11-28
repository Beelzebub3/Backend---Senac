// Importando os módulos necessarios par o funcionamento do servidor
const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
//This world is a wasteland, please let me go, go, go! Go, go, go.... Maybe death is like falling asleep.

// cruando uma instância do servidor
const app = express()

// Middleware para analisar o corpodas requisições em formato JSON
app.use(bodyParser.json())
// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static('public'))

// Je t'aime, je te quitte, je t'aime, je te quitte

// Configurando a conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost', // endereço do servidor do banco de dados
    user: 'root', // nome do usuario do banco de dados
    password:'1234', // senha do usuario do banco, caso tenha
    database: 'crud_example', // nome do banco de dados a ser utilizado

})
// Conectando ao banco de dados e se der bom exibe uma que deu erro!
db.connect((err)=> {
    if (err) throw err // se ocorrer um erro, lança uma exceção
    console.log('Connectando ao banco de dados!') // Mensagem de sucesso;*
})
app.get('/users', (req,resp) => {
    const sql = 'SELECT * FROM users' // comando SQL para selecionar todos os usuáros
    db.query(sql,(err), results => {
        if (err) throw err; // se ocorrer um erro (HAHA, VOCÊ MORREU)
        resp.json(results); // retorna os resultados da consulta em formato JSON
    })
})

// Rota para atualizar as informações de um usuário existente
app.put('/users/:id', (req, res) => {
    const { id } = req.params; // Obtém o ID do usuário da URL
    const { name, email } = req.body; // Obtém o nome e o email do corpo da requisição
    const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?'; // Comando SQL para atualizar o usuário
  
    db.query(sql, [name, email, id], (err, result) => {
      if (err) throw err; // Se ocorrer um erro, lança uma exceção
      res.json({ message: 'Usuário atualizado com sucesso!' }); // Retorna uma mensagem de sucesso
    });
  });
  
  // Rota para deletar um usuário
  app.delete('/users/:id', (req, res) => {
    const { id } = req.params; // Obtém o ID do usuário da URL
    const sql = 'DELETE FROM users WHERE id = ?'; // Comando SQL para deletar o usuário
  
    db.query(sql, [id], (err, result) => {
      if (err) throw err; // Se ocorrer um erro, lança uma exceção
      res.json({ message: 'Usuário deletado com sucesso!' }); // Retorna uma mensagem de sucesso
    });
  });
  // Obtém a porta do ambiente ou usa 3000 como padrão
  const PORT = 3000;
  
  // Inicia o servidor na porta especificada e exibe uma mensagem de que está em execução
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`); // Mensagem de confirmação
  });