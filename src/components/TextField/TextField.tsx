import { ErrorText, HelpText, Input, InputWrapper } from "./TextField.styles";

export interface TextFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  errorMessage?: string;
  helpText?: string;
  disabled?: boolean;
  className?: string;
}

const TextField = ({
  value,
  onChange,
  placeholder = "",
  errorMessage = "",
  helpText = "",
  disabled,
  className,
}: TextFieldProps) => {
  const hasError = !!errorMessage;
  const hasHelpText = !!helpText;

  return (
    <InputWrapper>
      <Input
        className={className}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        hasError={hasError}
      />
      {hasError ? (
        <ErrorText>{errorMessage}</ErrorText>
      ) : (
        hasHelpText && <HelpText>{helpText}</HelpText>
      )}
    </InputWrapper>
  );
};

export default TextField;
