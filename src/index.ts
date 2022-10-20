export const somaHorasExtras = (salario:number, horasExtras: number): number => {
	const valorHora = salario / 220;
	return Math.floor(valorHora * horasExtras);
};