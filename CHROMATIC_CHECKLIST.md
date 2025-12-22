# ✅ Chromatic Configuration Checklist

## Estado de Configuración

### ✅ Completado

- [x] **Chromatic CLI instalado** (`chromatic@13.3.4`)
- [x] **Storybook addon instalado** (`@chromatic-com/storybook@4.1.3`)
- [x] **Scripts configurados en package.json**
  - [x] `npm run chromatic` (publicación manual)
  - [x] `npm run chromatic:ci` (publicación CI/CD)
- [x] **Archivo `.chromatic` creado** (ignorar archivos innecesarios)
- [x] **Archivo `.env.example` creado** (template para token)
- [x] **`.gitignore` verificado** (`.env.local` protegido)
- [x] **Workflow de GitHub Actions preparado** (`.github/workflows/chromatic.yml.example`)
- [x] **Documentación completa creada**
  - [x] `CHROMATIC_SETUP.md` (guía completa)
  - [x] `CHROMATIC_QUICKSTART.md` (guía rápida)
  - [x] `CHROMATIC_CONFIG_SUMMARY.md` (resumen técnico)
  - [x] `CHROMATIC_CHECKLIST.md` (este archivo)
- [x] **README.md actualizado** (con referencias a Chromatic)

---

## ⏳ Pendiente (Acción del Usuario)

### 1. Crear cuenta en Chromatic

- [ ] Ir a https://www.chromatic.com/
- [ ] Crear cuenta (GitHub recomendado)
- [ ] Crear nuevo proyecto: "MRS UI v6.5"
- [ ] Copiar Project Token (empieza con `chpt_...`)

### 2. Configurar token localmente

```bash
# Ejecutar en terminal:
cp .env.example .env.local

# Editar .env.local y pegar tu token:
CHROMATIC_PROJECT_TOKEN=chpt_tu_token_aqui
```

- [ ] Archivo `.env.local` creado
- [ ] Token copiado en el archivo
- [ ] Archivo guardado

### 3. Primera publicación

```bash
# Ejecutar en terminal:
npm run chromatic
```

- [ ] Comando ejecutado sin errores
- [ ] URL de Storybook recibida
- [ ] Storybook accesible en el navegador

### 4. Compartir con el equipo

- [ ] URL de Storybook copiada
- [ ] URL agregada al README (reemplazar el placeholder `#`)
- [ ] URL compartida con el equipo (Slack/Email/Wiki)

---

## 🔄 Siguiente Publicación

Cada vez que actualices componentes:

```bash
npm run chromatic
```

- [ ] Revisar cambios visuales en el dashboard
- [ ] Aceptar cambios intencionales
- [ ] Rechazar cambios no deseados

---

## 🤖 CI/CD (Opcional - Avanzado)

Si quieres automatizar las publicaciones:

### GitHub Actions Setup

1. [ ] Renombrar archivo:
```bash
mv .github/workflows/chromatic.yml.example .github/workflows/chromatic.yml
```

2. [ ] Agregar token a GitHub Secrets:
   - [ ] Ir a tu repositorio en GitHub
   - [ ] Settings → Secrets and variables → Actions
   - [ ] New repository secret
   - [ ] Name: `CHROMATIC_PROJECT_TOKEN`
   - [ ] Value: tu token de Chromatic
   - [ ] Add secret

3. [ ] Hacer push de los cambios:
```bash
git add .github/workflows/chromatic.yml
git commit -m "feat: add Chromatic GitHub Actions workflow"
git push
```

4. [ ] Verificar que el workflow corre automáticamente

---

## 📊 Verificación Post-Configuración

Después de la primera publicación exitosa:

- [ ] URL de Storybook funciona
- [ ] Todos los componentes se muestran correctamente
- [ ] Tema light/dark funciona
- [ ] Stories son interactivas
- [ ] Screenshots tomados correctamente en Chromatic

---

## 🔍 Troubleshooting

### Si algo no funciona:

1. **Error de token**
   - [ ] Verificar que `.env.local` existe
   - [ ] Verificar que el token es correcto
   - [ ] Verificar que no hay espacios extras

2. **Error de build**
   - [ ] Ejecutar `npm run build-storybook`
   - [ ] Verificar que no hay errores en los stories
   - [ ] Verificar que todas las dependencias están instaladas

3. **Cambios no detectados**
   - [ ] Verificar que los archivos `.stories.tsx` existen
   - [ ] Verificar que los cambios son visuales
   - [ ] Revisar el archivo `.chromatic`

---

## 📚 Documentación de Referencia

- **Guía rápida**: [CHROMATIC_QUICKSTART.md](./CHROMATIC_QUICKSTART.md)
- **Guía completa**: [CHROMATIC_SETUP.md](./CHROMATIC_SETUP.md)
- **Resumen técnico**: [CHROMATIC_CONFIG_SUMMARY.md](./CHROMATIC_CONFIG_SUMMARY.md)
- **Docs oficiales**: https://www.chromatic.com/docs

---

## 🎯 Estado Actual

**Configuración**: ✅ **100% Completa**

**Acción requerida**: 🟡 **Obtener token y publicar**

**Próximo paso**: Lee [CHROMATIC_QUICKSTART.md](./CHROMATIC_QUICKSTART.md) y publica tu primer Storybook.

---

## 📝 Notas Importantes

### Seguridad
✅ Tu token está protegido (`.env.local` en `.gitignore`)
✅ No se subirá a Git accidentalmente

### Plan Gratuito
✅ 5,000 snapshots/mes
✅ Suficiente para desarrollo activo
✅ Usuarios ilimitados

### Workflow
✅ Publica cuando quieras compartir cambios
✅ Review visual antes de aprobar
✅ Automatización opcional con CI/CD

---

**Última actualización**: Diciembre 2025  
**Estado**: Configuración completa, listo para primer publish

