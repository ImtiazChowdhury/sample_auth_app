export default async function loginValidator(payload = {}) {
    const errors = {};
    if (!payload.username) errors.username = "Enter email or phone"
    else if (payload.username.length < 4) errors.username = "Username must be minimum 4 characters "

    if (!payload.password) errors.password = "Enter password"
    else if (payload.password.length < 4) errors.password = "Password must be minimum 4 characters "

    if (Object.values(errors).length) return errors;
    return false;

} 