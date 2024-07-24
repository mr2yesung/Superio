type FormElementProps = {
  label: string;
  placeholder: string;
  name: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function FormElement({
  label,
  placeholder,
  name,
  type = "text",
  value,
  onChange,
}: FormElementProps) {
  // using server action, no use useState in React
  return (
    <div className="form-element-container">
      <label htmlFor={name} className="form-element-label">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="form-element-input"
      />
    </div>
  );
}

export default FormElement;
