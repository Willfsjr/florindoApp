import { useEffect, useState } from "react";
import { getProdutos } from "../services/api";

const ProdutoLista = () => {
    const [produtos, setProdutos] = useState([]);
    const [contagens, setContagens] = useState({});

    useEffect(() => {
        async function carregarProdutos() {
            const data = await getProdutos();
            setProdutos(data);
        }
        carregarProdutos();
    }, []);

    const handleContagemChange = (id, valor) => {
        setContagens((prev) => ({ ...prev, [id]: valor }));
    };

    return (
        <div>
            <h2 className="text-xl font-bold">Lista de Produtos para Contagem</h2>
            <table className="w-full border-collapse border border-gray-300 mt-4">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Nome</th>
                        <th className="border border-gray-300 px-4 py-2">Código de Barras</th>
                        <th className="border border-gray-300 px-4 py-2">Quantidade Estoque</th>
                        <th className="border border-gray-300 px-4 py-2">Contagem</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto.id}>
                            <td className="border border-gray-300 px-4 py-2">{produto.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{produto.nome}</td>
                            <td className="border border-gray-300 px-4 py-2">{produto.codigo_barras}</td>
                            <td className="border border-gray-300 px-4 py-2">{produto.quantidade_estoque}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <input
                                    type="number"
                                    min="0"
                                    className="border px-2 py-1 w-full"
                                    value={contagens[produto.id] || ""}
                                    onChange={(e) =>
                                        handleContagemChange(produto.id, e.target.value)
                                    }
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProdutoLista;
