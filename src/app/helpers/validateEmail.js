export const validateEmail = ( e, setValited, setError ) => {

  const valueInput = e.target.value;
  const regName = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if( valueInput.trim() !== "" ){
      if( !regName.test(e.target.value.trim())){
          setValited(false);
          setError("El email ingresado no es válido");
      } else {
          setValited(true);
          setError('');
      }
  } else {
      setValited(false);
      setError("Debe ingresar un email");
  }
}