# Ossas-server
pasos para que funcione esta api:

1) crear un archivo q se llame ".env" que contenga
// CONFIG
PORT=16000
SECRET_KEY=secretkey123456789

// MONGO
DB_USER=admin
DB_PASSWORD=admin
DB_HOST=cluster0.cicib.mongodb.net
MONGO_DATABASE_NAME= ossas_api
MONGO_URI=mongodb+srv://admin:admin@cluster0.cicib.mongodb.net/ossas_api?retryWrites=true&w=majority

2) npm i

3) npm run dev

el paso 3 debería crear la carpeta "dist" la cual contiene en lenguaje máquina 

*OBS: CAMBIAR A RAMA "dev" PARA DESARROLLO DE LO Q QUIERAN*
