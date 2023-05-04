import { Arvore } from "./arvore/Arvore";

const arvore = new Arvore();
console.log(arvore.info);
console.log(">>>>>>>>");

arvore.adicionar(10);
arvore.adicionar(5);
arvore.adicionar(20);
arvore.adicionar(7);
arvore.adicionar(4);
arvore.adicionar(30);
arvore.adicionar(26);
arvore.adicionar(40);
arvore.adicionar(42);
arvore.adicionar(70);
arvore.adicionar(2);

console.log(arvore.listar());

//console.log("saindo tes");

// import { Lista } from "./lista/Lista";

// const lista = new Lista("aluno01");
// lista.adicionarHead("aluno02");
// lista.adicionarHead("aluno03");
// lista.adicionarHead("aluno04");
// lista.adicionarHead("aluno05");
// lista.adicionarHead("aluno06");
// lista.adicionarHead("aluno07");
// lista.adicionarHead("aluno08");
// lista.adicionarHead("aluno09");
// lista.adicionarHead("aluno10");

// lista.info();
// //lista.removerHead();
// //lista.removerHead();
// lista.valores();

// lista.adicionarEm("aluno novato", 4);
// //lista.info();

// lista.valores();
// //lista.valorEm(4);
