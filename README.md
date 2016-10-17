# GULP
Primeros pasos con GULP


## INSTALACIÓN ##

@Primero instalaremos HomeBrew ejecutando desde la consola (MAC)

	/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# Instalación de node

Podemos hacerlo desde la línea de comandos
	brew install node

	/*Verificamos su versión*/
	node -v
	npm -v

O bien descargando la última versió e instalándolo desde su web.
https://nodejs.org/es/download/


# Instalación de GULP
	npm install -g gulp

	/*Verificamos su versión*/
	gulp -v


Una vez instalado Gulp.js, NPM y NODE.js, procedemos a crear el entorno de trabajo.

	
#Entorno de trabajo

- Creamos nuestra carpeta de trabajo en nuestro caso es 'GULP'
- Generamos un archivo gulpfile.js
- Por consola, vamos a la carpeta antes creada 'GULP' y escribimos
	npm init

#esto son generará el package.json
	{
	  "name": "gulp",
	  "version": "0.0.1",
	  "description": "Gulp: Iniciación",
	  "main": "gulpfile.js",
	  "author": "alejandrozorita",
	  "license": "MIT"
	}

- Ahora creamos las dependencias en nuestro proyecto
	npm install --save-dev gulp


Una vez realizados estos pasos ya tenemos el entorno preparado para instalar empezar con el proyecto.

- Para cada paqueta será necesario repetir la acción
	//Es importante poner el flag --save para que lo registre en el package.json
	npm install --save-dev gulp-xxx 
	/* Siendo xx el nombre del paquete */

Quedando el package.json de está manera
	{
	  "name": "gulp",
	  "version": "0.0.1",
	  "description": "Gulp: Iniciación",
	  "main": "gulpfile.js",
	  "author": "alejandrozorita",
	  "license": "MIT",
	  "devDependencies": {
	    "gulp": "^3.8.7",
	    "gulp-concat": "^2.3.4",
	    "gulp-uglify": "^0.3.1"
	  }
	}