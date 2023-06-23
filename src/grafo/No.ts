export class No {
	private _valor: any;
	private _vizinho: Array<No>;

	constructor(valor) {
		console.log(`> criando um no { ${valor} }`);
		this._vizinho = new Array<No>();

		this._valor = valor;
	}

	public adicionarVizinho(no: No) {
		this._vizinho.push(no);
	}

	public apagar() {
		this._valor = null;
	}

	public get valor() {
		return this._valor;
	}

	public get vizinhanca() {
		return this._vizinho;
	}
}
