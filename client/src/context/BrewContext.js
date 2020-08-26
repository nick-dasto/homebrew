import React, { useState, createContext } from "react";
import { MESSAGE, formData  } from "./AppReducer";
import axios from 'axios'

export const BrewContext = createContext();

export const BrewProvider = (props) => {
  const [brew, setBrew] = useState([]);
  const [update, setUpdate] = useState(0)
  const [create, setCreate] = useState(false);
  const [step, setStep] = useState(formData);
  const [edit, setEdit] = useState(false);
  const [selectedBrew, setSelectedBrew] = useState(null);
  const [open, setOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState(undefined)
  const [userData, setUserData] = useState({token: undefined, user: undefined})

  const config = {
    headers: {
        "x-auth-token": userData.token || localStorage.getItem('x-auth-token')
    }
 }
  const configData = {
      headers: {
          'Content-Type':'application/json',
          "x-auth-token": userData.token || localStorage.getItem('x-auth-token')
      }
  }
  const checkLoggedIn = async () => {
    try{
      let token = localStorage.getItem('x-auth-token')
      setUserData({...userData, token})
      if(token === null){
        localStorage.setItem('x-auth-token', "")
        token = ""
      }
      const tokenRes = await axios.post('/api/v1/users/tokenValid', null, {headers: {'x-auth-token':token}})
      if(tokenRes.data){
        const userRes = await axios.get('/api/v1/users/', {headers: {'x-auth-token':token}})
        setUserData({...userData, token, user:userRes.data})
        getBrews();
      }
    }catch(err){
      console.log(err)
    }
  }
  const getBrews = async () => {
    try {
      const res = await axios.get("/api/v1/brews", config);
      setBrew(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  const addBrews = async (newBrew) => {
    try {
      await axios.post("/api/v1/brews", newBrew, configData);
      setUpdate(update+1)
      setSnackMessage(MESSAGE.ADD_BREW)
    } catch (err) {
      console.log(err);
    }
  }
  const deleteBrews = async (id) => {
    try {
      await axios.delete(`/api/v1/brews/${id}`, config);
      setUpdate(update+1)
      setSnackMessage(MESSAGE.DELETE_BREW)
    } catch (err) {
      console.log(err);
    }
  }
  const editBrews = async (id, newBrew) => {
    try {
      await axios.patch(`/api/v1/brews/${id}`, newBrew, configData);
      setUpdate(update+1)
      setSnackMessage(MESSAGE.EDIT_BREW)
    } catch (err) {
      console.log("edit brews error", err);
    }
  }
  return (
    <BrewContext.Provider
      value={{
        brew, setBrew, create, setCreate, step, setStep,
        edit, setEdit, selectedBrew, setSelectedBrew,
        open, setOpen, snackMessage, setSnackMessage,
        userData, setUserData, config, configData, getBrews,
        deleteBrews, addBrews, editBrews, checkLoggedIn,
        update, setUpdate
      }}
    >
      {props.children}
    </BrewContext.Provider>
  );
};
