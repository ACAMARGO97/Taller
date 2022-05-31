export interface VentaI {
    id?: number;
    fechaVenta: Date;
    valorTotal: number;
    tipoPago: string;
    usuarioId: string;
}