import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import "./TodoList.css";

export default function TodoList() {
  const [columns, setColumns] = useState({
    toDo: {
      name: "A Fazer",
      items: [{ id: "1", content: "Comprar leite" }],
    },
    inProgress: {
      name: "Em Andamento",
      items: [],
    },
    done: {
      name: "Concluído",
      items: [],
    },
  });

  const handleDragEnd = ({ source, destination }) => {
    if (!destination) return;

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceColumn, items: sourceItems },
      });
    } else {
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceColumn, items: sourceItems },
        [destination.droppableId]: { ...destColumn, items: destItems },
      });
    }
  };

  const handleAddTask = (columnId) => {
    const taskContent = prompt("Digite a nova tarefa:");
    if (!taskContent) return;

    const newTask = { id: `${Date.now()}`, content: taskContent };
    const updatedColumn = {
      ...columns[columnId],
      items: [...columns[columnId].items, newTask],
    };

    setColumns({ ...columns, [columnId]: updatedColumn });
  };

  return (
    <div className="board">
      <DragDropContext onDragEnd={handleDragEnd}>
        {Object.entries(columns).map(([columnId, column]) => (
          <div key={columnId} className="column">
            <div className="column-header">
              <h2>{column.name}</h2>
              <button onClick={() => handleAddTask(columnId)} className="add-button">
                +
              </button>
            </div>
            <Droppable droppableId={columnId}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="droppable-area"
                >
                  {column.items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="task"
                        >
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
}
