import React, { useState, useEffect } from "react";
import styles from "../../Styles/Components/History/History.module.css";

const TaskHistory = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Simulando dados (depois você pode conectar com um banco de dados)
        const fetchTasks = async () => {
            const data = [
                { id: 1, name: "Projeto To-Do List", date: "16/01/2025 às 19:20", status: "todo" },
                { id: 2, name: "Projeto Back-End", date: "18/01/2025 às 12:55", status: "todo" }
            ];
            setTasks(data);
        };

        fetchTasks();
    }, []);

    return (
        <div className={styles.ContainerHistory}>
            <table className={styles.HistoryTable}>
                <thead>
                    <tr>
                        <th>Nome da Tarefa</th>
                        <th >A Fazer</th>
                        <th >Em Andamento</th>
                        <th >Concluído</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.name}</td>
                            <td className={styles.todo}>{task.status === "todo" ? task.date : ""}</td>
                            <td className={styles.inProgress}>
                                {task.status === "inProgress" ? "Em progresso..." : "O usuário ainda não avançou a tarefa"}
                            </td>
                            <td className={styles.completed}>
                                {task.status === "completed" ? "Finalizado!" : "O usuário ainda não avançou a tarefa"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskHistory;
