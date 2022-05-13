import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { persons } from "./redux/actions/persons";

const Person = () => {
  const dispatch = useDispatch();
  console.log(dispatch);
  const item = useSelector((state) => {
    return state.persons;
  });

  console.log(item, "heeeeeeeeey iteeem");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((res) => dispatch(persons(res.data)));
  }, []);

  return (
    <article>
      {item.map((x) => 
        <div>
          <h1>{x&&x.name}</h1>
          <p>{x&&x.email}</p>
        </div>
      )}
    </article>
  );
};

export default Person;
