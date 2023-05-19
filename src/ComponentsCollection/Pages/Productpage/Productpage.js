// import React, { Component } from "react";
// class Productpage extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       products: [],
//       productID: props.match.params.a,
//     };
//   }

//   componentDidMount() {
//     fetch("http://localhost:1234/iphones")
//       .then((res) => res.json())
//       .then((products) => {
//         const productList = products.phones;
//         const singleProduct = productList.filter(
//           (x) => x.product_url == this.state.productID
//         );
//         this.setState((state) => {
//           return {
//             products: singleProduct,
//           };
//         });
//       });
//   }

//   render() {
//     // console.log(this.state.productID);
//     return (
//       <div>
//         <section className="internal-page-wrapper top-100">
//           <div className="container">
//             {this.state.products.map((product) => {
//               let id = product.product_url;
//               let title = product.product_name;
//               let img = product.product_img;
//               let Brief = product.product_brief_description;
//               let StartPrice = product.starting_price;
//               let PriceRange = product.price_range;
//               let productPage = "/iphone/" + id;
//               let details = product.product_description;

//               let productDiv = (
//                 <div key={id} className="bottom-100">
//                   <div className="row justify-content-center text-center bottom-50">
//                     <div className="col-12">
//                       <div className="title-wraper bold">{title}</div>
//                       <div className="brief-description">{Brief}</div>
//                     </div>
//                   </div>

//                   <div className="row justify-content-center text-center product-holder h-100">
//                     <div className={`col-sm-12 col-md-6 my-auto`}>
//                       <div className="starting-price">
//                         {`Starting at ${StartPrice}`}
//                       </div>
//                       <div className="monthly-price">{PriceRange}</div>
//                       <div className="product-details">{details}</div>
//                     </div>

//                     <div className={`col-sm-12 col-md-6`}>
//                       <div className="prodict-image">
//                         <img src={img} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//               return productDiv;
//             })}
//           </div>
//         </section>
//       </div>
//     );
//   }
// }
// export default Productpage;

import React,{useState,useEffect} from 'react'
import {useParams} from "react-router-dom"
import Four04 from '../Four04/Four04';
function Productpage() {
  const [allPhones, setallPhones] = useState([]);
  const { pid } = useParams();

  useEffect(() => {
    // fetch("http://localhost:1234/iphones")
   fetch("/phones.json")
     .then((res) => res.json())
     .then((products) => {
       const productList = products.phones;
       const singleProduct = productList.filter((x) => x.product_url == pid);
       setallPhones(singleProduct);
     });
  }, [pid]);
  // { console.log(allPhones); }
  if (allPhones.length) {
    return (
      <div>
        <section className="internal-page-wrapper top-100">
          <div className="container">
            {allPhones.map((product) => {
              let id = product.product_url;
              let title = product.product_name;
              let img = product.product_img;
              let Brief = product.product_brief_description;
              let StartPrice = product.starting_price;
              let PriceRange = product.price_range;
              // let productPage = "/iphone/" + id;
              let details = product.product_description;

              let productDiv = (
                <div key={id} className="bottom-100">
                  <div className="row justify-content-center text-center bottom-50">
                    <div className="col-12 mt-5">
                      <div className="title-wraper bold">{title}</div>
                      <div className="brief-description">{Brief}</div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                      <div className="starting-price">
                        {`Starting at ${StartPrice}`}
                      </div>
                      <div className="monthly-price">{PriceRange}</div>
                      <div className="product-details">{details}</div>
                    </div>

                    <div className={`col-sm-12 col-md-6`}>
                      <div className="prodict-image">
                        <img src={img} />
                      </div>
                    </div>
                  </div>
                </div>
              );
              return productDiv;
            })}
          </div>
        </section>
      </div>
    )
  }
  else {
    return <Four04/>
  }
}

export default Productpage