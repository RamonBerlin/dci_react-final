import React from "react";
import style from "../Pages/CharSheet/CharSheet.module.css";

const LocalStorageClear = () => {
  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <button className={style.button} onClick={clearLocalStorage}>
      Local Storage löschen
    </button>
  );
};

export default LocalStorageClear;
