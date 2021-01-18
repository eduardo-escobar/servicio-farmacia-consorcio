import { Injectable } from '@nestjs/common';
import { ConsumoAPIService } from './consumoAPIService.service';
import { FarmaciaCreateDTO } from './dto/farmacia-create.dto';
import { Farmacia } from './interface/farmacia';

@Injectable()
export class FarmaciaService {

    constructor(private consumoAPIService: ConsumoAPIService) { }

    /**
     * Obtiene las farmacias de turno segun filtro de comuna y nombre de local
     * @param farmaciaCreateDTO datos de farmacia a buscar 
     */
    async ObtenerFarmaciaDeTurnoConFiltro(farmaciaCreateDTO: FarmaciaCreateDTO) {
        try {
            return await new Promise<any>((resolve, reject) => {

                let farmacia: Farmacia = {
                    comuna: farmaciaCreateDTO.comuna,
                    nombreLocal : farmaciaCreateDTO.nombrelocal
                };
                
                resolve(this.consumoAPIService.ObtnerFarmaciasDisponibles(farmacia));
            });

        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}
