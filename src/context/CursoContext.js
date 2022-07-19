import {createContext, useEffect, useState} from "react";
import {useFetch} from "../hooks/useFetch";


export const CursoContext = createContext([])
const CURSOS_URL = "http://localhost:4001/cursos"

export const CursosProvider = ({ children }) => {

    const [cargandoCursos, setCargandoCursos] = useState(false);
    const [cursos, setCursos] = useState([]);

    const fetchCursos = useFetch(CURSOS_URL, (response) => {
        setCursos(response)
        setCargandoCursos(false)
    })

    useEffect(() => {
        fetchCursos();
    }, []);

    return (
        <CursoContext.Provider value={{
            cursos,
            cargandoCursos,
            fetchCursos
        }}>
            { children }
        </CursoContext.Provider>
    )
}