
# Proyecto Escape Room

Este proyecto es una página web para un Escape Room, donde los usuarios pueden obtener información sobre el lugar, ver diferentes ofertas y servicios, y contactar con el equipo a través de varias vías.

## 🚀 Enlace al Proyecto

Puedes ver el proyecto en vivo a través de Vercel:

[**Ver Proyecto**](https://proyecto-escape-room.vercel.app/)

## ⚙️ Requisitos y Configuración del Proyecto

### 1. **Crear el Proyecto**

Para crear y configurar el proyecto en tu entorno local, sigue estos pasos:

1. Ejecuta el siguiente comando para crear el proyecto con Vite:

```bash
npm create vite@latest Escape_Room
```

2. Entra en el directorio del proyecto:

```bash
cd Escape_Room
```

3. Instala las dependencias:

```bash
npm install
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

Esto inicializará el servidor en [localhost:5173](http://localhost:5173).

### 2. **Desplegar en Vercel**

Si deseas desplegar el proyecto en Vercel, asegúrate de conectar tu repositorio y seguir los pasos para hacer el despliegue automático.

## 🛠️ Dependencias Instaladas

Asegúrate de instalar las siguientes dependencias según se necesiten para las funcionalidades del proyecto:

### 1. **Framer Motion** (Efectos para el título)

```bash
npm install framer-motion
```

### 2. **React Router DOM** (Rutas del footer)

```bash
npm install react-router-dom
```

### 3. **React Scroll** (Navegación con desplazamiento suave)

```bash
npm install react-scroll
npm install --save-dev @types/react-scroll
```

### 4. **Lazy Loading** (Cargar componentes de forma diferida)

```bash
npm install react-intersection-observer
```

### 5. **Vercel Analytics** (Para analíticas del proyecto)

```bash
npm install @vercel/analytics
```

## ✔️ Funcionalidades Implementadas

A continuación se detallan las funcionalidades completadas del proyecto:

- **General**
  - [x] Desplegar el proyecto.
  - [x] Añadir analíticas de Vercel.

- **Preloader**
  - [x] Activar cuando la sección principal esté completamente cargada (mínimo 1.5 segundos de carga).
  - [x] Usar el icono definitivo para el preloader.

- **Header**
  - [x] Los enlaces del menú redirigen a las secciones correspondientes.
  - [x] Cambiar el fondo del header al hacer scroll.
  - [x] Subrayar los enlaces al hacer hover.
  - [] Menú hamburguesa en la versión móvil.
  - [] En versión móvil, al hacer clic en los enlaces, se redirige y se cierra el menú.

- **Señas de Identidad**
  - [x] Implementar Lazy Loading para títulos y tarjetas.
  - [x] Cambiar el diseño de las tarjetas para un formato más atractivo.

- **Ubicaciones**
  - [x] Contacto mediante WhatsApp.
  - [x] Mapa con la ubicación del Escape Room.

- **Footer**
  - [x] Incluir el logo de la empresa.
  - [x] Enlaces a redes sociales.
  - [x] Servicios y datos de contacto (dirección, teléfono, etc.).
  - [x] Funcionalidades de correo, llamada y ubicación.
  - [x] Redirección a una página con los textos legales (aviso legal, privacidad y cookies).

- **Textos Legales**
  - [x] Aviso Legal.
  - [x] Política de Privacidad.
  - [x] Política de Cookies.

- **Cookies**
  - [x] Implementación de un banner de cookies al entrar en la web.
  - [x] El banner debe almacenarse para no aparecer en visitas posteriores.
  - [x] Añadir cookie para almacenar la ubicación del usuario.

## 📝 Objetivos y Nuevas Funcionalidades

###  **Mejoras Pendientes**
- [ ] **Responsive Design:**
  - Asegurar que el proyecto sea completamente responsivo y compatible con dispositivos móviles y tabletas.
  
- [ ] **Refinamiento de Errores:**
  - Resolver bugs o errores de funcionamiento que puedan surgir durante el uso.

## 🛠️ Funcionalidades Faltantes o En Progreso
- [x] **Banner de Cookies:**
  - Asegurarse de que el banner cumpla con las normativas de cookies.
  
- [x] **Cookie de Ubicación:**
  - Implementar la cookie de ubicación del usuario.

