// Método simples
document.body.innerHTML += `
    <h1 id="titulo">Loja Virtual</h1>
    <div id="produto">
        <h2>Nome do Produto</h2>
        <p>Descrição detalhada do produto que está à venda.</p>
        <p>Preço: R$ 99,99</p>
        <img src="https://via.placeholder.com/150" alt="Imagem do Produto">
    </div>
`;

// Método complexo
// Criando e adicionando o título
const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.innerText = 'Loja Virtual';
document.body.appendChild(titulo);

// Criando o contêiner do produto
const produto = document.createElement('div');
produto.id = 'produto';

// Criando o nome do produto
const nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Nome do Produto';
produto.appendChild(nomeProduto);

// Criando a descrição do produto
const descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Descrição detalhada do produto que está à venda.';
produto.appendChild(descricaoProduto);

// Criando o preço do produto
const precoProduto = document.createElement('p');
precoProduto.innerText = 'Preço: R$ 99,99';
produto.appendChild(precoProduto);

// Criando a imagem do produto
const imagemProduto = document.createElement('img');
imagemProduto.src = 'https://via.placeholder.com/150';
imagemProduto.alt = 'Imagem do Produto';
produto.appendChild(imagemProduto);

// Adicionando o contêiner do produto ao corpo do documento
document.body.appendChild(produto);
