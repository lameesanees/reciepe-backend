//1. import json-server
const jsonServer = require('json-server')
//2.create a server application using json-server
const restServer=jsonServer.create()

//3. setup path for db.json 
const router=jsonServer.router('db.json')

//4. return a middilware instance used by json-server
const middilware=jsonServer.defaults()

//5. setup port for db.json
const port=8001

//6. use in server
restServer.use(middilware)
restServer.use(router)

//7. to run the server(restServer)
restServer.listen(port,()=>{
    console.log('reciepe server listening on port',port);
})
