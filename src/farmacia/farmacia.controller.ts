import { Post, HttpStatus, Res, Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { FarmaciaCreateDTO } from './dto/farmacia-create.dto';
import { FarmaciaService } from './farmacia.service';

@Controller('farmacia')
export class FarmaciaController {

    constructor(private farmaciaSv: FarmaciaService) { }

    /**
     * Retorna las farmacias de turno
     * @param response 
     */
    @Post()
    ObtenerFarmaciasDeTurnos(@Res() response, @Body() farmaciaCreateDTO: FarmaciaCreateDTO) {

        const { comuna, nombrelocal } = farmaciaCreateDTO;
        //Evaluo si los parametros vienen con valor 
        if ((comuna == undefined || comuna.trim().length < 1) || (nombrelocal == undefined || nombrelocal.trim().length < 1)) {
            response.status(HttpStatus.FORBIDDEN).json({ ok: false, mensaje: 'comuna y nombre del local es requerido' });
            return;
        }

        this.farmaciaSv.ObtenerFarmaciaDeTurnoConFiltro(farmaciaCreateDTO)
            .then(farmacias => {

                response.status(farmacias ? HttpStatus.OK : HttpStatus.FORBIDDEN)
                    .json({ ok: farmacias ? true : false, mensaje: { farmacias } });
            })
            .catch(error => {
                console.log(error);
                response.status(HttpStatus.FORBIDDEN).json({ ok: false, mensaje: 'No se ha podido realizar la operación' });
            });

    }


}
