import { ApiProperty } from '@nestjs/swagger';

/**
 * Clase para recibir datos del front 
 */
export class FarmaciaTurnoDTO {
    @ApiProperty()
    fecha: Date;
    @ApiProperty()
    local_id: number;
    @ApiProperty()
    local_nombre: string;
    @ApiProperty()
    comuna_nombre: string;
    @ApiProperty()
    localidad_nombre: string;
    @ApiProperty()
    local_direccion: string;
    @ApiProperty()
    funcionamiento_hora_apertura: string;
    @ApiProperty()
    funcionamiento_hora_cierre: string;
    @ApiProperty()
    local_telefono:string;
    @ApiProperty()
    local_lat:number;
    @ApiProperty()
    local_lng:number;
    @ApiProperty()
    funcionamiento_dia: string;
    @ApiProperty()
    fk_region: number;
    @ApiProperty()
    fk_comuna: number;
}