import Curso from "./Curso/Curso";


function CursoContainer({cursos, loading}) {
    return (
        <>
            <div className="container px-4 py-5" id="featured-3">
                <h2 className="pb-2 border-bottom">Cursos</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    {loading ?
                        <h2>Cargando...</h2>
                        :
                        cursos.map((curso) =>
                            <Curso key={curso.id} curso={curso}/>)}
                </div>
            </div>
        </>
    )
}

export default CursoContainer