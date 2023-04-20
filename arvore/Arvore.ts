import { No } from "./No";

export class Arvore {
	private root: No = null;
	private height: number = 0;
	private totalNos: number = 0;

	constructor(valor?) {
		console.log("> iniciando arvore nova");

		if (valor) {
			this.adicionar(valor);
		}
	}

	public adicionar(valor) {
		this.root = this.adicionarNo(this.root, valor);

		//let novoNo: No = new No(valor);
		//this.root = novoNo;
	}

	private adicionarNo(no: No, valor): No {
		console.log(`adicionar -> no ${no}`);

		if (!no) {
			console.log(`no nula`);
			let novoNo: No = new No(valor);
			no = novoNo;
			this.totalNos++;
			return no;
		}

		if (valor > no.valor) {
			console.log(`pela direita ${valor}`);

			return this.adicionarNo(no.direita, valor);
		} else if (valor < no.valor) {
			console.log(`pela esquerda ${valor}`);

			return this.adicionarNo(no.esquerda, valor);
		}
	}

	public get altura(): number {
		return this.height;
	}

	public get quantidadeElementos(): number {
		return this.totalNos;
	}

	public get estarVazia(): boolean {
		return this.quantidadeElementos == 0;
	}

	public get info() {
		let info = "";

		info += `> > altura: ${this.altura} \n`;
		info += `> > quantidadeElementos: ${this.quantidadeElementos} \n`;
		info += `> > estarVazia: ${this.estarVazia} \n`;

		info += `> > raiz: ${this.raiz} \n`;
		if (this.raiz) {
			info += `> > > valor: ${this.raiz.valor} \n`;
			info += `> > > esquerda: ${this.raiz.esquerda} \n`;
			info += `> > > direita: ${this.raiz.direita} \n`;
		}

		return info;
	}

	public get raiz() {
		return this.root;
	}
}
