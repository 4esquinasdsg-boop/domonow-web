# 📊 Configuración de Google Sheets para Formularios

Esta guía te llevará paso a paso para configurar Google Sheets como base de datos para tus formularios de leads. **100% gratis, sin Zapier ni herramientas de terceros.**

---

## Paso 1: Crear la Hoja de Google Sheets

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. Renómbrala a algo como "Leads DomoNow"
4. En la **fila 1**, agrega estos encabezados (columnas A-F):

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Fecha | Nombre | Apellidos | Email | Teléfono | Mensaje |

---

## Paso 2: Crear el Google Apps Script

1. En tu hoja de Google Sheets, ve a **Extensiones > Apps Script**
2. Borra todo el código que aparezca y **pega el siguiente código**:

```javascript
function doPost(e) {
  try {
    // Obtener la hoja activa
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parsear los datos del formulario
    var data = JSON.parse(e.postData.contents);
    
    // Agregar nueva fila con los datos
    sheet.appendRow([
      data.fecha || new Date().toISOString(),
      data.nombre || '',
      data.apellidos || '',
      data.email || '',
      data.telefono || '',
      data.mensaje || ''
    ]);
    
    // Respuesta de éxito
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Respuesta de error
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Función para pruebas (GET request)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'El script está funcionando correctamente' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Guarda el proyecto (**Ctrl + S**) y dale un nombre como "FormularioLeads"

---

## Paso 3: Desplegar como Aplicación Web

1. Haz clic en **Implementar > Nueva implementación**
2. En "Seleccionar tipo", elige **Aplicación web**
3. Configura:
   - **Descripción**: "Formulario de leads"
   - **Ejecutar como**: Mi cuenta
   - **Quién tiene acceso**: **Cualquier persona**
4. Haz clic en **Implementar**
5. Autoriza los permisos cuando te lo pida (es normal)
6. **¡COPIA LA URL DE LA APLICACIÓN WEB!** Se verá algo como:
   ```
   https://script.google.com/macros/s/AKfycbx...largo.../exec
   ```

---

## Paso 4: Actualizar el Código React

1. Abre el archivo `components/ContactForm.tsx`
2. Busca esta línea cerca del inicio:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI';
   ```
3. Reemplaza `'TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI'` con tu URL:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx.../exec';
   ```

---

## Paso 5: Probar el Formulario

1. Recarga tu sitio web
2. Llena el formulario con datos de prueba
3. Envíalo
4. Verifica que los datos aparezcan en tu Google Sheets

---

## 🎉 ¡Listo!

Ahora cada vez que alguien llene el formulario:
- Los datos se guardan automáticamente en tu Google Sheets
- Puedes exportar a Excel, CSV, o conectar con otras herramientas
- Puedes compartir la hoja con tu equipo para ver leads en tiempo real

---

## Solución de Problemas

### El formulario no envía datos
- Verifica que la URL esté correctamente copiada
- Asegúrate de que el script esté desplegado como "Cualquier persona"

### Error de permisos
- Ve a Apps Script y redespliega la aplicación
- Autoriza nuevamente los permisos

### No veo datos en la hoja
- Verifica que la hoja tenga los encabezados correctos
- Prueba accediendo a la URL en tu navegador (debería mostrar `{"status":"ok"}`)
