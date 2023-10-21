import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify()
const database = new DatabaseMemory()

server.post('/notes', (request, reply) => {
    const { title, content } = request.body
    database.create({
        title,
        content,
    })
    return reply.status(201).send()
})

server.get('/notes', (request, reply) =>{
    const notes = database.list()

    console.log(notes)

    return notes
})

server.put('/notes/:id', (request, reply) =>{
    const noteId = request.params.id
    const { title, content } = request.body
    database.update(noteId, {
        title,
        content,
    })
    return reply.status(204).send()
})
server.delete('/notes/:id', (request, reply) =>{
    const noteId = request.params.id

    database.delete(noteId)

    return reply.status(204).send()
})

server.listen({
    port: 3333,
})