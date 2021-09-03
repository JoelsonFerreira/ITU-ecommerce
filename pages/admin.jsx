import { useContext } from "react";
import { AdminContext } from "../contexts/AdminContext";
import CreateProduct from "../layouts/createproduct";
import LogAdmin from "../layouts/logadmin";


function Admin() {
    const { isauth, token } = useContext(AdminContext);

    if(isauth) {
        return <CreateProduct />
    }

    return <LogAdmin />
}


export default Admin;