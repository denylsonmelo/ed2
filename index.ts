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
lista.adicionarHead("aluno10");

lista.info();
//lista.removerHead();
//lista.removerHead();
lista.valores();

lista.adicionarEm("aluno novato", 4);
//lista.info();

lista.valores();
//lista.valorEm(4);
