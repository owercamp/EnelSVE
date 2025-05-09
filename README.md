# Enel SVE

## Descripción
Este proyecto está dividido en dos partes principales: el backend y el frontend. El objetivo principal del proyecto es proporcionar una solución para la gestión de datos y visualización de información relevante para Enel SVE.

## Estructura del Proyecto

### Backend
El backend está desarrollado en TypeScript y contiene los siguientes directorios principales:

- **Dto/**: Contiene los objetos de transferencia de datos (DTOs) como `configDto.ts` y `SheetDto.ts`.
- **Interfaces/**: Define las interfaces utilizadas en el backend, como `IFilterAudio.ts` y `ISheet.ts`.
- **services/**: Contiene los servicios principales como `configServices.ts` y `sheetServices.ts`.
- **public/**: Incluye archivos públicos como `index.html`.

Archivo principal: `index.ts`.

### Frontend
El frontend está desarrollado en TypeScript y utiliza Tailwind CSS para el diseño. Contiene los siguientes directorios principales:

- **interfaces/**: Define las interfaces utilizadas en el frontend.
- **models/**: Contiene modelos como `Status.ts`.
- **src/**: Contiene los componentes principales, configuraciones, servicios y vistas.
  - **components/**: Componentes reutilizables como `container.tsx`, `GraphForCentral.tsx`, etc.
  - **configurations/**: Configuraciones específicas como `configCharts.ts`.
  - **css/**: Archivos de estilo como `style.css`.
  - **services/**: Servicios como `services.ts` y `verified.ts`.
  - **views/**: Vistas principales como `App.tsx`, `Concept.tsx` y `General.tsx`.

Archivo principal: `index.tsx`.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Instala las dependencias del backend:
   ```bash
   cd backend
   npm install
   ```

3. Instala las dependencias del frontend:
   ```bash
   cd ../frontend
   npm install
   ```

## Scripts Disponibles

### Backend
- `npm start`: Inicia el servidor backend.
- `npm run build`: Compila el código TypeScript.

### Frontend
- `npm start`: Inicia la aplicación frontend en modo desarrollo.
- `npm run build`: Genera una versión optimizada para producción.

## Tecnologías Utilizadas

- **Backend**: TypeScript, Node.js
- **Frontend**: React, TypeScript, Tailwind CSS

## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
