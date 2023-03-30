export class No {
	private valor;
	private esquerdo: No;
	private direito: No;

	constructor(valor, proximo?: No) {
		this.valor = valor;

		// if (proximo) {
		// 	this.proximo = proximo;
		// } else {
		// 	this.proximo = null;
		// }
	}
}
