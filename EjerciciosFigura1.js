//Muestre los ids, nombres y apellidos de los empleados que no poseen jefe 
db.empleado.find({idJefe: null}, {idEmpleado: 1, nombre: 1, apellido: 1})

//Determine si hay empleados que reciben un sueldo superior 1000 y que tienen un porcentaje de comisión mayor al 10%.
db.empleado.find({sueldo: {$gte: 1000}, porcComision: {$gt: 10}})

//Listar las tareas que tienen sueldo mínimo mayor a 1000 y sueldo máximo menor a 10000.
db.empleado.find({"tarea.sueldoMinimo": {$gt: 1000}, "tarea.sueldoMaximo": {$lt: 10000}}, {tarea: 1})

//Listar las entregas que tengan algún renglón con cantidad mayor a 10.
db.entrega.find({"renglonEntregas.cantidad": {$gt: 10}})

//Incrementar el sueldo en un 10% a los empleados que pertenecen a la ciudad con id igual a 41570.
db.empleado.updateMany({"departamento.idCiudad": 41570}, {$set:{"sueldo": {"$multiply": ["$sueldo", 1.10]}}})

db.empleado.updateMany(
    {
        "departamento.idCiudad": 41570
    }, 
    {
        $set: 
        {
            "sueldo": 
            {
                "$multiply": ["$sueldo", 1.10]
            }
        }
    }
)
//Listar todas las tareas distintas que se están siendo ejecutadas por los empleados.

//Listar el identificador del Video y la cantidad de entregas que se le han realizado, ordenados por la cantidad.

//Determinar la cantidad de películas producidas por cada empresa productora.

//Listar 5 ciudades en la que se han producido más de 5 películas de género Infantil.

//Asignar un 10% de comisión a los empleados que no tienen comisión y que están desarrollando tareas con un sueldo mínimo mayor a 2000.
