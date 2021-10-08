import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import shapes from './dragAndDropData/shapes';
import columns from './dragAndDropData/columns';
import './App.css';

const App = () => {
  const [columnsList, setColumnsList] = useState(columns)

  const handleOnDragEnd = (result) => {
    console.log(result);

    const { destination, source } = result;

    if (!destination) return;

    const [movedItem] = columnsList.splice(source.index, 1);
    columnsList.splice(destination.index, 0, movedItem);

    setColumnsList(columnsList);
  }

  return (
    <div className='App'>
      <header>
        <h1>Shapes</h1>
      </header>
      <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId='shapes'>
            {(provided) => (
              <div className='shapes' {...provided.droppableProps} ref={provided.innerRef}>
                {columnsList.map((column) => (
                  <div className='column'>
                    {column.cards.map((shape, index) => (
                      <div>
                        {/* {console.log('shape/index:', shape, index)} */}
                        <Draggable key={shape.id} draggableId={shape.id} index={index}>
                          {(provided) => (
                            <div className='shape' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                              {console.log('shape/index/key:', shape, index, shape.id)}
                              <img src={shape.img} alt={`${shape.name}`} width='20px' />
                              <span>{shape.name}</span>
                            </div>
                          )}
                        </Draggable>
                      </div>
                    ))}
                  </div>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      <footer>
        <p>@2021</p>
      </footer>
    </div>
  )
}

export default App;
