import React, { useState } from "react";
import LocalStorageClear from "../../Components/ClearLocalStorage";
import DicerW6 from "../../Components/DicerW6";
import DicerW20 from "../../Components/DicerW20";
import ToggleVisibility from "../../Components/ToggleVisibility";
import style from "./CharSheet.module.css";

const CharSheet = () => {
  const [userData, setUserData] = useState({});
  const [visible, setVisible] = useState(false);

  const name = localStorage.getItem("name");
  const familie = localStorage.getItem("familie");
  const spezies = localStorage.getItem("spezies");
  const geburtsort = localStorage.getItem("geburtsort");
  const kultur = localStorage.getItem("kultur");
  const geburtsdatum = localStorage.getItem("geburtsdatum");
  const profession = localStorage.getItem("profession");
  const alter = localStorage.getItem("alter");
  const geschlecht = localStorage.getItem("geschlecht");
  const sozialstatus = localStorage.getItem("sozialstatus");
  const groesse = localStorage.getItem("groesse");
  const gewicht = localStorage.getItem("gewicht");
  const titel = localStorage.getItem("titel");
  const haarfarbe = localStorage.getItem("haarfarbe");
  const augenfarbe = localStorage.getItem("augenfarbe");
  const vorteile = localStorage.getItem("vorteile");
  const nachteile = localStorage.getItem("nachteile");
  const notizen = localStorage.getItem("notizen");

  const handleChange = (field) => (e) => {
    setUserData({ ...userData, [field]: e.target.value });
  };
  const handleSave = (e) => {
    e.preventDefault();
    for (const field in userData) {
      localStorage.setItem(field, userData[field]);
    }
  };

  return (
    <div>
      <h3 className={style.hs1}>Characterbogen Seite 1</h3>
      <div className={style.container}>
        <form className={style.form} onSubmit={handleSave}>
          <div className={style.formbody}>
            <div className={style.form_container}>
              <div className={style.name}>
                {/* //ANCHOR - handler begin */}
                <label className={`${style.label} `} htmlFor="name">
                  Character Name:
                </label>
                <br />
                <input
                  className={style.inputfield}
                  id="name"
                  type="text"
                  value={userData.name}
                  placeholder={name}
                  onChange={handleChange(`name`)}
                />
              </div>
              <br />
              <div className={style.familie}>
                <label className={`${style.label} `} htmlFor="familie">
                  Familie:
                </label>
                <br />
                <input
                  className={style.inputfield}
                  id="familie"
                  type="text"
                  value={userData.familie}
                  placeholder={familie}
                  onChange={handleChange(`familie`)}
                />
              </div>

              <br />
              <div className={style.spezies}>
                <label className={style.label} htmlFor="spezies">
                  Spezies:
                </label>
                <br />
                <input
                  className={style.inputfield}
                  id="spezies"
                  type="text"
                  value={userData.spezies}
                  placeholder={spezies}
                  onChange={handleChange(`spezies`)}
                />
              </div>

              <br />
              <div className={style.geburtsort}>
                <label className={style.label} htmlFor="geburtsort">
                  Geburtsort:
                </label>
                <br />
                <input
                  className={style.inputfield}
                  id="geburtsort"
                  type="text"
                  value={userData.geburtsort}
                  placeholder={geburtsort}
                  onChange={handleChange(`geburtsort`)}
                />
              </div>
              <br />
              <div className={style.kultur}>
                <label className={style.label} htmlFor="kultur">
                  Kultur:
                </label>
                <br />
                <input
                  className={style.inputfield}
                  id="kultur"
                  type="text"
                  value={userData.kultur}
                  placeholder={kultur}
                  onChange={handleChange(`kultur`)}
                />
              </div>
              <br />
              <div className={style.geburtsdatum}>
                <label className={style.label} htmlFor="geburtsdatum">
                  Geburtsdatum:
                </label>
                <br />
                <input
                  className={style.inputfield}
                  id="geburtsdatum"
                  type="text"
                  value={userData.geburtsdatum}
                  placeholder={geburtsdatum}
                  onChange={handleChange(`geburtsdatum`)}
                />
              </div>
              <div className={style.profession}>
                <label className={style.label} htmlFor="profession">
                  Profession:
                </label>
                <br />
                <input
                  className={style.inputfield}
                  id="profession"
                  type="text"
                  value={userData.profession}
                  placeholder={profession}
                  onChange={handleChange(`profession`)}
                />
              </div>
              <div className={style.alter}>
                <label className={style.label} htmlFor="alter">
                  Alter:
                </label>
                <br />

                <input
                  className={style.inputfield}
                  id="alter"
                  type="text"
                  value={userData.alter}
                  placeholder={alter}
                  onChange={handleChange(`alter`)}
                />
              </div>
              <br />
              <div className={style.geschlecht}>
                <label className={style.label} htmlFor="geschlecht">
                  Geschlecht:
                </label>
                <br />
                <input
                  className={style.inputfield}
                  id="geschlecht"
                  type="text"
                  value={userData.geschlecht}
                  placeholder={geschlecht}
                  onChange={handleChange(`geschlecht`)}
                />
              </div>
              <br />
              <div className={style.sozialstatus}>
                <label className={style.label} htmlFor="sozialstatus">
                  Sozialstatus:
                </label>
                <br />
                <input
                  className={style.inputfield}
                  id="sozialstatus"
                  type="text"
                  value={userData.sozialstatus}
                  placeholder={sozialstatus}
                  onChange={handleChange(`sozialstatus`)}
                />
              </div>
              <br />
              <div className={style.groesse}>
                <label className={style.label} htmlFor="groesse">
                  Größe:
                </label>
                <br />
                <input
                  className={style.inputfield}
                  id="groesse"
                  type="text"
                  value={userData.groesse}
                  placeholder={groesse}
                  onChange={handleChange(`groesse`)}
                />
              </div>
              <br />
              <div className={style.gewicht}>
                <label className={style.label} htmlFor="gewicht">
                  Gewicht:
                </label>
                <br />
                <input
                  className={style.inputfield}
                  id="gewicht"
                  type="text"
                  value={userData.gewicht}
                  placeholder={gewicht}
                  onChange={handleChange(`gewicht`)}
                />
              </div>
              <br />
              <div className={style.titel}>
                <label className={style.label} htmlFor="titel">
                  Titel:
                </label>
                <br />
                <input
                  className={style.inputfield}
                  id="titel"
                  type="text"
                  value={userData.titel}
                  placeholder={titel}
                  onChange={handleChange(`titel`)}
                />
              </div>
              <br />
              <div className={style.haarfarbe}>
                <label className={style.label} htmlFor="haarfarbe">
                  Haarfarbe:
                </label>
                <br />
                <input
                  className={style.inputfield}
                  id="haarfarbe"
                  type="text"
                  value={userData.haarfarbe}
                  placeholder={haarfarbe}
                  onChange={handleChange(`haarfarbe`)}
                />
              </div>
              <br />
              <div className={style.augenfarbe}>
                <label className={style.label} htmlFor="augenfarbe">
                  Augenfarbe:
                </label>
                <br />
                <input
                  className={style.inputfield}
                  id="augenfarbe"
                  type="text"
                  value={userData.augenfarbe}
                  placeholder={augenfarbe}
                  onChange={handleChange(`augenfarbe`)}
                />
              </div>
            </div>
            <br />
            {/* //ANCHOR - txtArea */}
            <div className={style.txt_area}>
              <div className={style.vorteile}>
                <label className={style.label} htmlFor="vorteile">
                  Vorteile:
                </label>
                <br />
                <textarea
                  className={style.inputarea}
                  id="vorteile"
                  type="text"
                  value={userData.vorteile}
                  placeholder={vorteile}
                  onChange={handleChange(`vorteile`)}
                />
              </div>
              <br />
              <div className={style.nachteile}>
                <label className={style.label} htmlFor="nachteile">
                  Nachteile:
                </label>
                <br />
                <textarea
                  className={style.inputarea}
                  id="nachteile"
                  type="text"
                  value={userData.nachteile}
                  placeholder={nachteile}
                  onChange={handleChange(`nachteile`)}
                />
              </div>
              <br />
              <div className={style.notizen}>
                <label className={style.label} htmlFor="notizen">
                  Notizen:
                </label>
                <br />
                <textarea
                  className={style.inputarea}
                  id="notizen"
                  type="text"
                  value={userData.notizen}
                  placeholder={notizen}
                  onChange={handleChange(`notizen`)}
                />
              </div>
            </div>
            <br />
          </div>
          <div className={style.btn_bar}>
            <p>Lokal im Browser abspeichern</p>
            <button className={`${style.save} ${style.button}`} type="submit">
              Speichern
            </button>
            <LocalStorageClear />
            <p></p>
            <button
              className={style.button}
              onClick={() => {
                setVisible(!visible);
              }}
            >
              Druckansicht
            </button>
            <button
              className={style.button}
              onClick={() => {
                if (!visible) {
                  setVisible(!visible);
                  setTimeout(() => {
                    window.print();
                  }, 5);
                }
                if (visible) {
                  window.print();
                }
              }}
            >
              Drucken
            </button>
          </div>
        </form>
        <div className={style.cubeContainer}>
          <DicerW6 />
          <DicerW20 />
        </div>
        {/* //ANCHOR - handler end */}
        {/* //ANCHOR - CharSheet begin */}

        <div className={style.sheetcontainer}>
          <ToggleVisibility visible={visible}>
            {/* <br className={style.br} /> */}
            <div className={style.charsheet}>
              <div className={style.sheetcontainer1}>
                <div className={`${style.sheetname} ${style.sheetdiv}`}>
                  Name: <div className={style.sheetvalue}> {name}</div>
                </div>
                <div className={`${style.sheetfamilie} ${style.sheetdiv}`}>
                  Familie:<div className={style.sheetvalue}> {familie}</div>
                </div>
                <div className={`${style.sheetspezies} ${style.sheetdiv}`}>
                  Spezies:<div className={style.sheetvalue}>{spezies}</div>
                </div>
                <div className={`${style.sheetgeburtsort} ${style.sheetdiv}`}>
                  Geburtsort:
                  <div className={style.sheetvalue}>{geburtsort}</div>
                </div>
                <div className={`${style.sheetkultur} ${style.sheetdiv}`}>
                  Kultur: <div className={style.sheetvalue}>{kultur}</div>
                </div>
                <div className={`${style.sheetgeburtsdatum} ${style.sheetdiv}`}>
                  Geburtsdatum:
                  <div className={style.sheetvalue}>{geburtsdatum}</div>
                </div>
                <div className={`${style.sheetprofession} ${style.sheetdiv}`}>
                  Profession:
                  <div className={style.sheetvalue}> {profession}</div>
                </div>
              </div>
              {/*
               */}
              <div className={style.sheetcontainer2}>
                <div className={`${style.sheetalter} ${style.sheetdiv}`}>
                  Alter:<div className={style.sheetvalue}> {alter}</div>
                </div>
                <div className={`${style.sheetgeschlecht} ${style.sheetdiv}`}>
                  Geschlecht:
                  <div className={style.sheetvalue}> {geschlecht}</div>
                </div>
                <div className={`${style.sheetsozialstatus} ${style.sheetdiv}`}>
                  Sozialstatus:{" "}
                  <div className={style.sheetvalue}>{sozialstatus}</div>
                </div>
                <div className={`${style.sheetgroesse} ${style.sheetdiv}`}>
                  Größe:<div className={style.sheetvalue}> {groesse}</div>
                </div>
                <div className={`${style.sheetgewicht} ${style.sheetdiv}`}>
                  Gewicht: <div className={style.sheetvalue}>{gewicht}</div>
                </div>
                <div className={`${style.sheettitel} ${style.sheetdiv}`}>
                  Titel: <div className={style.sheetvalue}>{titel}</div>
                </div>
                <div className={`${style.sheetdiv} ${style.sheethaarfarbe}`}>
                  Haarfarbe: <div className={style.sheetvalue}>{haarfarbe}</div>
                </div>
                <div className={`${style.sheetaugenfarbe} ${style.sheetdiv}`}>
                  Augenfarbe:
                  <div className={style.sheetvalue}> {augenfarbe}</div>
                </div>
              </div>
              {/*  */}
              <div className={style.sheetcontainer3}>
                <div
                  className={`${style.sheettxtarea} ${style.sheetvorteile} `}
                >
                  Vorteile:
                  <div className={style.sheetvalue}>
                    <br /> {vorteile}
                  </div>
                </div>
                <div
                  className={`${style.sheettxtarea} ${style.sheetnachteile} `}
                >
                  Nachteile:
                  <div className={style.sheetvalue}>
                    <br /> {nachteile}
                  </div>
                </div>
                <div className={`${style.sheettxtarea} ${style.sheetnotizen} `}>
                  Notizen:
                  <div className={style.sheetvalue}>
                    <br /> {notizen}
                  </div>
                </div>
              </div>
            </div>
          </ToggleVisibility>
        </div>
        {/* //ANCHOR - CharSheet end */}
      </div>
    </div>
  );
};

export default CharSheet;
