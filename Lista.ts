import { No } from "./No";

export class Lista {
	public totalNos: number = 0;
	public head: No = null;

	constructor(valor?) {
		console.log("iniciando lista nova");

		if (valor) {
			this.adicionarHead(valor);
		}
		//this.head = no;
	}

	public adicionarHead(valor) {
		let novo = new No(valor);
		this.head = novo;
		this.totalNos++;
	}

	public tamanho(): number {
		return this.totalNos;
	}

	public estarVazia(): boolean {
		return this.tamanho() == 0;
		//return false;
	}
}
