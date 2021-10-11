import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import columns from './dragAndDropData/columns';
import './App.css';

const App = () => {
  const [columnsList, setColumnsList] = useState(columns)

  const handleOnDragEnd = (result) => {
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
        <div className='shapes'>
          {columnsList.map((column) => (
            <Droppable key={column.id} droppableId='shapes'>
              {(provided) => (
                <div className='column' {...provided.droppableProps} ref={provided.innerRef}>
                  {column.cards.map((shape, index) => (
                      <Draggable key={shape.id} draggableId={shape.id} index={index}>
                        {(provided) => (
                          <div className='shape' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <img src={shape.img} alt={`${shape.name}`} width='20px' />
                            <span>{shape.name}</span>
                          </div>
                        )}
                      </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
      <footer>
        <p>@2021</p>
      </footer>
    </div>
  )
}

export default App;
