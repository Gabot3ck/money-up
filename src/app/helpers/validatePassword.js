

export const validatePassword = ( e, setValited, setError ) => {
  const valueInput = e.target.value;
  const regName = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

      if( valueInput.trim() !== "" ){
          if( !regName.test(e.target.value.trim())){
              setValited(false);
              setError("Mínimo 6 dígitos, 1 símbolo, 1 mayúscula y 1 número");
          } else {
              setValited(true);
              setError('');
          }
      } else {
          setValited(false);
          setError("Debe ingresar una contraseña");
      }
}
