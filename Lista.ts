import { No } from "./No";

export class Lista {
	private totalNos: number = 0;
	public head: No = null;

	constructor(valor?) {
		console.log("iniciando lista nova");

		if (valor) {
			this.adicionarHead(valor);
		}
		//this.head = no;
	}

	public adicionarHead(valor: any) {
		let novoNo = new No(valor);

		let noTemporario = this.head;
		this.head = novoNo;
		novoNo.proximo = noTemporario;

		this.totalNos++;
	}

	public removerHead() {
		let noTemporario = this.head.proximo;
		this.head = noTemporario;
		this.totalNos--;
	}

	public imprimir(): void {
		if (this.estarVazia()) {
			console.log("> lista vazia");
			return;
		}

		let elementoIteracao = this.head;
		for (let index = 0; ; index++) {
			console.log(`index: ${index}, elemento: ${elementoIteracao.valor}`);

			if (elementoIteracao.proximo == null) break;

			elementoIteracao = elementoIteracao.proximo;
		}
	}

	public tamanho(): number {
		return this.totalNos;
	}

	public estarVazia(): boolean {
		return this.tamanho() == 0;
		//return false;
	}
}
