import React from 'react';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask = new Task('Mi Nombre', 'Mi Apellido', 'example@example.com', false);
    
    const changeState = (id) => {
        console.log( 'TODO: Cambiar estado de una tarea')
    }
     
    return (
        <div>
            <div>
                <h1>
                    Your Tasks :
                </h1>
            </div>
            {/*TODO Aplicar un FOR/MAP para renderizar una lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};




export default TaskListComponent;
