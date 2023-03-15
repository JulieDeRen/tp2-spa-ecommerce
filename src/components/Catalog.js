import SingleCard from './SingleCard'

const Catalog = ({tasks, onDeleteMany, onToggleMany}) => {
    return(
        <div className='grid-container--fit'>
            {tasks.map((task)=>(
                <SingleCard key={task.id} task={task} onDelete={onDeleteMany} onToggle={onToggleMany}/>
            ))}
        </div>
    )
}

export default Catalog;