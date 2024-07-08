# Proyecto VCloud

## Descripción del Proyecto

VCloud es una plataforma basada en la nube que permite a empresas y usuarios individuales almacenar, compartir y administrar archivos de manera segura. Utiliza tecnologías modernas para garantizar la seguridad y la eficiencia en la gestión de datos.

## Tecnologías Utilizadas

- **Prisma ORM**: Para la gestión de la base de datos y las relaciones entre entidades. ![Prisma ORM](https://img.shields.io/badge/Prisma%20ORM-1B222D?logo=prisma&logoColor=white)
- **Builder Design Pattern**: Implementado con los siguientes componentes:
  - **Groups**: Segmentos dentro de la empresa del usuario.
  - **Entities**: Representación de las empresas.
  - **Users**: Usuarios individuales que interactúan con la plataforma.
- **Multer**: Middleware para la carga de archivos a la nube. ![Multer](https://img.shields.io/badge/Multer-FFC837?logo=node.js&logoColor=white)
- **JWT (JSON Web Tokens)**: Para autenticación segura y gestión de sesiones. ![JWT](https://img.shields.io/badge/JWT-000000?logo=jsonwebtokens&logoColor=white)
- **bcrypt**: Para el cifrado seguro de contraseñas. ![bcrypt](https://img.shields.io/badge/bcrypt-00599C?logoColor=white)
- **Pagination with Swagger**: Implementación de paginación utilizando Swagger para la documentación y gestión de la API. ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?logo=swagger&logoColor=black)
- **CORS**: Configurado para permitir el acceso controlado a recursos desde diferentes dominios. ![CORS](https://img.shields.io/badge/CORS-E34F26?logoColor=white)

## Características Implementadas

1. **Gestión de Usuarios y Empresas**
   - Registro y autenticación de usuarios.
   - Creación y administración de entidades (empresas) y grupos.

2. **Subida de Archivos**
   - Uso de Multer para la carga de archivos a la nube.

## Funcionalidades Pendientes

1. **Autenticación y Seguridad**
   - Implementación de JWT para sesiones seguras y autenticación.
   - Uso de bcrypt para el almacenamiento seguro de contraseñas.

2. **Administración y Colaboración**
   - Administración basada en roles y permisos por entidades y grupos.
   - Capacidad para compartir archivos entre usuarios dentro del cloud.
     
**Nota: Actualmente, el desarrollo del backend de VCloud está en curso. Se están implementando y probando nuevas funcionalidades y características para mejorar la plataforma. Esperamos lanzar una versión estable próximamente.**
