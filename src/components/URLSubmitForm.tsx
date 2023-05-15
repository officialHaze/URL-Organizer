import { FormEvent, ChangeEvent } from "react";
import InputField from "../components/InputField";

interface Props {
  submit: (e: FormEvent) => Promise<void>;
  inputs: number[];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  addNewInputField: (e: FormEvent) => void;
  urls: { value: string }[];
}

export default function URLSubmitForm({
  submit,
  inputs,
  handleChange,
  addNewInputField,
  urls,
}: Props) {
  return (
    <form className="url-submit-form" onSubmit={submit}>
      <div>
        {inputs.map((count) => {
          return (
            <InputField
              key={count}
              count={count}
              handleChange={handleChange}
              newInputField={addNewInputField}
              urls={urls}
            />
          );
        })}
      </div>
      <div className="form-submit-btn-wrapper">
        <button type="submit">Continue</button>
      </div>
    </form>
  );
}
