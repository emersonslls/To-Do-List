/* <--- FUNCTIONS REACT ---> */
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

/* <--- CSS ---> */
import styles from "../../Styles/Components/List/ToDoList.module.css";

/* <--- ASSETS ---> */
import AdicionarNovaTarefa from "../../Assets/Icons/Add.svg";
import DeletarTarefa from '../../Assets/Icons/Delete.svg';
import Check from '../../Assets/Icons/Check.svg';
import Close from '../../Assets/Icons/Close.svg';

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

  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("toDo");

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

  const handleAddTask = () => {
    if (!newTask.trim()) return;

    const newTaskObj = { id: `${Date.now()}`, content: newTask };
    setColumns({
      ...columns,
      [selectedColumn]: {
        ...columns[selectedColumn],
        items: [...columns[selectedColumn].items, newTaskObj],
      },
    });

    setShowModal(false);
    setNewTask("");
  };

  const handleDeleteTask = (columnId, taskId) => {
    setColumns((prevColumns) => {
      const updatedItems = prevColumns[columnId].items.filter(item => item.id !== taskId);
      return {
        ...prevColumns,
        [columnId]: {
          ...prevColumns[columnId],
          items: updatedItems,
        },
      };
    });
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd} appendTo={document.body}>
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
                    onClick={() => {
                      setShowModal(true);
                      setSelectedColumn(columnId);
                    }}
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
                              <img src={DeletarTarefa} className={styles.DeleteIcon} />
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

      {showModal && (
        <div className={styles.ModalOverlay}>
          <div className={styles.ModalContent}>
            <h2>Adicionar nova tarefa</h2>
            <input
              type="text"
              placeholder="Nome da tarefa"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <div className={styles.CategoryOptions}>
              <div
                className={`${styles.CategoryOption} ${selectedColumn === "toDo" ? `${styles.Selected} ${styles.toDo}` : ""}`}
                onClick={() => setSelectedColumn("toDo")}
              >
                <div className={styles.Category}>
                  <h3>A Fazer</h3>
                  <p>Essa nova tarefa está por fazer</p>
                </div>
                <img src={Check} />
              </div>
              <div
                className={`${styles.CategoryOption} ${selectedColumn === "inProgress" ? `${styles.Selected} ${styles.inProgress}` : ""}`}
                onClick={() => setSelectedColumn("inProgress")}
              >
                <div className={styles.Category}>
                  <h3>Em Andamento</h3>
                  <p>Essa tarefa está em andamento</p>
                </div>
                <img src={Check} />
              </div>
              <div
                className={`${styles.CategoryOption} ${selectedColumn === "done" ? `${styles.Selected} ${styles.done}` : ""}`}
                onClick={() => setSelectedColumn("done")}
              >
                <div className={styles.Category}>
                  <h3>Concluído</h3>
                  <p>Esta tarefa foi concluída</p>
                </div>
                <img src={Check} />
              </div>
            </div>
            <button className={styles.AddTaskButton} onClick={handleAddTask}>
              Adicionar tarefa
            </button>
            <button className={styles.CancelButton} onClick={() => setShowModal(false)}>
              <img src={Close} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
