import { No } from "./No";

export class Arvore {
	private root: No = null;
	private totalNos: number = 0;

	constructor(valor?) {
		console.log("> iniciando arvore nova");
		let no: No;
		// if (valor) {
		// 	this.adicionarHead(valor);
		// }
	}

	public getRaiz() {
		return this.root;
	}

	public setRaiz(no: No) {
		this.root = no;
	}

	public set raiz(no: No) {
		this.root = no;
	}

	public get raiz() {
		return this.root;
	}

	public altura(): number {
		return null;
	}

	public tamanho(): number {
		return null;
	}

	public estarVazia(): boolean {
		return null;
	}

	public info() {}
}
