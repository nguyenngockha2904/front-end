import React, { Component } from "react";
import "./Ezhealth.css";
const Ezhealth = ({ ezhealth, deleteNinja }) => {
  //#region jf
  // const { ezhealth } = props;
  // const ezhealthlist = ezhealth.map((ninja) => {
  //   if (ninja.age > 30) {
  //     return (
  //       <div className="ezhealth">
  //         <p>xin chào {ninja.name}</p>
  //         <p>bạn {ninja.age}</p>
  //       </div>
  //     );
  //   } else {
  //     return null;
  //   }
  // });
  //#endregion
  const ezhealthlist = ezhealth.map((p) => {
    return (
      <div className="ezhealth" key={p.id}>
        <p>xin chào {p.name}</p>
        <p>bạn {p.age}</p>
        <button
          onClick={() => {
            deleteNinja(p.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  });
  return <div>{ezhealthlist}</div>;
};
//#region demoClass
// export class Ezhealth extends Component {
//   state = {
//     name: this.props.name,
//     age: this.props.age,
//   };
//   render() {
//     const { ezhealth } = this.props;
//     const ezhealthlist = ezhealth.map((ninja) => {
//       return (
//         <div className="ezhealth">
//           <p>xin chào {ninja.name}</p>
//           <p>bạn {ninja.age}</p>
//         </div>
//       );
//     });
//     return <div>{ezhealthlist}</div>;
//   }
// }
//#endregion

export default Ezhealth;
