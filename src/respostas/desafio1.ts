// Resposta 1
const funcionario = {
    codigo: 22,
    nome: 'Ronaldo'
};

// Resposta 2
const funcionario2: {codigo: number, nome: string} = {
    codigo: 22,
    nome: 'Ronaldo'
}

// Respostas 3 e 4
interface Funcionario {
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 22;
funcionarioObj.nome = 'Ronlado';

const funcionarioObj2: Funcionario = {
    codigo: 22,
    nome: 'Ronaldo'
}