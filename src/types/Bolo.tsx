export interface Bolo {
    nome: string;
    id: string | undefined;
    categorias: string [];
    imagens: string[];
    preço: number;
    peso: number | null;
}