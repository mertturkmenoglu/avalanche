/* eslint-disable import/prefer-default-export */
import { ValidationError } from 'class-validator';
import FieldError from '../responses/FieldError';

export const validationErrorToFieldError = (e: ValidationError[]): FieldError[] => e.map((it) => ({
  field: it.property,
  message: Object.values(it.constraints || {})[0] || 'Invalid value',
}));
