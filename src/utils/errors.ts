type Error = { message: string };

interface Errors {
  (json: Error): Error;
  404: Error;
}

const errors: Errors = ({ message }) => ({ message });
errors[404] = { message: 'Not Found' };

export default errors;
