import { MdDelete, MdEdit } from "react-icons/md";
import CrudPage from "@/app/components/shared/CrudPage/CrudPage";
import { FormProduct } from "@/app/screens/Products/FormProduct";

const model = {
    code: "",
    name: "",
    description: "",
    purchasePrice: "",
    salePrice: "",
    category: "",
    stock: "",
};

const columns = ({ onEdit, onDelete }) => [
    { field: "code", headerName: "Code", width: 150 },
    { field: "name", headerName: "Nombre", flex: 1 },
    { field: "category", headerName: "Categoría", flex: 1 },
    { field: "purchasePrice", headerName: "Precio Compra", width: 150 },
    { field: "salePrice", headerName: "Precio Venta", width: 150 },
    { field: "stock", headerName: "Stock", width: 150 },
    {
        field: "actions",
        headerName: "Acciones",
        width: 200,
        renderCell: (params) => (
            <>
                <MdEdit  style={{ cursor: "pointer", marginRight: 10 }} size={20} onClick={() => onEdit(params.row)} />
                <MdDelete style={{ cursor: "pointer", color: "red" }} size={20} onClick={() => onDelete(params.row)} />
            </>
        ),
    },
];

export default function Products() {
    return (
        <CrudPage
            title="Gestión de Productos"
            apiEndpoint="/api/products"
            model={model}
            columns={columns}
            FormComponent={FormProduct}
        />
    );
}
