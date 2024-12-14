# Login - API Comidas y sus Ingredientes

**Integrantes del Equipo:**  
López Carreño Alexis Oswaldo   
Santiago Anaya Adán Ismael   

**Materia**: Programación Web  
**Docente**: Martínez Nieto Adelina  


**Objetivo**: Generación de un Login que solicite al usuario el ingreso de un correo y una contraseña, estos datos serán verificados mediante solicitudes GET, donde si estos datos coinciden con algún registro de la lista obtenida, se permitirá el acceso a la pantalla principal, donde se podrá mostrar la lista de comidas y usuarios; En caso contrario, se mostrará un mensaje de alerta con el mensaje "Usuario Inválido"

Proyecto Generado con [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10. 

# 1.- Pantallas Principales de la Aplicación  
## Pantalla de Login para validación de Usuarios  
![image](https://github.com/user-attachments/assets/b7366bff-dbcb-4f72-a4f5-4e09ea7cfdf3)

## Pantalla de Validación de Usuario  
![image](https://github.com/user-attachments/assets/3e2bc95b-e43e-4d88-a110-eb79a4c220a6)

## Pantalla Principal  
![image](https://github.com/user-attachments/assets/5c63ab7f-3b72-4480-b5d5-0fce31171e5a)

## Menú de Selección  
![image](https://github.com/user-attachments/assets/8af0cc99-4266-464f-af35-42a720ae37c5)

## Pantalla de Tabla de Usuarios  
![image](https://github.com/user-attachments/assets/42fe88ff-fcac-4a20-a667-8592fb942155)

## Pantalla de Visualización de un Usuario Específico  
![image](https://github.com/user-attachments/assets/9915ee02-84fb-4ed4-8e27-dfe5aa4499c1)

## Pantalla de Tabla de Comidas  
![image](https://github.com/user-attachments/assets/5a0605f4-931a-4b16-8079-589b5f11b049)

## Pantalla de Visualización de una Comida Específica   
![image](https://github.com/user-attachments/assets/1dd4390a-5c0d-4848-a728-42a2c15e917f)

# 2.- Explicación del Código  
Para el desarrollo del proyecto ha sido utilizado Angular para la creación del frontend de la aplicación, cumpliendo con la función de creación de las vistas y de realizar llamadas al Backend para la obtención de información requerida por el usuarios (Lista de usuarios, Lista de Comidas, Validación de un Usuario, Eliminación, etc.). Inmplementando funcionalidades de solicitures estándar: GETM POST, PUT, DELETE.

## Requisitos Previos  
1.- IDE de desarrollo (Visual Studio CODE)  
2.- Instalación del Framework ANGULAR CLI vs 18.2.10  
3.- Instalación de librerias npm  
4.- Instalación de librerias boostrap  
5.- Instalación de libreria ngx pagination  
6.- Instalación de Material Desing (Para la incorporación de componentes)  

## Módulos Generados   
###  Login  
Componente que conforma una interfaz de usuario que permite realizar la autenticación en la aplicación. Se encuentra construida por elemnentos como un mensaje de bienvenida, fondo con degradado, mensaje de introducción a la aplicación, imagenes referentes al tema de la aplicación y un formulario de inicio de sesión que solicita al usuario el ingreso de un email y contraseña

#### Código de estilos CSS  
Conjunto de Estilo CSS, utilizado para la definición de la apariencia del login, define el contenedor principal de la tarjeta, estilos de sombra y tamaño de imagenes para una mejor presentación de Login   

![image](https://github.com/user-attachments/assets/df1a9805-d30b-4303-b6b9-9a157868dbd3)

#### Código de Archivo HTML  
Código HTML que define las estructuras e interfaz de inicio de seción, compuerto por bloques card-header, así como la implementación del componente "<app - footer>"

![image](https://github.com/user-attachments/assets/25d1d92c-884d-4026-9de4-4751ddc2c5f4)

#### Código de Componente  
Componente diseñado para la gestión de la lógica de inicio de sesión de la aplicación, haciendo la importación de los módulos necesarios para el funcionamiento de la interfaz, el componente incluye un formulario para la captura de datos del usuario y la obtención de datos por parte del backend mediante el uso del método getUsers(), Este método hace una llamada a la API del backend para la obtención de la lita de todos los usuarios registrados, utilizando esta información para la comparación de información ingresada por el usuario.

![image](https://github.com/user-attachments/assets/0e541420-57b3-4a79-bac8-756825d54640)

###  Home  
Componente correspondiente al funcionamiento de la pantalla principal de la aplicación, implementando una barra superior que incluye un menú de selección de operaciones donde el usuario puede seleccionar los datos que serán recuperados y mostrados de manera organizada

![image](https://github.com/user-attachments/assets/c47cfc9c-8d15-4b39-820a-a0f925efa0b1)

#### Código de estilos CSS  
Define los estilos para el contenedor con un fondo degradado y centrado, mismo que proporciona una correcta visibilidad de la página, definiendo esquinas redondeadas para los elementos, así como la implementación de una sombra para una mejor presentación de los elementos 

![image](https://github.com/user-attachments/assets/1c02cb0b-cfcc-447a-8fb1-9933059da905)

#### Código de Archivo HTML  
El código proporciona una estructura básica para la página webm implementando una barra superior, contenedor y pie de página. Dentro del código es utilizado el componente <app - footer>, se define principalmente una pantalla amigable preparada para la apertura de otros elementos

![image](https://github.com/user-attachments/assets/370d13da-b278-4a57-93aa-f757910dfa00)

#### Código de Componente  
Implementa las dependencias necesarias para para el funcionamiento del componente, proporciona características como una barra de herramientas, botones, íconos y menú, así mismo implementa componentes para la navegación e interacción con rutas de la aplicación, permitiendo navegar entre las diferentes interfaces creadas

![image](https://github.com/user-attachments/assets/cdc9617f-5c9b-479a-981b-9face0fef777)

###  Footer  
Define el componente de pie de página personalizado dentro de la aplicación. Este componente es utulizado para mostrar información relevante del sistema.

#### Código de estilos CSS  
Estilo CSS que proporciona propiedades de color, radio y tamaño del tipo de letra

![image](https://github.com/user-attachments/assets/1892b965-f3f4-44ea-8111-61392831c45b)

#### Código de Archivo HTML  


![image](https://github.com/user-attachments/assets/ea422a60-9a8c-407b-9f41-19ef8adc1443)

#### Código de Componente  


![image](https://github.com/user-attachments/assets/8d41e78e-514c-43c8-b43a-1680f8ed359a)

###  Header  

#### Código de estilos CSS  

#### Código de Archivo HTML  

#### Código de Componente  

###  Menu  

#### Código de estilos CSS  

#### Código de Archivo HTML  

#### Código de Componente  

###  Comidas-details  

#### Código de estilos CSS  

#### Código de Archivo HTML  

#### Código de Componente  

###  Componentes Específicos

#### Código de estilos CSS  

#### Código de Archivo HTML  

#### Código de Componente  

###  Usuarios-details  

#### Código de estilos CSS  

#### Código de Archivo HTML  

#### Código de Componente  

## Servicios Generados   

###  Comida  

#### Código de estilos CSS  

#### Código de Archivo HTML  

#### Código de Componente  

###  Usuarios  

#### Código de estilos CSS  

#### Código de Archivo HTML  

#### Código de Componente  

# 3.- Datos Recuperados


