import { Input as InputField } from "@chakra-ui/react";

const Input = ({
  size,
  disabled,
  placeholder,
  variant,
  ...rest
}) => {
  return (
    <InputField
      size={size}
      disabled={disabled}
      placeholder={placeholder}
      variant={variant}
      {...rest}
    />
  );
};


export default Input;
