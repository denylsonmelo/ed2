export class No {
	private valorInterno;
	private caminhoEsquerdo: No = null;
	private caminhoDireito: No = null;

	constructor(valor) {
		console.log(`> criando um no { ${valor} }`);

		this.valorInterno = valor;
	}

	public get valor() {
		return this.valorInterno;
	}
	public get esquerda() {
		return this.caminhoEsquerdo;
	}
	public get direita() {
		return this.caminhoDireito;
	}
}
