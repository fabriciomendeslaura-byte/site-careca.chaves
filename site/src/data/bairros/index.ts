/**
 * Indice das paginas de bairro.
 *
 * So entra aqui o bairro sobre o qual existe algo verdadeiro e especifico a
 * dizer. Pagina de bairro que e copia da outra trocando o nome e doorway page,
 * e o Google pune — alem de nao ajudar ninguem que chegar nela.
 *
 * O angulo proprio de cada uma, para a proxima nao repetir:
 *   Copacabana ..... a oficina fica dentro do bairro; predios antigos
 *   Ipanema ........ condominio com regra para prestador; fechadura tetra
 *   Leblon ......... acesso para terceiros; imovel fechado por temporadas
 *   Barra .......... controle e tag; casa; honestidade sobre a distancia
 *
 * Para publicar um bairro novo: cria o arquivo ao lado, importa e adiciona uma
 * linha na lista. A rota, o sitemap e os links aparecem sozinhos.
 */
import type { Bairro } from './tipos';
import { copacabana } from './copacabana';
import { ipanema } from './ipanema';
import { leblon } from './leblon';
import { barraDaTijuca } from './barra-da-tijuca';

export type { Bairro, BlocoBairro } from './tipos';

export const bairros: Bairro[] = [copacabana, ipanema, leblon, barraDaTijuca];
