# QA Portfolio - Automatización con Playwright

Suite de pruebas automatizadas E2E (End-to-End) construida con **Playwright** y **JavaScript**, usando la tienda demo [demoblaze.com](https://demoblaze.com) como caso de prueba real.

## 🧪 Tests implementados

| # | Test | Descripción |
|---|------|-------------|
| 1 | Cargar página principal | Verifica que la tienda cargue correctamente |
| 2 | Abrir ventana de Login | Verifica que el modal de login se abra al hacer clic |
| 3 | Error con credenciales incorrectas | Verifica que el sistema muestre un error cuando el usuario no existe |

## 🛠️ Tecnologías

- [Playwright](https://playwright.dev/) — Framework de automatización de pruebas
- JavaScript (ES Modules)
- Node.js

## 🚀 Cómo ejecutar los tests

```bash
# Instalar dependencias
npm install

# Instalar navegadores de Playwright
npx playwright install chromium

# Ejecutar todos los tests
npx playwright test

# Ver reporte HTML de resultados
npx playwright show-report
```

## 📊 Resultado esperado

```
Running 3 tests using 3 workers

✅ Cargar la página principal de la tienda
✅ Abrir la ventana de Log in
✅ Mostrar error con credenciales incorrectas

3 passed
```
