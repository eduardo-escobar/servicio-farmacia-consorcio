import { FarmaciaService } from './farmacia.service';
import { Test, TestingModule } from '@nestjs/testing';
import { ConsumoAPIService } from './consumoAPIService.service';
import { Farmacia } from './interface/farmacia';

class ConsumoAPIServiceMock {
  async ObtnerFarmaciasDisponibles(farmacia: Farmacia) {
    return [{
      comuna_nombre: "BUIN",
      fecha: "16-01-2021",
      fk_comuna: "83",
      fk_region: "7",
      funcionamiento_dia: "sabado",
      funcionamiento_hora_apertura: "09:00 hrs.",
      funcionamiento_hora_cierre: "21:00 hrs.",
      local_direccion: "JOSE MANUEL BALMACEDA 114",
      local_id: "756",
      local_lat: "-33.733423",
      local_lng: "-70.737859",
      local_nombre: "CRUZ VERDE ",
      local_telefono: "+560228221985",
      localidad_nombre: "BUIN",
    }];
  }
}
describe('FarmaciaService', () => {
  let farmaciaService: FarmaciaService;
  let app: TestingModule;

  beforeAll(async () => {

    const ApiServiceProvider = {
      provide: ConsumoAPIService,
      useClass: ConsumoAPIServiceMock,
    };

    app  = await Test.createTestingModule({
      providers: [FarmaciaService,ApiServiceProvider],
    }).compile();

    farmaciaService = app.get<FarmaciaService>(FarmaciaService);
  });

  describe('Obtener un array de farmacias segun comuna y nombre del local', () => {
    it('Deberia retornar un arreglo de farmacias', async () => {
      const params = {
        comuna: 'Buin',
        nombrelocal: 'cruz',
      }
      const expectedResponse = [{
        "comuna_nombre": "BUIN",
        "fecha": "16-01-2021",
        "fk_comuna": "83",
        "fk_region": "7",
        "funcionamiento_dia": "sabado",
        "funcionamiento_hora_apertura": "09:00 hrs.",
        "funcionamiento_hora_cierre": "21:00 hrs.",
        "local_direccion": "JOSE MANUEL BALMACEDA 114",
        "local_id": "756",
        "local_lat": "-33.733423",
        "local_lng": "-70.737859",
        "local_nombre": "CRUZ VERDE ",
        "local_telefono": "+560228221985",
        "localidad_nombre": "BUIN",
      }];

      const farmacias = await farmaciaService.ObtenerFarmaciaDeTurnoConFiltro(params)
      expect(farmacias).toStrictEqual(expectedResponse);
    });
  });
});
