# COMANDOS CDM-POWERSHELL-BASH-CONSOLA

1. ls: Lista de carpetas y archivos.

   - Param: -l Lista detallada

2. cd: Acceder a las carpetas tiene como parámetro el nombre(s) de la carpeta por ejm: cd /Users/santiago/Documents

   - cd ../ : Devolverse en un nivel

3. clear: Limpiar la consola

4. mkdir `nombre_de_la_carpeta`: Crear una carpeta por ejm: mkdir pruebaCMD

5. cp `ruta_origen` `ruta_destino`: Copiar un archivo de un origen a un destino por ejm: cp ../../Downloads/05012.pdf .

- NOTA: El (.) significa que es el directorio actual donde estoy ubicado.

6. rm `nombre_archivo_o_directorio`: Remover archivo o directorio de una ubicación.

- Param: -r Remover de forma recursiva todos los archivos y carpetas de un directorio seleccionado

7. nano `nombre_del_archivo`: Abrir el editor de texto de la consola y editar un archivo

8. chmod `numero_del_permiso` `nombre_del_archivo`: Agregar o actualizar los permisos de un archivo

9. chmod -R `numero_del_permiso` `nombre_del_directorio`: Agregar o actualizar los permisos de un directorio

- NOTA: -R sirve para darle permisos recursivo al contenido del directorio.

10. mv `ruta_origen` `ruta_destino`: Mover un archivo o directorio de un lugar a otro

11. zip -r `nombre_archivo_zip` `nombre_carpeta_a_comprimir`: Comprimir un directorio

12. pwd: Muestra la ruta de la carpeta actual

13. sudo su: Acceder como usuario root por consola.
14. sudo su `nombre_del_usuario`: Acceder como el usuario indicado
15. top: Muestra todos los procesos que se están ejecutando en el sistema.
16. ps: Muestra los procesos que se están ejecutando en el usuario.

- ps -xa | grep node

17. kill `PID_del_proceso`: Mata o detiene un proceso
