import { Observable } from "rxjs";

export interface Mensaje {
    nombre: string,
    mensaje: string,
    image?: Observable<any>,
    tipo: string,
    fecha?: number,
    uid?: number
}