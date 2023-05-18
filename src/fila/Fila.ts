import { No } from "../arvore/No";

export class Fila {
	private _array: Array<No> = new Array();

	public adicionar(no: No) {
		this._array.push(no);
	}

	public remover(): No {
		return this._array.shift();
	}

	public get tamanho(): number {
		return this._array.length;
	}
}
