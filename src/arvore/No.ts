export class No {
	private _valorInterno;
	private _caminhoEsquerdo: No = null;
	private _caminhoDireito: No = null;

	constructor(valor) {
		console.log(`> criando um no { ${valor} }`);

		this._valorInterno = valor;
	}

	public apagar() {
		this._valorInterno = null;
		this._caminhoDireito = null;
		this._caminhoEsquerdo = null;
	}

	public get valor() {
		return this._valorInterno;
	}
	public get esquerda() {
		return this._caminhoEsquerdo;
	}
	public get direita() {
		return this._caminhoDireito;
	}
	public set esquerda(no: No) {
		this._caminhoEsquerdo = no;
	}
	public set direita(no: No) {
		this._caminhoDireito = no;
	}
}
