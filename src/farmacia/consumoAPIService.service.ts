import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { FarmaciaTurnoDTO } from 'src/farmacia/dto/farmacia-turno.dto';
import { Farmacia } from 'src/farmacia/interface/farmacia';

/**
 * Clase para logica de trabajo con api 
 */
@Injectable()
export class ConsumoAPIService {


  /**
   * Método para obtener las farmacias disponibles por región 
   * @param idRegion identificador de región
   */
  async ObtnerFarmaciasDisponibles(farmacia: Farmacia): Promise<FarmaciaTurnoDTO[]> {    
    //Obtengo todas las farmacias de turno de santiago 
    const response = await axios.get(process.env.URI_API_FARMACIAS);
    //Filtro las farmacias segun la comuna y nombre del local 
    return response.data.filter(d => (this.formatearTexto(d.comuna_nombre) == this.formatearTexto(farmacia.comuna))
                 && (this.formatearTexto(d.local_nombre).indexOf(this.formatearTexto(farmacia.nombreLocal)) > -1));

  }

  /**
   * Formatea el texto para evaluar las considencias
   * @param texto 
   */
  formatearTexto(texto: string) {
    const textoFormateado = texto.toUpperCase().replace(/\s+/g, "").trim();    
    return textoFormateado;
  }
}