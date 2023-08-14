"use client";
import { useState } from "react";
import API from "../constants";
import Header from "@/components/header/header";
import styles from "./home.module.css";

import BarLoader from "react-spinners/BarLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function Home() {
  const [file, setFile] = useState();
  const [pred, setPred] = useState();
  let [loading, setLoading] = useState(false);
  const [model, setModel] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleDataChange = (e) => {
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
        <p className={styles.text}>Wait for results, please...</p>
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
      <>
        <Header></Header>
        <div className={styles.text}>
          Please, download your dataset (csv or xslx). All columns must be
          numeric values, dependent variable must bu the LAST column.
        </div>
        <div className={styles.text}>
          Than enter your data for prediction to input. Data must have the same
          format as in dataset (numeric, the same number of features) and comma separated.
        </div>
        <div className={styles.form}>
          <form>
            <input lang="eng" type="file" onChange={handleFileChange} />
            <div>{file && `${file.name} - ${file.type}`}</div>
            <input
              className={styles.input}
              type="text"
              onChange={handleDataChange}
            ></input>
          </form>
          <button
            className={styles.button}
            type="submit"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </>
    );
  }

  if (model != null) {
    if (model.detail) {
      return (
        <div className={styles.text}>{model.detail} Try again, please.</div>
      );
    }
    return (
      <div className={styles.text}>
        <p className={styles.text}>Model name: {model.model}</p>
        <p className={styles.text}>Model score: {model.score}</p>
        <p className={styles.text}>Predicted value: {model.prediction}</p>
      </div>
    );
  }
}
