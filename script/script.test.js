export const cvv = (value) => {
    const replace = /^(\d){3}$/g;
    return replace.test(value)
}

export const cvc = (value) => {
    const clear = value.replace(/\//g, '');
    const replace = /^(\d){4}$/g;
    return replace.test(clear)
}

export const number = (value) => {
    const clear = value.replace(/-/g, '');
    const replace = /^(\d){8,16}$/g;
    return replace.test(clear)
}

export const holder = (value) => {
    const replace = /\b\D\w+\b\s\b\D\w+\b/i;
    return replace.test(value)
}

