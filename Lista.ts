import { No } from "./No";

export class Lista {
	private totalNos: number = 0;
	public head: No = null;

	constructor(valor?) {
		console.log("> iniciando lista nova");

		if (valor) {
			this.adicionarHead(valor);
		}
	}

	public adicionarHead(valor: any) {
		let novoNo = new No(valor, this.head);

		//let noTemporario = this.head;
		this.head = novoNo;
		//novoNo.proximo = noTemporario;

		this.totalNos++;
	}

	public adicionarEm(valor, indice: number) {
		if (this.estarVazia()) {
			console.log("> lista vazia");
			return;
		}

		if (indice < 0 || indice > this.tamanho()) {
			console.log("> indice fora do tamanho da lista");
			return;
		}

		let elementoIteracao = this.head;
		for (let index = 0; index < indice; index++) {
			console.log(`> procurando valor em: ${index}`);

			if (index == indice - 1) {
				console.log(
					`index: ${index}, elemento: ${elementoIteracao.valor}`
				);

				let novoNo = new No(valor, elementoIteracao.proximo);
				elementoIteracao.proximo = novoNo;
			}

			if (elementoIteracao.proximo == null) break;

			elementoIteracao = elementoIteracao.proximo;
		}
	}

	public removerHead() {
		if (this.estarVazia()) {
			console.log("> lista vazia");
			return;
		}

		console.log(`> removendo elemento --> ${this.head}`);

		let noTemporario = this.head.proximo;
		this.head = noTemporario;
		this.totalNos--;
	}

	public valores(): void {
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

	public valorEm(indice: number): void {
		//console.log(`> iniciando procura de valores`);

		if (this.estarVazia()) {
			console.log("> lista vazia");
			return;
		}

		if (indice < 0 || indice > this.tamanho()) {
			console.log("> indice fora do tamanho da lista");
			return;
		}

		let elementoIteracao = this.head;
		for (let index = 0; index <= indice; index++) {
			console.log(`> procurando valor em: ${index}`);

			if (index == indice)
				console.log(
					`index: ${index}, elemento: ${elementoIteracao.valor}`
				);

			if (elementoIteracao.proximo == null) break;

			elementoIteracao = elementoIteracao.proximo;
		}
		//console.log(`> terminando procura de valores`);
	}

	public tamanho(): number {
		return this.totalNos;
	}

	public estarVazia(): boolean {
		return this.tamanho() == 0;
		//return false;
	}

	public info() {
		console.log("> lista vazia:", this.estarVazia());
		console.log("> tamanho:", this.tamanho());
		// console.log("> cabeca:", this.head);
		// console.log("> proximo elemento:", this.head.proximo);
	}
}
