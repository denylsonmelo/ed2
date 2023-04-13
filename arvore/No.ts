export class No {
	private valorInterno;
	private noEsquerdo: No = null;
	private noDireito: No = null;

	constructor(valor) {
		console.log(`> criando um no { ${valor} }`);

		this.valorInterno = valor;
	}

	public get valor() {
		return this.valorInterno;
	}
	public get esquerda() {
		return this.noEsquerdo;
	}
	public get direita() {
		return this.noDireito;
	}
}
