import { ComunaController } from '../src/comuna/comuna.controller';
import * as MOCKED_RESPONSE_REGIONES_COMUNAS  from '../src/util/jsoncomunas.json'; 

describe('CatsController', () => {
  let comunaController: ComunaController;

  beforeEach(() => {
    comunaController = new ComunaController();
  });

  describe('ObtenerComunas', () => {
    it('Deberia retornar un arreglo de comunas', async () => {
      const result = MOCKED_RESPONSE_REGIONES_COMUNAS;
      expect(await comunaController.ObtenerComunas()).toBe(result);
    });
  });
});
