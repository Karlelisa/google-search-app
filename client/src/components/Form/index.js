import React from "react";
import style from "./style.css";



function Form(props) {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="search"><h2>Search for and save Books of Interest</h2></label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search a Book"
            id="search"
          />

          <button onClick={props.handleFormSubmit} className="btn btn-dark mt-3 mb-5" className="search-btn">
            Search
        </button>
        </div>
      </form>
    </div>
  );
}

export default Form;














// import React from "react";

// // This file exports the Input, TextArea, and FormBtn components

// export function Input(props) {
//   return (
//     <div className="form-group">
//       <input className="form-control" {...props} />
//     </div>
//   );
// }

// export function TextArea(props) {
//   return (
//     <div className="form-group">
//       <textarea className="form-control" rows="20" {...props} />
//     </div>
//   );
// }

// export function FormBtn(props) {
//   return (
//     <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
//       {props.children}
//     </button>
//   );
// }
