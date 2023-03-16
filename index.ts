//console.log("saindo tes");

import { Lista } from "./Lista";

const lista = new Lista("aluno01");
lista.adicionarHead("aluno02");
lista.adicionarHead("aluno03");
lista.adicionarHead("aluno04");
lista.adicionarHead("aluno05");
lista.adicionarHead("aluno06");
lista.adicionarHead("aluno07");
lista.adicionarHead("aluno08");
lista.adicionarHead("aluno09");

console.log("lista vazia:", lista.estarVazia());
console.log("tamanho:", lista.tamanho());
// console.log("cabeca:", lista.head);
// console.log("proximo elemento:", lista.head.proximo);

lista.removerHead();
lista.imprimir();
