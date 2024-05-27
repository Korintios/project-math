# Project Math

**Project Math** es una aplicación web interactiva diseñada para realizar cálculos matemáticos avanzados utilizando métodos numéricos. Los usuarios pueden ingresar funciones matemáticas y obtener resultados precisos mediante técnicas de integración numérica.

## Enlace de Acceso

Accede a la aplicación [aquí](https://project-math-one.vercel.app/).

## Características Principales

- **Métodos Numéricos**: Ofrece una variedad de métodos numéricos para la integración, incluyendo el Método Trapezoidal, Método de Jorge Boole, Método de Simpson 1/3, Método de Simpson 3/8 y Método de Simpson Simple.
- **Modo Oscuro/Claro**: Soporta dos temas de visualización para adaptarse a las preferencias del usuario.
- **Funciones Matemáticas**: Admite una amplia gama de funciones matemáticas, incluyendo funciones trigonométricas, exponenciales y logarítmicas.
- **Parámetros de Cálculo**: Permite al usuario especificar los límites de integración y el número de subintervalos para el cálculo.
- **Interfaz de Usuario Intuitiva**: Presenta una interfaz fácil de usar con secciones claramente definidas para la entrada de función, selección de método, visualización de resultados y más.

## Interfaz de Usuario

### Secciones Principales

1. **Métodos Disponibles**: Permite al usuario seleccionar el método numérico deseado para realizar el cálculo de la integral.
2. **Información**: Proporciona enlaces importantes, como el enlace al repositorio en GitHub y los créditos del proyecto.
3. **Temas de Visualización**: Permite al usuario cambiar entre el modo oscuro y claro para una experiencia de usuario personalizada.
4. **Entrada de Función y Parámetros**: Permite al usuario ingresar la función matemática y definir los parámetros necesarios para el cálculo.
5. **Resultados y Cálculos**: Muestra los resultados del cálculo de la integral, incluyendo una tabla con los pasos del cálculo, puntos para graficar y detalles de los pasos realizados.

## Ejemplo de Uso

1. **Ingresar la Función**: En el campo de entrada de función, ingresa la función matemática que deseas integrar.
2. **Definir Parámetros**: Especifica los límites de integración (inferior y superior) y el número de subintervalos.
3. **Calcular**: Haz clic en el botón "Calcular" para obtener el resultado de la integral.

## Información de Cálculos

La integral de la función desde el límite inferior hasta el límite superior se calcula utilizando el método numérico seleccionado. La aplicación divide el intervalo en subintervalos y aplica el método numérico para aproximar el valor de la integral.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Envía tus cambios a tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.


## Detalle Técnico

Este es un proyecto [Next.js](https://nextjs.org/) inicializado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Empezar

Primero, ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev

```

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](https://opensource.org/license/mit) para más información.
