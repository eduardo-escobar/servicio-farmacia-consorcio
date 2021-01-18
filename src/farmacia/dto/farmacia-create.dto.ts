import { ApiProperty } from '@nestjs/swagger';

/**
 * Clase para recibir datos del front 
 */
export class FarmaciaCreateDTO {
    @ApiProperty()
    comuna: string;
    @ApiProperty()
    nombrelocal: string;
}