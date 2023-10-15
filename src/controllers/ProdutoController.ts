import { produtos } from "../database/produtos"
import { Categorias } from "../types/enums/Categorias";
import { Produto } from "../types/interfaces/Produto";

export const buscarPorTexto = (textoDigitado: string): Produto[] | undefined => {
    return produtos.filter(produto => 
        produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
    )  
}

export const buscarPorCategoria = (categoria: Categorias): Produto[] => {
    return produtos.filter(produto => produto.categoria === categoria);
}