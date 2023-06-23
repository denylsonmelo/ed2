import { Grafo } from "./src/grafo/Grafo";

let grafo = new Grafo("D");

grafo.adicionar("C");
grafo.adicionar("B");
grafo.adicionar("A");
grafo.adicionar("H");

grafo.adicionarCaminho("D", "C");
grafo.adicionarCaminho("C", "D");
grafo.adicionarCaminho("C", "B");
grafo.adicionarCaminho("B", "H");

console.log(grafo.totalNos);

// import { Arvore } from "./src/arvore/Arvore.js";

// const arvore = new Arvore();
// console.log(arvore.info);
// console.log(">>>>>>>>");

// arvore.adicionar(10);
// arvore.adicionar(5);
// arvore.adicionar(20);
// arvore.adicionar(7);
// arvore.adicionar(4);
// arvore.adicionar(30);
// arvore.adicionar(26);
// arvore.adicionar(40);
// arvore.adicionar(42);
// arvore.adicionar(70);
// arvore.adicionar(2);
// arvore.adicionar(-30);

// arvore.listar();

// arvore.remover(-30);

// console.log(">>>> apos remover");

// arvore.listar();

// //console.log(`busca (10): ${arvore.pesquisar(10)}`);

// //console.log(`busca (56): ${arvore.pesquisar(56)}`);
// //console.log(`busca (-20): ${arvore.pesquisar(-20)}`);

// //console.log(`busca (7): ${arvore.pesquisar(7)}`);
// //console.log(`busca (42): ${arvore.pesquisar(42)}`);
// //console.log(`busca (43): ${arvore.pesquisar(43)}`);

// //console.log("saindo tes");

// // import { Lista } from "./lista/Lista";

// // const lista = new Lista("aluno01");
// // lista.adicionarHead("aluno02");
// // lista.adicionarHead("aluno03");
// // lista.adicionarHead("aluno04");
// // lista.adicionarHead("aluno05");
// // lista.adicionarHead("aluno06");
// // lista.adicionarHead("aluno07");
// // lista.adicionarHead("aluno08");
// // lista.adicionarHead("aluno09");
// // lista.adicionarHead("aluno10");

// // lista.info();
// // //lista.removerHead();
// // //lista.removerHead();
// // lista.valores();

// // lista.adicionarEm("aluno novato", 4);
// // //lista.info();

// // lista.valores();
// // //lista.valorEm(4);
