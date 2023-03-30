import { Arvore } from "./arvore/Arvore";
import { No } from "./arvore/No";

const arvore = new Arvore();
console.log(arvore.getRaiz());
console.log(arvore.raiz);
// console.log(arvore.root);

let no = new No("aluno01");
// arvore.root = no;
arvore.raiz = no;
//arvore.setRaiz(no);

console.log(">>>>>>>>");
console.log(arvore.getRaiz());
console.log(arvore.raiz);

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
