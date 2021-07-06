import { EMAIL_REGEX } from './constants';

const isValidEmail = (text: string): boolean => EMAIL_REGEX.test(text);

export default isValidEmail;
