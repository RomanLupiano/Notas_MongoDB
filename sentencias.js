//El proximo comando crea y selecciona una base de datos.
//use cursoMongoDB

//Las bases de datos en Mongo tienen Colecciones (similar a tablas en SQL) y estas tablas tienen Documentos (similar a fila en SQL)

//Para crear documentos:
var user1 = {
    name: 'user1',
    last_name: 'usuario1',
    age: 21,
    email: 'user1@gmail.com'
}

var user2 = {
    name: 'user2',
    last_name: 'usuario2',
    age: 21,
    email: 'user2@gmail.com'
}

//El siguiente comando crea la colección users e inserta un documento user1
db.users.insertOne(user1)

db.users.insertOne(user2)


// Para consultar los elementos del documento se puede utilizar:
db.users.find()


//InsertMany
var user3 = {
    name: 'user3',
    last_name: 'usuario3',
    age: 23,
    email: 'user3@gmail.com'
}
var user4 = {
    name: 'user4',
    last_name: 'usuario4',
    age: 24,
    email: 'user4@gmail.com'
}

db.users.insertMany(
    [user3, user4]
)

//Consultas
db.users.find(
    {age: 24}, // Criterios -> Where
)

b.users.find(
    {age: 24}, // Criterios -> Where
    {name:true, age:true, _id:false} //Que atributos queremos -> Select
)

//$ne -> not equal
//$eq -> equal
//Obtener todos los usuarios cuya edad sea diferente a 21
db.users.find(
    {
        age:{
            $ne: 21
        }
    }
)

//Obtener todos los usuarios cuya edad sea igual a 23
db.users.find(
    {
        age: {
            $eq: 23
        }
    }
)


//find puede retornar más de un documento
//findOne retorna solo el primer documento que cumpla con la condición
db.users.findOne(
    {
        age:{
            $ne: 21
        }
    }
)

//$gt -> greater than
//$gte -> greater than equal
//Obtener todos los usuarios cuya edad sea mayor a 24
db.users.find(
    {
        age:{
            $gt: 24
        }
    }
)

//Obtener todos los usuarios cuya edad sea mayor igual a 24
db.users.find(
    {
        age:{
            $gte: 24
        }
    }
)

//$lt -> less than
//$lt -> less than equal
//Obtener todos los usuarios cuya edad sea menor igual a 24
db.users.find(
    {
        age:{
            $lte: 24
        }
    }
)


//Operadores lógicos
// $and y $or

//Obtener todos los usuarios cuya edad sea mayor igual a 24 o que sea igual a 21
db.users.find(
    {
        $or: [
            {age: {$gte: 24}},
            {age: {$eq: 21}}
        ]
    }
)

db.users.find(
    {
        $and: [
            {name: 'user1'},
            {age: {$eq: 21}}
        ]
    }
)

db.users.find(
    {
        $or: [
            {age: {$gte: 24}},
            {age: {$eq: 22}},
            {
                $and: [
                    {name: 'user1'},
                    {age: {$eq: 21}}
                ]
            }
        ]
    }
)

//Se crea la colección books y se ingresan varios documentos con insertMany
db.books.insertMany(
    [
        {title: 'Don Quijote de la Mancha', sales: 500},
        {title: 'Cien años de soledad', sales: 450},
        {title: 'La casa de los espíritus', sales: 400},
        {title: 'Rayuela', sales: 350},
        {title: 'Ficciones', sales: 300},
        {title: 'El amor en los tiempos del cólera', sales: 250},
        {title: 'El túnel', sales: 200},
        {title: 'La sombra del viento', sales: 150},
        {title: 'Pedro Páramo', sales: 100},
        {title: 'El Aleph', sales: 50},
        {title: 'La ciudad y los perros', sales: 25}
    ]
)

// like en SQL -> expresión regular en MongoDB
// Obtener todos los libros cuyo titulo comience con 'El'
db.books.find(
    {title: /^El/}
)

// Obtener todos los libros cuyo titulo finalice con 's'
db.books.find(
    {title: /s$/}
)

// Obtener todos los libros contenga 'la'
db.books.find(
    {title: /la/}
)


//$in permite buscar valores dentro de una lista
db.users.find(
    {
        name: {
            $in: ['user1', 'roman', 'pepe']
        }
    }
)

//$nin not in
db.users.find(
    {
        name: {
            $nin: ['user1', 'roman', 'pepe']
        }
    }
)


