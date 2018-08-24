// tslint:disable-next-line:quotemark
import { Cliente } from "../cliente/cliente";

export interface Campanha {
  id: number;
  nome_campanha: string;
  comeco_campanha: Date;
  final_campanha: Date;
  cliente: Cliente;
}
