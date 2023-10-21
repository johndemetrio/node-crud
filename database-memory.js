import { randomUUID } from "node:crypto"

export class DatabaseMemory{
    #notes = new Map()

    list(){
        return Array.from(this.#notes.entries()).map((noteArray) => {
            const id = noteArray[0]
            const data = noteArray[1]

            return{
                id,
                ...data
            }
        })
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