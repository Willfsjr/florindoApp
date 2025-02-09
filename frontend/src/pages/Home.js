import ProdutoLista from "../components/ProdutoLista";

const Home = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Contagem de Estoque</h1>
            <ProdutoLista />
        </div>
    );
};

export default Home;