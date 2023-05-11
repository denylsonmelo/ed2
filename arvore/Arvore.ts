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

	public pesquisar(valor: number) {
		if (this.estarVazia) return false;
		return this.pesquisaInterna(this.root, valor);
	}

	private pesquisaInterna(no: No, valor: number) {
		if (no?.valor === valor) {
			console.log("> achou elemento");
			return true;
		}

		if (valor < no?.valor) {
			console.log("> buscando pela esquerda");
			return this.pesquisaInterna(no.esquerda, valor);
		} else if (valor > no?.valor) {
			console.log("> buscando pela direita");
			return this.pesquisaInterna(no.direita, valor);
		}

		return false;
	}

	public listar() {
		// if()
		this.posOrdem(this.root);
	}

	private preOrdem(no: No) {
		if (no) console.log(no.valor);
		if (no.esquerda) this.preOrdem(no.esquerda);
		if (no.direita) this.preOrdem(no.direita);
	}

	private emOrdem(no: No) {
		if (no.esquerda) this.emOrdem(no.esquerda);
		if (no) console.log(no.valor);
		if (no.direita) this.emOrdem(no.direita);
	}

	private posOrdem(no: No) {
		if (no.esquerda) this.posOrdem(no.esquerda);
		if (no.direita) this.posOrdem(no.direita);
		if (no) console.log(no.valor);
	}

	public adicionar(valor) {
		this.root = this.adicionarNo(this.root, valor);
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

			no.direita = this.adicionarNo(no.direita, valor);
			return no;
		} else if (valor < no.valor) {
			console.log(`pela esquerda ${valor}`);

			no.esquerda = this.adicionarNo(no.esquerda, valor);
			return no;
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
