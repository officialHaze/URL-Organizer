import "./Home.css";
import { useState, FormEvent, ChangeEvent } from "react";
import URLSubmitForm from "../components/URLSubmitForm";
import ShURLReceivedBox from "../components/ShURLReceivedBox";
import { axiosInstance } from "../lib/axiosConfig";

let counter = 0;

export default function Home() {
  //   const [counter, setCount] = useState(0);
  const [inputs, setInputs] = useState([0]);
  const [urls, setUrls] = useState([
    {
      value: "",
    },
  ]);
  const [shortURL, setShortURL] = useState("");

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const urlList = urls.map((instance) => {
      return instance.value;
    });
    try {
      const { data } = await axiosInstance.post("/api/url/organize-url/", {
        long_urls: urlList,
      });
      if (urls.length > 1) {
        const shUrl: string = data.single_link;
        const splitStr = shUrl.split("/");
        const urlID = splitStr[splitStr.length - 2];
        setShortURL(`${process.env.REACT_APP_BASE_URL}/${urlID}`);
      } else {
        setShortURL(data.single_link);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="main">
      {!shortURL ? (
        <URLSubmitForm
          submit={handleSubmit}
          inputs={inputs}
          handleChange={handleChange}
          urls={urls}
          addNewInputField={addNewInputField}
        />
      ) : (
        <ShURLReceivedBox shortUrl={shortURL} />
      )}
    </main>
  );
}
