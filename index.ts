//console.log("saindo tes");

import { Lista } from "./Lista";

const lista = new Lista("aluno01");
lista.adicionarHead("aluno02");

console.log(lista.estarVazia());
console.log(lista.tamanho());
console.log(lista.head.valor);
console.log(lista.head.proximo);
