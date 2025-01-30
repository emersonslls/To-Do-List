import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import styles from '../../Styles/Components/List/ToDoList.module.css';
import AdicionarNovaTarefa from '../../Assets/Icons/Add.svg';

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
    setColumns({
      ...columns,
      [columnId]: {
        ...columns[columnId],
        items: [...columns[columnId].items, newTask],
      },
    });
  };

  const handleDeleteTask = (columnId, taskId) => {
    setColumns({
      ...columns,
      [columnId]: {
        ...columns[columnId],
        items: columns[columnId].items.filter(item => item.id !== taskId),
      },
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <section className={styles.SectionTarefas}>
        {Object.entries(columns).map(([columnId, column]) => (
          <Droppable key={columnId} droppableId={columnId}>
            {(provided) => (
              <section
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={styles.Tarefas}
              >
                <div className={styles.NomeSection}>
                  <h1>{column.name}</h1>
                  <span>{column.items.length}</span>
                </div>
                <img
                  src={AdicionarNovaTarefa}
                  className={styles.AddButton}
                  onClick={() => handleAddTask(columnId)}
                  alt="Adicionar Tarefa"
                />
                <div className={styles.TaskList}>
                  {column.items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={styles.Task}
                        >
                          <span>{item.content}</span>
                          <button 
                            className={styles.DeleteButton} 
                            onClick={() => handleDeleteTask(columnId, item.id)}
                          >
                            ❌
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
                {provided.placeholder}
              </section>
            )}
          </Droppable>
        ))}
      </section>
    </DragDropContext>
  );
}
