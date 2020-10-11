import React from "react";
import styles from "./Filter.module.scss";
import "./FilterAnimation.css";

const Filter = ({onChangeFilter}: {onChangeFilter: any}) => (
  <div className={styles.findBlock}>
    <label className={styles.findLabel}>Find contacts by name</label>
    <input className={styles.findInput} type="text" name="filter" onChange={onChangeFilter}/>
  </div>
);

export default Filter;