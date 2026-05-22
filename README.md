# PokemonPage

Aplicación web construida con React y Vite que consume la [PokéAPI](https://pokeapi.co/) para mostrar información de Pokémon.

## Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- [pnpm](https://pnpm.io/) (gestor de paquetes)

> Si no tienes `pnpm` instalado, puedes instalarlo con:
> ```bash
> npm install -g pnpm
> ```

## Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone <url-del-repositorio>
cd PokemonPage
pnpm install
```

## Ejecutar en desarrollo

Inicia el servidor de desarrollo con recarga en caliente (HMR):

```bash
pnpm dev
```

La aplicación estará disponible en `http://localhost:5173`.

## Compilar para producción

Genera los archivos optimizados en la carpeta `dist/`:

```bash
pnpm build
```

Para previsualizar el build de producción localmente:

```bash
pnpm preview
```

## Scripts disponibles

| Comando        | Descripción                              |
|----------------|------------------------------------------|
| `pnpm dev`     | Inicia el servidor de desarrollo         |
| `pnpm build`   | Compila la aplicación para producción    |
| `pnpm preview` | Previsualiza el build de producción      |
| `pnpm lint`    | Ejecuta ESLint sobre el código fuente    |

## Estructura del proyecto

```
src/
├── components/     # Componentes de React (CardPokemon, PagePokemon)
├── services/       # Lógica de consumo de la PokéAPI
├── hooks/          # Custom hooks
├── utils/          # Funciones utilitarias
└── assets/         # Recursos estáticos
```

## Tecnologías

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [PokéAPI](https://pokeapi.co/)
