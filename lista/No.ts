export class No {
	//public anterior;
	public valor;
	public proximo: No;

	constructor(valor, proximo?: No) {
		this.valor = valor;

		if (proximo) {
			this.proximo = proximo;
		} else {
			this.proximo = null;
		}
	}
}
