import { No } from "./No";

export class Grafo {
	private _nos: Array<No>;

	constructor(valor?) {
		console.log("> iniciando grafo novo");
		this._nos = new Array<No>();

		if (valor) {
			this.adicionar(valor);
		}
	}

	private _adicionarVertice(no: No) {
		this._nos.push(no);
	}

	private _adicionarCaminhos(origem: No, destino: No) {
		origem.adicionarVizinho(destino);
		destino.adicionarVizinho(origem);
	}

	public adicionarCaminho(origem: any, destino: any) {
		let origemNo = this._nos.filter((no) => no.valor == origem)[0];
		let destinoNo = this._nos.filter((no) => no.valor == origem)[0];

		console.log(origemNo);

		this._adicionarCaminhos(origemNo, new No(destino));
	}

	public adicionar(valor: any) {
		this._adicionarVertice(new No(valor));
	}

	public get totalNos(): number {
		return this._nos.length;
	}
}
