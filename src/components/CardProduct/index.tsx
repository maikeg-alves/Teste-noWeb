import React from "react";
import "./style.css";
import { IProduct } from "../../interface";

interface CardProdutoProps {
  produto: IProduct;
}

const CardProduto: React.FC<CardProdutoProps> = ({ produto }) => {
  return (
    <div className="card">
      <div>
        <img src={produto.img} alt={produto.nome} />
        <div className="categoria">{produto.categoria}</div>
      </div>

      <div className="rectangle-caed"></div>
      <div className="w-100">
        <h3 className="nome">{produto.nome}</h3>
        <div className="preco">
          <div className="preco-original">
            {produto.precoPromocional !== produto.precoOriginal && (
              <span>R$ {produto.precoOriginal.toFixed(2)}</span>
            )}
          </div>

          <div className="price-promo">
            <span>R$ {produto.precoPromocional.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="parcelas">
        {produto.parcelas && (
          <span>
            {`ou em ${
              produto.parcelas.quantidade
            }x de R$ ${produto.parcelas.valor.toFixed(2)}`}
          </span>
        )}
      </div>
    </div>
  );
};

export default CardProduto;
