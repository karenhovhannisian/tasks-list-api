export const VALIDATION_ERROR: string = `Request didn't pass validation`;
export const PERMISSION_DENIED: string = 'Permission Denied';
export const SOMETHING_WENT_WRONG: string = 'Something went wrong, please try again';

export const INVALID: (resource: string) => string = (resource: string): string => `Неверный ${resource}`;
export const NOT_EXISTS: (resource: string) => string  = (resource: string): string => `${resource} не существует`;

export const SERVICE_UNAVAILABLE: string = 'Service is temporarily unavailable';
export const JWT_AUTH: string = 'jwt';

export const TOKEN_EXPIRED: string = 'Токен истёк';
export const REQUIRED_MESSAGE: string = 'Поле является обязательным для заполнения';
export const INVALID_USERNAME_OR_PASSWORD: string = 'Неверный логин или пароль';
