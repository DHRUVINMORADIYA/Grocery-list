import ReactDOM from "react-dom";
import { React, useEffect, useRef, useState, useLayoutEffect } from "react";
import List from "./list";
import { getFirestore } from "redux-firestore";
import members from "./data/members";
import fbConfig from "./config/fbconfig";
import rootReducer from "./store/reducers/rootReducer";
import { compose, createStore } from "redux";
import { reduxFirestore } from "redux-firestore";
import { Provider } from "react-redux";

const store = createStore(rootReducer, compose(reduxFirestore(fbConfig)));
function Todo() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [memberID, setMemberID] = useState(0);
  const firstUpdate = useRef(true);

  useEffect(async () => {
    const firestore = getFirestore();
    const data = await firestore
      .collection("groceries-list")
      .doc("groceries")
      .get();
    setList(data.data().items);
  }, []);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const firestore = getFirestore();
    firestore
      .collection("groceries-list")
      .doc("groceries")
      .set({
        items: list,
      })
      .then(() => {
        console.log("updated");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const handleMember = (e) => {
    setMemberID(e.target.selectedIndex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.length < 1) {
      alert("something needs to be added!");
    } else {
      setList([...list, { text: text, id: list.length, memberID: memberID }]);
      setText("");
    }
  };

  return (
    <div>
      <h1>410</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        get
        <input type="text" onChange={(e) => handleChange(e)} value={text} />
        for
        <select name="member" onChange={(e) => handleMember(e)}>
          {members.members.map((member) => (
            <option key={member.id}>{member.name}</option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>
      {List({ list, setList })}
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById("root")
);
