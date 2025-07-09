// taskValidation.js
import Joi from 'joi';

export const addNewTaskSchema = Joi.object({
  taskTitle: Joi.string().min(3).required().messages({
    'string.empty': 'Task title is required',
    'string.min': 'Task title must be at least 3 characters',
  }),
  taskDes: Joi.string().min(5).required().messages({
    'string.empty': 'Description is required',
    'string.min': 'Description must be at least 5 characters',
  }),
  DueDate: Joi.date().greater('now').required().messages({
    'date.greater': 'Due date must be in the future',
    'date.base': 'Invalid date',
    'any.required': 'Due date is required',
  }),
  taskPriority: Joi.string().valid('low', 'medium', 'high').required().messages({
    'any.only': 'Invalid priority selected',
    'any.required': 'Task priority is required',
  }),
});
