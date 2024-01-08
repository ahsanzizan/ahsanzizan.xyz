export function HiddenInfo({
  name,
  value,
}: Readonly<{ name: string; value: string }>) {
  return <input type="hidden" id={name} name={name} value={value} />;
}

type InputProps = {
  name: string;
  label: string;
  placeholder: string;
  defaultValue?: string;
  required?: boolean;
  last?: boolean;
};

export function TextInput({
  name,
  label,
  placeholder,
  defaultValue,
  required,
  last,
}: Readonly<InputProps>) {
  return (
    <div className={`${!last ? "mb-4" : ""}`}>
      <label
        htmlFor={name}
        className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
      >
        {label}
      </label>
      <input
        className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
        style={{ WebkitTextFillColor: "#fff" }}
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
      />
    </div>
  );
}

export function URLInput({
  name,
  label,
  placeholder,
  defaultValue,
  required,
  last,
}: Readonly<InputProps>) {
  return (
    <div className={`${!last ? "mb-4" : ""}`}>
      <label
        htmlFor={name}
        className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
      >
        {label}
      </label>
      <input
        className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
        style={{ WebkitTextFillColor: "#fff" }}
        type="url"
        name={name}
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
      />
    </div>
  );
}

export function TextAreaInput({
  name,
  label,
  placeholder,
  defaultValue,
  required,
  last,
}: Readonly<InputProps>) {
  return (
    <div className={`${!last ? "mb-4" : ""}`}>
      <label
        htmlFor={name}
        className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
      >
        {label}
      </label>
      <textarea
        className="h-24 w-full rounded-xl border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
        style={{ WebkitTextFillColor: "#fff" }}
        name={name}
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
      />
    </div>
  );
}

export function DateInput({
  name,
  label,
  defaultValue,
  required,
  last,
}: Readonly<{
  name: string;
  label: string;
  defaultValue?: string;
  required?: boolean;
  last?: boolean;
}>) {
  return (
    <div className={`${!last ? "mb-4" : ""}`}>
      <label
        htmlFor={name}
        className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
      >
        {label}
      </label>
      <input
        className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
        style={{ WebkitTextFillColor: "#fff" }}
        type="date"
        name={name}
        id={name}
        defaultValue={defaultValue}
        required={required}
      />
    </div>
  );
}
