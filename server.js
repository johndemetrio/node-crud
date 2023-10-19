//import { createServer } from 'node:http'

//const server = createServer((request, response) => {
//    response.write('oi')

//    return response.end()
//})

//server.listen(3333)
import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify()
const database = new DatabaseMemory()

server.post('/notes', () =>{
    database.create({
        title:'nota 1',
        content: 'essa nota é um teste para o crud em node.js',
    })
    console.log(database.list())
})
server.get('/', () =>{
    return 'hello world'
})

server.listen({
    port: 3333,
})