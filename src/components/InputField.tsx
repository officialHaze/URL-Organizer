import { ChangeEvent, FormEvent } from "react";
import "../component-styles/InputField.css";
import { FcAddRow } from "react-icons/fc";

interface Props {
  count: number;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  newInputField: (e: FormEvent) => void;
  urls: { value: string }[];
}

export default function InputField(props: Props) {
  return (
    <div className="input-wrapper">
      <p>Link</p>
      <input
        type="text"
        id={props.count.toString()}
        onChange={props.handleChange}
        value={props.urls[props.count].value}
        required
      />
      <button onClick={props.newInputField}>
        <h1>
          <FcAddRow />
        </h1>
      </button>
    </div>
  );
}
