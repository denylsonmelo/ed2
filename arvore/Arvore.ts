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
		let novoNo: No = new No(valor);

		// modificar
		if (!this.root) {
			console.log(`raiz nula ${valor}`);
			this.root = novoNo;
		}

		if (valor > this.root.valor) {
			console.log(`pela direita ${valor}`);

			this.adicionarNo(this.root.direita, valor);
		} else if (valor < this.root.valor) {
			console.log(`pela esquerda ${valor}`);

			this.adicionarNo(this.root.esquerda, valor);
		}

		// corrigir
		this.totalNos++;
		this.height = 1;
	}
	private adicionarNo(no, valor) {
		console.log(`adicionarno ${no}`);

		if (!no) {
			console.log(`no nula ${valor}`);
			let novoNo: No = new No(valor);
			no = novoNo;
		}

		if (valor > no.valor) {
			console.log(`pela direita ${valor}`);

			this.adicionarNo(no.direita, valor);
		} else if (valor < no.valor) {
			console.log(`pela esquerda ${valor}`);

			this.adicionarNo(no.esquerda, valor);
		}
	}

	public get altura(): number {
		return this.height;
	}

	public get tamanho(): number {
		return this.totalNos;
	}

	public get estarVazia(): boolean {
		return this.tamanho == 0;
	}

	public get info() {
		let info = "";

		info += `> > altura: ${this.altura} \n`;
		info += `> > tamanho: ${this.tamanho} \n`;
		info += `> > estarVazia: ${this.estarVazia} \n`;

		info += `> > raiz: ${this.raiz} \n`;

		return info;
	}

	public get raiz() {
		return this.root;
	}
}
