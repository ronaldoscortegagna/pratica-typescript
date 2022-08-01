
enum Trabalho {
    Advogada,
    Engenheiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'Carla',
    idade: 29,
    profissao: Trabalho.Advogada
};

let pessoa2: Humano = {
    nome: 'Alexandre',
    idade: 19,
    profissao: Trabalho.Engenheiro
};

let pessoa3: Humano = {
    nome: 'Laura',
    idade: 32,
    profissao: Trabalho.Advogada
};

let pessoa4: Humano = {
    nome: "Augusto",
    idade: 19,
    profissao: Trabalho.Engenheiro
}