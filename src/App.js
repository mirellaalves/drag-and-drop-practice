import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import shapes from './dragAndDropData/shapes';
import columns from './dragAndDropData/columns';
import './App.css';

const App = () => {
  const [shapesList, setShapesList] = useState(shapes)

  const handleOnDragEnd = (result) => {
    console.log(result);

    // const { destination, source } = result;

    // if (!destination) return;

    // const items = Array.from(shapesList);
    // const [movedItem] = items.splice(source.index, 1);
    // items.splice(destination.index, 0, movedItem);

    // setShapesList(items);
  }

  return (
    <div className='App'>
      <header>
        <h1>Shapes</h1>
      </header>
      <DragDropContext>
            <Droppable droppableId='shapes'>
                {(provided) => (
                    <div className='shapes' {...provided.droppableProps} ref={provided.innerRef}>
                        {columns.map((column) => (
                          <div className='column'>
                            {column.cards.map((shape, index) => (
                                <Draggable key={shape.id} draggableId={shape.id} index={index}>
                                    {(provided) => (
                                        <div className='shape' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                            <img src={shape.img} alt={`${shape.name} shape`} width='20px' />
                                            <span>{shape.name}</span>
                                        </div>
                                    )}
                                </Draggable>
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

  // return (
  //   <div className='App'>
  //     <header>
  //       <h1>Shapes</h1>
  //     </header>
  //     <DragDropContext onDragEnd={handleOnDragEnd}>
  //       <Droppable droppableId='shapes'>
  //         {(provided) => (
  //           <ul className='shapes' {...provided.droppableProps} ref={provided.innerRef}>
  //             { shapesList.map(({ id, name, img }, index) => {
  //               return (
  //                 <Draggable key={id} draggableId={id} index={index}>
  //                   {(provided) => (
  //                     <li className='shape' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
  //                       <img src={img} alt={`${name} shape`} width='20px' />
  //                       <span>{name}</span>
  //                     </li>
  //                   )}
  //                 </Draggable>
  //               )
  //             })}
  //             {provided.placeholder}
  //           </ul>
  //         )}
  //       </Droppable>
  //     </DragDropContext>
  //     <footer>
  //       <p>@2021</p>
  //     </footer>
  //   </div>
  // )
}

export default App;
