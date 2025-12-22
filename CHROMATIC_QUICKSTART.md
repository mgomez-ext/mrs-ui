# Chromatic Quick Start

## 🚀 Publicar tu Storybook en 3 pasos

### 1️⃣ Obtén tu token de Chromatic

1. Ve a: https://www.chromatic.com/
2. Inicia sesión (GitHub recomendado)
3. Crea un nuevo proyecto: "Add project"
4. Copia tu **Project Token** (empieza con `chpt_...`)

### 2️⃣ Configura el token localmente

```bash
# Crea el archivo de configuración
cp .env.example .env.local

# Abre el archivo y agrega tu token
# .env.local
CHROMATIC_PROJECT_TOKEN=chpt_tu_token_aqui
```

### 3️⃣ Publica

```bash
npm run chromatic
```

✅ ¡Listo! Al terminar verás la URL de tu Storybook publicado.

---

## 📋 Comandos disponibles

### `npm run chromatic`
Publica tu Storybook (modo manual, espera aprobación de cambios)

### `npm run chromatic:ci`
Publica automáticamente (ideal para CI/CD)

---

## 🔗 Recursos

- **Guía completa**: [CHROMATIC_SETUP.md](./CHROMATIC_SETUP.md)
- **Documentación oficial**: https://www.chromatic.com/docs
- **Pricing**: https://www.chromatic.com/pricing

---

## ⚠️ Importante

- ✅ `.env.local` está en `.gitignore` (no se sube tu token)
- ✅ Plan gratuito: 5,000 snapshots/mes
- ✅ Cada publicación crea una nueva versión

---

## 🆘 ¿Problemas?

### No encuentra el token
```bash
# Verifica que existe .env.local
ls -la .env.local

# Si no existe, créalo
cp .env.example .env.local
# Y agrega tu token
```

### Build falla
```bash
# Verifica que Storybook construye correctamente
npm run build-storybook
```

### Más ayuda
Lee la guía completa: [CHROMATIC_SETUP.md](./CHROMATIC_SETUP.md)

