export default function Todo({todo}){
    const {title, completed} = todo;
    // console.log(todo);

    return(
        <div style={
            {
                border:'2px solid green',
                borderRadius: '20px',
                margin: '20px',
                padding: '20px'
            }
        }>
            <h2>Ttile: {title}</h2>
            <p>Completed: {completed ? 'Completed' : 'Not Completed'}</p>
        </div>
    )
}