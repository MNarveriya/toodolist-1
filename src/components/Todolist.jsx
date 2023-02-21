import React, { useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { MdRemoveCircle } from "react-icons/md";
import todolist from "../components/Todolist.module.css";

const Todolist = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const [user, setUser] = useState([]);

  const handle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const toggle = (event) => {
    event.preventDefault();
    setUser([...user, data]);
  };

  const removeitem = (index) => {
      let newarr = user;
      newarr.splice(index , 1)
      setUser([...newarr])
  } 

  return (
    <div className={todolist.container}>
      <div className={todolist.smallcontainer}>
        <div className={todolist.userdetails}>
          <input
            type="text"
            name="name"
            onChange={handle}
            value={data.name}
            placeholder="name"
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="email"
            onChange={handle}
            value={data.email}
            placeholder="email"
            autoComplete="off"
            required
            
          />
          {/* <button className={todolist.btn} role="button" onClick={toggle}>
          </button> */}
            <AiFillPlusSquare className={todolist.icon} onClick={toggle} />
        </div>

        <div className={todolist.datacontainer}>
          <div className={todolist.header}>
            <h4>name</h4>
            <h4>email</h4>
            <h4>remove</h4>
          </div>
          <div className={todolist.details}></div>
          {user.map((e, index) => {
            return (
              
                <div key={index} className={todolist.userdata} >
                  <h4>{e.name}</h4>
                  <h4>{e.email}</h4>
                  <h4><MdRemoveCircle className={todolist.removeicon} onClick={() => removeitem(index)}/></h4>
                </div>
            
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todolist;
