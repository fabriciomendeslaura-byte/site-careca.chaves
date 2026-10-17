/**
 * Indice das paginas de bairro.
 *
 * So entra aqui o bairro sobre o qual existe algo verdadeiro e especifico a
 * dizer. Pagina de bairro que e copia da outra trocando o nome e doorway page,
 * e o Google pune — alem de nao ajudar ninguem que chegar nela.
 *
 * Para publicar um bairro novo: cria o arquivo ao lado, importa e adiciona uma
 * linha no mapa. A rota, o sitemap e os links aparecem sozinhos.
 */
import type { Bairro } from './tipos';
import { copacabana } from './copacabana';

export type { Bairro, BlocoBairro } from './tipos';

export const bairros: Bairro[] = [copacabana];
