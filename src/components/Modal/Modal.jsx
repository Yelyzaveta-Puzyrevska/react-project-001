import React from "react";

const Modal = (props) => {
  return (
    <div>
      <h2>Simple Module</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        vitae consequuntur aperiam amet aut modi deleniti facilis temporibus
        ducimus repudiandae cum, laboriosam optio, assumenda maiores similique
        labore error! Animi, sapiente.
      </p>
      {props.children}
    </div>
  );
};

export default Modal;
