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
  return (
    <div className="flex flex-col justify-center gap-y-[10px]">
      <label
        htmlFor={name}
        className="text-text-primary text-[15px] leading-5 font-medium"
      >
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
        className="w-full h-[60px] leading-[30px] py-[15px] px-5 text-text-secondary bg-[#f0f5f7] border-[#f0f5f7] border-[1px] rounded-lg transition-all duration-300 focus-visible:bg-white focus-visible:border-primary"
      />
    </div>
  );
}

export default FormElement;
