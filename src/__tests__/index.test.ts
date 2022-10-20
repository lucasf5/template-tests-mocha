import { describe, expect, test } from '@jest/globals';
import { somaHorasExtras } from '..';

describe('sum horas extras', () => {
  test('verifica se retorna o valor correto', () => {
    const horasExtras = somaHorasExtras(10000, 10);

    expect(horasExtras).toBe(454);
  });
  
  test('verifica se retorna o valor errado', () => {
    const horasExtras = somaHorasExtras(10000, 10);

    expect(horasExtras).not.toBe(456);
  });
});
