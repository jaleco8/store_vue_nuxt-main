export function fieldRequired(value) {
    return !!value || 'El campo es requerido'
}

export function requiredAndLength(value) {
    return !!value && value.length <= 25 || 'Disculpa, la contraseña no debe ser mayor a 25 caractéres'
}