import { Module } from '@nestjs/common';
import { EasyconfigModule } from 'nestjs-easyconfig';
import { FarmaciaController } from './farmacia/farmacia.controller';
import { FarmaciaService } from './farmacia/farmacia.service';
import { ComunaController } from './comuna/comuna.controller';
import { ConsumoAPIService } from './farmacia/consumoAPIService.service';

@Module({
  imports: [EasyconfigModule.register({path: './config/.env'})],
  controllers: [FarmaciaController,ComunaController],
  providers: [FarmaciaService,ConsumoAPIService],
})
export class AppModule { }
