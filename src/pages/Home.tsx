import "./Home.css";
import { useState, FormEvent, ChangeEvent } from "react";

let counter = 0;

export default function Home() {
  //   const [counter, setCount] = useState(0);
  const [inputs, setInputs] = useState([0]);
  const [urls, setUrls] = useState([
    {
      value: "",
    },
  ]);

  //handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    const updatedUrlList = urls.map((urlObj, i) => {
      if (i === parseInt(id)) return { value: value };
      else return { value: urlObj.value };
    });
    setUrls(updatedUrlList);
  };

  const addNewInputField = (e: FormEvent) => {
    e.preventDefault();
    counter += 1;
    setInputs((prevState) => {
      return [...prevState, counter];
    });
    setUrls((prevState) => {
      return [
        ...prevState,
        {
          value: "",
          id: "",
        },
      ];
    });
  };

  return (
    <main className="main">
      <form className="url-submit-form">
        {inputs.map((count) => {
          return (
            <div key={count}>
              <input
                type="text"
                id={count.toString()}
                onChange={handleChange}
                value={urls[count].value}
              />
              <button onClick={addNewInputField}>add</button>
            </div>
          );
        })}
      </form>
    </main>
  );
}
