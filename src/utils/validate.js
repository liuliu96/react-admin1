
const reg_password=/^(?!(?:\d+|[a-zA-Z]+)$)[\da-zA-Z]{6,}$/;
const reg_email=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
export const validatePassword=/^(?!(?:\d+|[a-zA-Z]+)$)[\da-zA-Z]{6,}$/;
export function validate_email(value){
    return reg_email.test(value)
};
export function validate_pass(value){
    return reg_password.test(value)
}