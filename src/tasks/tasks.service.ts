import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class TasksService {
  tasks: any[] = [
    {
      id: 'asd1',
      title: 'Task Number One',
      description: 'Simple Task for My App',
    },
    {
      id: 'qwe2',
      title: 'Go to a Store',
      description: 'Because I need to buy some Milk',
    },
    { id: 'zxc3', title: 'Wash a Car', description: 'Ohh, it is dirty' },
  ];

  // create task
  createTask(task: any): any[] {
    if (task.title === '' || task.description === '') {
      throw new BadRequestException();
    }

    const taskToCreate: any = {
      id: new Date().getTime().toString(),
      title: task.title,
      description: task.description,
    };
    this.tasks.push(taskToCreate);
    return [...this.tasks];
  }

  // Get All Tasks
  getTasks(): any[] {
    return [...this.tasks];
  }

  private findTask(id: string): any {
    const task = this.tasks.find((item) => item.id === id);
    return task;
  }

  // Get One Task
  getOneTask(id: string): any {
    const task = this.findTask(id);
    if (!task) {
      throw new NotFoundException();
    }
    return { ...task };
  }

  // Update Task
  updateTask(id: string, task: any): any {
    if (task.title === '' || task.description === '') {
      throw new BadRequestException();
    }
    const index = this.tasks.findIndex((item) => item.id === id);
    this.tasks[index] = { ...this.tasks[index], ...task };
    return { ...this.tasks[index] };
  }

  // Delete Task
  deleteTask(id: string): string {
    const task = this.findTask(id);
    if (!task) {
      throw new NotFoundException();
    }
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    return id;
  }
}
