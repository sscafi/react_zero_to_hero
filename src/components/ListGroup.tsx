// import { Fragment } from "react";
// if you use an empty tag <> you are telling react to use fragments . shortcut
function ListGroup() {
  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
    "Toronto",
  ];
  items = [];

  // if (items.length === 0) {
  // return (
  //    <>
  //      <h1>List</h1>
  //      <p> No Items Found</p>
  //    </>
  // );
  // }

  return (
    <>
      <h1> List </h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
