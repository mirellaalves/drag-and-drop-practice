import columns from './dragAndDropData/columns';

const test = () => {
    return (
        <div className='globalDiv'>
            {columns.map((column) => (
                column.map((shape) => (
                    shape.cards.map((item) => (
                        <div className='shapeItem'>
                            <img src={item.img} alt={`${item.name} shape`} width='20px' />
                            <span>{item.name}</span>
                        </div>
                    ))
                ))
            ))}
            <div className='column1'>
                <div className='shapesCol1'></div>
            </div>
            <div className='column2'>
                <div className='shapesCol2'></div>
            </div>
        </div>
    )
}

export default test;
