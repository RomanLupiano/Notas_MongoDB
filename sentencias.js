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



var user5 = {
    name: 'user5',
    email: 'user5@gmail.com',
    support: true,
    createdAt: new Date()
}

//Obtener todos los usuarios que tengan el atributo edad
db.users.find(
    {
        age:{
            $exists: true
        }
    }
)

//obtener todos los usuarios cuyo atributo createdAt sea de tipo date
db.users.find(
    {
        createdAt:{
            $type: 'date'
        }
    }
)

//Alias de los tipos
//Double            'double'
//String            'string'
//Object            'Object'
//Array             'array'
//ObjectId          'objectId'
//Boolean           'boolean'
//Date              'date'
//Null              'null'
//Reg. Expression   'regex'
//Timestamp         'timestamp'


//Si quisieramos actualizar el valor de support a falso hay dos maneras
//db.users.save(user5edit) -> obsoleto

var user5edit = db.users.findOne( //Obtenemos el objeto a modificar
    {name: 'user5'}
)

user5edit       //Puedo visualizar el objeto y sus atributos
user5edit.name
user5edit.support

//Primera manera
db.users.updateOne(
    { _id: user5edit._id },
    { $set: { support: false } }
)
//Encuentra el usuario con la _id y con $set cambia el valor de support a false.


//Segunda manera
user5edit.support = false //Nosotros modificamos el valor de user5edit

db.users.replaceOne(
    { _id: user5edit._id },
    user5edit             
)
//Reemplazamos todo el docuemento con los valores de user5edit


//De ambas maneras también se puede agregar un nuevo atributo
db.users.updateOne(
    { _id: user5edit._id },
    { $set: { age: 21 } }
)

user5edit.age = 21 //Agregamos el nuevo atributo
db.users.replaceOne(
    { _id: user5edit._id },
    user5edit             //Se reemplaza todo el documento por el nuevo modificado
)


//Agregar el atributo support a todos aquellos que no lo posean
db.users.updateMany(
    {       //Criterios de búsqueda
        support: {
            $exists: false //"En donde no exista support"
        }
    },     
    {       //Cambios a implemementar
        $set: {
            support: false //Agreamos el atributo support con falso
        }

    }      
)

db.users.updateOne(
    {
        name:'user1'
    },
    {
        $set: {
            support: true
        }
    }
)