
const Module = ({module}) => {
    return (
        <>
            <div className="module__">
                <div className="image">
                    <span className="niveau">{module.niveau}</span>
                    <span className="annee">{module['annee universitaire']}</span>
                </div>
                <p>{module['responsable du module']}</p>
                <h1>{module['nom module']}</h1>
            </div>
        </>
    )
}

export default Module