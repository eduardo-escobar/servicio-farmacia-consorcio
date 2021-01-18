import { Controller } from '@nestjs/common';
import { Get, HttpStatus, Res } from '@nestjs/common';
import * as MOCKED_RESPONSE_REGIONES_COMUNAS  from '../util/jsoncomunas.json'; 

@Controller('comunas')
export class ComunaController {
    @Get()
    ObtenerComunas() {
        return MOCKED_RESPONSE_REGIONES_COMUNAS;
    }
}
