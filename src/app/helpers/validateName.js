
export const validateName = (e, setValited, setError) => {

  const valueInput = e.target.value;
  const regName = /^[a-zA-Z0-9\u00f1\u00d1\u00fcÁÉÍÓÚáéíóú]+([\-\. ]?[a-zA-Z0-9\u00f1\u00d1\u00fcÁÉÍÓÚáéíóú]+)*\.?$/;
      
  if( valueInput.trim() !== "" ){
    if( !regName.test(e.target.value.trim())){
      setValited(false);
      setError("El nombre ingresado no es válido");
    } else {
      setValited(true);
      setError('');
    }
  } else {
    setValited(false);
    setError("Debe ingresar un nombre");
  }
}
