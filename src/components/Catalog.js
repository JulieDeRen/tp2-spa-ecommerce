import SingleCard from './SingleCard'

const Catalog = ({tasks, onDeleteMany, onEditMany, onToggleMany}) => {
    return(
        <div className='grid-container--fit'>
            {tasks.map((task)=>(
                <SingleCard key={task.id} event={task} onDelete={onDeleteMany} onEdit={onEditMany} onToggle={onToggleMany}/>
            ))}
        </div>
    )
}

export default Catalog;