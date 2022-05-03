import React from 'react'

const Features = ({ title, image, content }) => {
  return (
    <div className="row">
      <div className="col-md-3">
        <img src={image} alt="" width="50px" />
      </div>
      <div className="col-md-7">
        <h5>{title} </h5>
        <p>{content}</p>
      </div>
    </div>
  )
}


// const FeatureCard = (props) => {
//   return (
//     <div className="row">
//       <div className="col-md-3">
//         <img src={props.image} alt="" width="50px" />
//       </div>
//       <div className="col-md-7">
//         <h5>{props.title} </h5>
//         <p>{props.content}</p>
//       </div>
//     </div>
//   );
// };


export default Features