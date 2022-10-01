export class Todo{
    public id: number;
    public texto: string;
    public finalizado: boolean;

    constructor(texto: string) {
        this.texto = texto;
        this.id = Math.random();
        this.finalizado = false;
    }
}