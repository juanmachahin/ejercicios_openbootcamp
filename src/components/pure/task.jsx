import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class'


const TaskComponent = ({task}) => {
    return (
        <div>
        <h2>
            Nombre:  { task.name }
        </h2>
        <h3>
            Apellido : { task.lastName }
        </h3>
        <h4>
            Email : { task.email }
        </h4>
        <h5>
            Conectado : { task.conectado ? 'Contacto En Línea': 'Contacto No Disponible' }
        </h5>
            
        </div>
    );
};

TaskComponent.propTypes = {
    task : PropTypes.instanceOf(Task)
};




export default TaskComponent;


