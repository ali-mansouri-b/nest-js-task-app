import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  createTask(@Body() body: Task): Task[] {
    return this.tasksService.createTask(body);
  }

  @Get()
  getTasks(): Task[] {
    return this.tasksService.getTasks();
  }

  @Get(':id')
  getOneTask(@Param('id') id: string): Task {
    return this.tasksService.getOneTask(id);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() body: Task): Task {
    return this.tasksService.updateTask(id, body);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): string {
    return this.tasksService.deleteTask(id);
  }
}
