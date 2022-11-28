import React from "react";
import styles from "../styles/SearchBar.module.css"
import {BiSearch} from 'react-icons/bi'
import { useDispatch } from "react-redux";
import {searchByName} from '../redux/actions/action'
export const SearchBar = () => {
  const dispatch = useDispatch();
  const handleChange = (e)=>{
    console.log(e.target.value)
    dispatch(searchByName(e.target.value.toLowerCase()))
  }
  return (
    <div className={styles.group}>
      <input className={styles.input} onChange={handleChange} type={"text"} placeholder="Buscar Pais" />
     <BiSearch className={styles.icon}></BiSearch>
    </div>
  );
};
