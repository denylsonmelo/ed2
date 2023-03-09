export class No {
	//public anterior;
	public valor;
	public proximo: No;

	constructor(valor) {
		this.valor = valor;
		this.proximo = null;
	}
}
