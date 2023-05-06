// Nuestra app hola-mundo, será una app de gestión de tareas (simil gestión de proyectos). Por lo que dentro de las visuales va a tener tasks...
// Esta Clase que va a tener nombre, descripción, si está completada y el nivel de urgencia.

import { LEVELS } from './levels.enum';

export class Task {
  id = 0;

  name = '';

  description = '';

  isCompleted = false;

  level = LEVELS.NORMAL;

  constructor(id, name, description, isCompleted, level) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.isCompleted = isCompleted;
    this.level = level;
  }
}

export const taskCompletedFormat = {
  color: 'gray',
  textDecoration: 'line-through',
};

export const taskPendingFormat = {
  fontWeight: 'bold',
  color: 'tomato',
};
