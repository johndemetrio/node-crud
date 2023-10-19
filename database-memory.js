import { randomUUID } from "node:crypto"

export class DatabaseMemory{
    #notes = new Map()

    list(){
        return this.#notes.values
    }
    create(note){
        const noteId = randomUUID()
        this.#notes.set(noteId, note)
    }
    update(id, note){
        this.#notes.set(id, note)
    }

    delete(id){
        this.#notes.delete(id)
    }
}