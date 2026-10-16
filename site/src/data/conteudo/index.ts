/**
 * Indice do conteudo das paginas de servico.
 *
 * Cada servico mora no proprio arquivo: o texto de uma pagina passa de 90
 * linhas, e seis deles num arquivo so passariam de 800 — ninguem acha nada
 * ali dentro depois. Aqui fica apenas a ligacao entre o `id` do servico
 * (em `servicos.ts`) e o conteudo dele.
 *
 * Para publicar um servico novo: cria o arquivo ao lado, importa e adiciona
 * uma linha no mapa. A rota, o sitemap e os links aparecem sozinhos.
 */
import type { ConteudoPagina } from './tipos';
import { aberturaDePortas } from './abertura-de-portas';
import { chaveiroAutomotivo } from './chaveiro-automotivo';
import { copiaDeControle } from './copia-de-controle';
import { fechaduraDigital } from './fechadura-digital';
import { instalacaoDeFechadura } from './instalacao-de-fechadura';
import { trocaDeSegredo } from './troca-de-segredo';

export type { ConteudoPagina, Secao } from './tipos';

/** A chave e o `id` do servico em `servicos.ts`. */
export const conteudoServicos: Record<string, ConteudoPagina> = {
  abertura: aberturaDePortas,
  'fechadura-digital': fechaduraDigital,
  'troca-de-segredo': trocaDeSegredo,
  controles: copiaDeControle,
  automotivo: chaveiroAutomotivo,
  instalacao: instalacaoDeFechadura,
};

/** Serve ao `getStaticPaths`: so vira pagina o servico que tem conteudo escrito. */
export function temPagina(idDoServico: string): boolean {
  return idDoServico in conteudoServicos;
}
