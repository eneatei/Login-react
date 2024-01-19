import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Swal from "sweetalert2";

const Formulario = ({setErrors}) => {
const [name, setName] = useState ('');
const [email, setEmail] = useState ('');
const [password, setPassword] = useState ('');
const [confirm, setConfirm] = useState ('');


const onSubmit = (e) => {
e.preventDefault();

if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirm.trim() === '') {
setErrors({
error: "Por favor, completa todos los campos",
color: "warning"
});
Swal.fire({
position: 'center',
icon: "warning",
title: "Por favor, completa todos los campos",
showConfirmButton: true,
});
return;
}

if(password !== confirm) {
setErrors({
error: "Las contraseñas no coiciden",
color: "danger"
});
Swal.fire({
position: 'center',
icon: "error",
title: "Las contraseñas no coiciden",
showConfirmButton: true,
})
} else{
setErrors({
error: "Las contraseñas coiciden",
color: "success"
});

Swal.fire({
position: 'center',
icon: "success",
title: "Tu registro fue exitoso",
showConfirmButton: false,
timer: 1500,
});
}

setInitialWarning(false);
};



return (
<form onSubmit={onSubmit} >
<FloatingLabel
controlId="floatingInput"
label="Nombre completo"
className="mb-3"
>
<Form.Control
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
/>
</FloatingLabel>

<FloatingLabel
controlId="floatingInput"
label="Email"
className="mb-3"
>
<Form.Control
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
</FloatingLabel>

<FloatingLabel
controlId="floatingPassword"
label="Contraseña"
className="mb-3"
>
<Form.Control
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
</FloatingLabel>

<FloatingLabel
controlId="floatingPassword"
label="Repite la contraseña"
className="mb-3"
>
<Form.Control
type="password"
value={confirm}
onChange={(e) => setConfirm(e.target.value)}
/>
</FloatingLabel>

<Button variant="primary" type="submit">
Registrarse
</Button>
</form>
)
}

export default Formulario
