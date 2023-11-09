interface Parcelas {
  quantidade: number;
  valor: number;
}

export interface IProduct {
  img: string;
  categoria: string;
  nome: string;
  precoOriginal: number;
  precoPromocional: number;
  parcelas: Parcelas | null;
  quantidade?: number;
}
