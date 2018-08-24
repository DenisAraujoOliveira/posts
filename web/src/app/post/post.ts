// tslint:disable-next-line:quotemark
import { User } from './../user/user';
import { Campanha } from './../campanha/campanha';

export interface Post {
  id?: number;
  nome_post: string;
  text: string;
  url: string;
  prazo: Date;
  campanha: Campanha;
  usuario: User;
}
