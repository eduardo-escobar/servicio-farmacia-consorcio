<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descripcion

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Instalacion
Intalacion de paqutes 

```bash
$ npm install
```

## Correr la aplicacion

```bash
# desarrollo
$ npm run start

# desarrollo pero reniciando el build cada vez que hay una modificacion 
$ npm run start:dev

# producccion
$ npm run start:prod
```

## Test

```bash
# pruebas unitarias
$ npm run test

#pruebas  e2e 
$ npm run test:e2e

```

## Url de api local de servicio

http://localhost:3000/api/v1/ciudad

## Archivo .env
Se define el  archivo .env en la carpeta config para tener la url de conexiones y apis que ocupa el sistema 

## Respuesta ejemplo exitosa del servicio 

```bash
{
    "ok": true,
    "mensaje": {
         "farmacias": [
            {
                "fecha": "18-01-2021",
                "local_id": "1777",
                "local_nombre": "SALCOBRAND",
                "comuna_nombre": "SANTIAGO",
                "localidad_nombre": "SANTIAGO ESTE",
                "local_direccion": "CATEDRAL 1009",
                "funcionamiento_hora_apertura": "08:30 hrs.",
                "funcionamiento_hora_cierre": "21:30 hrs.",
                "local_telefono": "+560226880269",
                "local_lat": "-33.43727",
                "local_lng": "-70.651269",
                "funcionamiento_dia": "lunes",
                "fk_region": "7",
                "fk_comuna": "130"
            }
        ]
    }
}
```


