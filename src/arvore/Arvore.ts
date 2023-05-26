import { Fila } from "../fila/Fila";
import { No } from "./No";

export class Arvore {
	private _root: No = null;
	private _height: number = 0;
	private _totalNos: number = 0;

	constructor(valor?) {
		console.log("> iniciando arvore nova");

		if (valor) {
			this.adicionar(valor);
		}
	}

	public remover(valor) {
		this._root = this.removerInterno(this._root, null, valor);
	}

	private removerInterno(no: No, noPai: No, valorPesquisado) {
		if (!no) return null;

		if (no.valor > valorPesquisado)
			return this.removerInterno(no.esquerda, no, valorPesquisado);
		if (no.valor < valorPesquisado)
			return this.removerInterno(no.direita, no, valorPesquisado);

		if (no.valor == valorPesquisado) {
			// remover  no -30  noPai 2
			if (!no.esquerda && !no.direita) {
				//noPai
				if (noPai.valor > no.valor) noPai.esquerda = null;
				if (noPai.valor < no.valor) noPai.direita = null;

				no.apagar();
				return no;
			}

			return null;
		}
	}

	public pesquisar(valorASerPesquisado: number) {
		if (this.estarVazia) return false;
		return this.pesquisaInterna(this._root, valorASerPesquisado);
	}

	private pesquisaInterna(no: No, valorASerPesquisado: number) {
		if (no?.valor === valorASerPesquisado) {
			console.log("> achou elemento");
			return true;
		}

		if (valorASerPesquisado < no?.valor) {
			console.log("> buscando pela esquerda");
			return this.pesquisaInterna(no.esquerda, valorASerPesquisado);
		} else if (valorASerPesquisado > no?.valor) {
			console.log("> buscando pela direita");
			return this.pesquisaInterna(no.direita, valorASerPesquisado);
		}

		return false;
	}

	public listar() {
		// if()
		this.bfs(this._root);
	}

	private bfs(no: No) {
		let filaImpressao: Fila = new Fila();

		filaImpressao.adicionar(no);

		for (; filaImpressao.tamanho > 0; ) {
			let noAtual = filaImpressao.remover();

			console.log(noAtual?.valor);

			if (noAtual?.esquerda) filaImpressao.adicionar(noAtual.esquerda);
			if (noAtual?.direita) filaImpressao.adicionar(noAtual.direita);
		}
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
		this._root = this.adicionarInterno(this._root, valor);
	}

	private adicionarInterno(no: No, valor): No {
		console.log(`adicionar -> no ${no}`);

		if (!no) {
			console.log(`no nula`);
			let novoNo: No = new No(valor);
			no = novoNo;
			this._totalNos++;
			return no;
		}

		if (valor > no.valor) {
			console.log(`pela direita ${valor}`);

			no.direita = this.adicionarInterno(no.direita, valor);
			return no;
		} else if (valor < no.valor) {
			console.log(`pela esquerda ${valor}`);

			no.esquerda = this.adicionarInterno(no.esquerda, valor);
			return no;
		}
	}

	public get altura(): number {
		return this._height;
	}

	public get quantidadeElementos(): number {
		return this._totalNos;
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
		return this._root;
	}
}
