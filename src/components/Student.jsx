import Score from "./Score"

function Student({students}){
    const output = students.map((student) => {
        return (
            <div className="biography">
                <h3>{student.name}</h3>
                <h4>Biography</h4>
                <p>{student.bio}</p>
                    {student.scores.map((s) => (
                    <Score date={s.date} score={s.score} />))}
                <hr />
            </div>
        )
    })
    return (
        <>
            {output}
        </>
    )
}

export default Student;