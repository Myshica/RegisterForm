import React, {useState} from 'react';

function RegisterForm() {
    const [registerForm, setRegisterForm] = useState({'first_name': '', 'full_name': '', 'login': '', 'password': '', 'email': ''})
    const [errors, setErrors] = useState({})

    function handleSubmitRegister(e) {
        e.preventDefault()
        const newErrors = validate()
        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
            console.log("OK")
        }
    }

    function onChangeRegister(event) {
        setRegisterForm({...registerForm, [event.target.name]: event.target.value})
    }

    function onBlur() {
        setErrors(validate())
    }

    function validate() {
        const newErrors = {}

        if (!registerForm.first_name.trim()) {
            newErrors.first_name = "Значение не должно быть пустым."
        }
        if (!registerForm.full_name.trim()) {
            newErrors.full_name = "Значение не должно быть пустым."
        }
        if (!registerForm.login.trim()) {
            newErrors.login = "Значение не должно быть пустым."
        }
        if (!registerForm.email.trim()) {
            newErrors.email = "Значение не должно быть пустым."
        }
        if (!registerForm.password.trim()) {
            newErrors.password = "Значение не должно быть пустым."
        }
        else {

            if (!/^[А-Яа-я]+$/.test(registerForm.first_name)) {
                newErrors.first_name = "Имя - должно содержать только кирилицу."
            } else if (registerForm.full_name[0].toLowerCase() === registerForm.full_name[0]) {
                newErrors.first_name = "Имя - должна начинаться с заглавной буквы."
            }

            if (!/^[А-Яа-я]+$/.test(registerForm.full_name)) {
                newErrors.full_name = "Фамилия - должна содержать только кирилицу."
            } else if (registerForm.full_name[0].toLowerCase() === registerForm.full_name[0]) {
                newErrors.full_name = "Фамилия - должна начинаться с заглавной буквы."
            }

            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(registerForm.email)) {
                newErrors.email = "Неверный формат почты."
            }

            if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-_,=@%]).{8,}$/.test(registerForm.password)) {
                newErrors.password = "Формат пароля должен быть больше 8 символов, содержать 1 букву англ, содержать 1 большую букву, 1 цифру, содержать 1 символ из '-_,=@%'";
            }
        }

        return newErrors
    }

    return (
        <form onSubmit={handleSubmitRegister}>
            <div>
                <div>
                    <h3>Ваше Имя:</h3>
                    <input name="first_name" onChange={onChangeRegister} onBlur={onBlur}/>
                </div>
                {errors.first_name && <h2>{errors.first_name}</h2>}

                <div>
                    <h3>Ваше Фамилия:</h3>
                    <input name="full_name" onChange={onChangeRegister} onBlur={onBlur}/>
                </div>
                {errors.full_name &&<h2>{errors.full_name}</h2>}

                <div>
                    <h3>Ваш Логин:</h3>
                    <input name="login" onChange={onChangeRegister} onBlur={onBlur}/>
                </div>
                {errors.login && <h2>{errors.login}</h2>}

                <div>
                    <h3>Ваша Почта:</h3>
                    <input name="email" onChange={onChangeRegister} onBlur={onBlur}/>
                </div>
                {errors.email && <h2>{errors.email}</h2>}

                <div>
                    <h3>Ваш Пароль:</h3>
                    <input name="password" onChange={onChangeRegister} onBlur={onBlur}/>
                </div>
                {errors.password && <h2>{errors.password}</h2>}
            </div>

            <button type="submit">Регистрация</button>
        </form>

    );
}

export default RegisterForm;