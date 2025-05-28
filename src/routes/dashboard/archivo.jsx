import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { listaArchivosVer } from "@/constants";
import { Footer } from "@/layouts/footer";
import { Search, ALargeSmall, HandCoins, TriangleAlert, Download, CreditCard, DollarSign, Package, PencilLine, Star, Trash, TrendingUp, Users } from "lucide-react";

const Archivospage = () => {
    const { theme } = useTheme();
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Filtrar documentos por búsqueda
    const filteredDocuments = listaArchivosVer.filter((documento) =>
        documento.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        documento.documenttype.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calcular el rango de documentos a mostrar en la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentDocuments = filteredDocuments.slice(indexOfFirstItem, indexOfLastItem);

    // Calcular el número total de páginas
    const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);

    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex justify-between items-center">
                <h1 className="title">Visualizador de Archivos</h1>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Buscar documento..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-slate-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" size={20} />
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <p className="card-title">Documentos</p>
                </div>
                <div className="card-body p-0">
                    <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
                        <table className="table">
                            <thead className="table-header">
                                <tr className="table-row">
                                    <th className="table-head">Nombre del Documento</th>
                                    <th className="table-head">Páginas</th>
                                    <th className="table-head">Tipo de Documento</th>
                                    <th className="table-head">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {currentDocuments.map((documento) => (
                                    <tr
                                        key={documento.name}
                                        className="table-row"
                                    >
                                        <td className="table-cell">{documento.name}</td>
                                        <td className="table-cell">{documento.pages}</td>
                                        <td className="table-cell">{documento.documenttype}</td>
                                        <td className="table-cell">
                                            <div className="flex items-center gap-x-4">
                                                <button className="text-lime-500">
                                                    <Search size={20} />
                                                </button>
                                                <button className="text-blue-500 dark:text-blue-600">
                                                    <PencilLine size={20} />
                                                </button>
                                                <button className="text-violet-500">
                                                    <ALargeSmall size={28} />
                                                </button>
                                                <button className="text-red-500">
                                                    <Trash size={20} />
                                                </button>
                                                <button className="text-neutral-500">
                                                    <HandCoins size={20} />
                                                </button>
                                                <button className="text-yellow-500">
                                                    <TriangleAlert size={20} />
                                                </button>
                                                <button className="text-green-500">
                                                    <Download size={20} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-footer flex justify-between items-center">
                    <div className="flex gap-x-4">
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Anterior
                        </button>
                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Siguiente
                        </button>
                    </div>
                    <div>
                        <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Página {currentPage} de {totalPages}</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Archivospage;