import { SelectChangeEvent, TextField } from '@mui/material';

type CarInputsProps = {
  handleChange: (e: SelectChangeEvent<string>
  | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  isCar?: boolean,
};

function FormInputs({ handleChange, isCar = false }: CarInputsProps) {
  return (
    <>
      <TextField
        name="modelo"
        variant="outlined"
        label="Modelo"
        onChange={ handleChange }
      />
      <TextField
        name="anoDeFabricacao"
        variant="outlined"
        label="Ano de Fabricação"
        onChange={ handleChange }
      />
      {isCar && (
        <TextField
          name="quantidadeDePortas"
          variant="outlined"
          label="Quantidade de Portas"
          onChange={ handleChange }
        />)}
      {!isCar && <TextField
        name="passageiros"
        variant="outlined"
        label="Número de passageiros"
        onChange={ handleChange }
      />}
      <TextField
        name="marca"
        variant="outlined"
        label="Marca"
        onChange={ handleChange }
      />
    </>
  );
}

export default FormInputs;
