"use client";
import { useState } from "react";
import API from "../../../constants";
// import Header from "@/components/header/header";
// import styles from "./home.module.css";

import BarLoader from "react-spinners/BarLoader";
import Header from "@/components/Header/Header";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function OnlineRegressor() {
  const [file, setFile] = useState();
  const [pred, setPred] = useState();
  let [loading, setLoading] = useState(false);
  const [model, setModel] = useState(null);

  const handleFileChange = (e: any) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleDataChange = (e: any) => {
    if (e.target.value) {
      setPred(e.target.value);
    }
  };

  const handleUpload = async () => {
    if (file) {
      console.log("Uploading file...");

      const formData = new FormData();
      formData.append("file", file);
      formData.append("request", pred);

      try {
        setLoading(true);
        const dataResponse = await fetch(`${API}api/regressor`, {
          method: "POST",
          body: formData,
        });
        const response = await dataResponse.json();
        console.log(response);
        setLoading(false);
        setModel(response);
      } catch (error) {
        console.error(error);
      }
    }
  };

  if (loading) {
    return (
      <div>
        <p className="text-xl">Wait for results, please...</p>
        <BarLoader
          color="#00008b"
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (model == null) {
    return (
      <div className="flex flex-col justify-evenly h-80 text-xl">
        <div>
          <div >
            Please, download your dataset (csv or xslx). All columns must be
            numeric values, dependent variable must bu the LAST column.
          </div>
          <div >
            Than enter your data for prediction to input. Data must have the same
            format as in dataset (numeric, the same number of features) and comma separated.
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <form className="form">
            <input lang="eng" type="file" onChange={handleFileChange} />
            <div>{file && `${file.name} - ${file.type}`}</div>
            <input
              className="input"
              type="text"
              onChange={handleDataChange}
            ></input>
          </form>
          <button
            className="button centered self-center"
            type="submit"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </div>
    );
  }

  if (model != null) {
    if (model.detail) {
      return (
        <div className="text-xl">{model.detail} Try again, please.</div>
      );
    }
    return (
      <div>
        <p >Model name: {model.model}</p>
        <p >Model score: {model.score}</p>
        <p >Predicted value: {model.prediction}</p>
      </div>
    );
  }
}