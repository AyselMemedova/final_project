import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/routes";
import MainContext from "./context/context";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [basket, setBasket] = useState(
        localStorage.getItem("basketForDiplomWork")
            ? JSON.parse(localStorage.getItem("basketForDiplomWork"))
            : []
    );

    const router = createBrowserRouter(ROUTES);

    useEffect(() => {
        axios.get("http://localhost:8080/api/mehsular")
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(true);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        localStorage.setItem("basketForDiplomWork", JSON.stringify(basket));
    }, [basket]);

    return (
        <MainContext.Provider value={{ data, setData, loading, setLoading, error, setError, basket, setBasket }}>
            <RouterProvider router={router} />
        </MainContext.Provider>
    );
}

export default App;
