import React from 'react'
import { Link } from 'react-router-dom'
import HeaderLinks from './HeaderLinks'
import appleLogo from "../../commonResource/images/icons/logo-sm.png"
import cartLogo from "../../commonResource/images/icons/cart-sm.png"
import searchLogo from "../../commonResource/images/icons/search-icon-sm.png"
// className=Header extends Component {
// 	render() {
// 	  let nav = [
//       { path: "/mac", name: "Mac" },
//       { path: "/iphone/", name: "iphone" },
//       { path: "/ipad/", name: "ipad" },
//       { path: "/watch/", name: "watch" },
//       { path: "/tv/", name: "tv" },
//       { path: "/Music/", name: "Music" },
//       { path: "/Support/", name: "Support" },
//       { path: "/search/", name: <img src={searchLogo} /> },
//       { path: "/cart/", name: <img src={cartLogo} /> },
//     ];
// 	  return (
//       <div className="nav-wrapper fixed-top">
//         <div className="container">
//           <nav className="navbar navbar-toggleable-sm navbar-expand-md">
//             <button
//               className="navbar-toggler navbar-toggler-right"
//               type="button"
//               data-toggle="collapse"
//               data-target=".navbar-collapse"
//             >
//               ☰
//             </button>
//             <a className="navbar-brand mx-auto" href="#">
//               <img src={appleLogo} />
//             </a>

//             <div className="navbar-collapse collapse">
//               <ul className="navbar-nav nav-justified w-100 nav-fill">
//                 <HeaderLinks linkPath={nav} />
//               </ul>
//             </div>
//           </nav>
//         </div>
//       </div>
//     );
//   }
// }
// export default Header



function Header() {
  	  let nav = [
      { path: "/mac", name: "Mac" },
      { path: "/iphone/", name: "iphone" },
      { path: "/ipad/", name: "ipad" },
      { path: "/watch/", name: "watch" },
      { path: "/tv/", name: "tv" },
      { path: "/Music/", name: "Music" },
      { path: "/Support/", name: "Support" },
      { path: "/search/", name: <img src={searchLogo} /> },
      { path: "/cart/", name: <img src={cartLogo} /> },
    ];
  return (
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <Link className="navbar-brand mx-auto" to="/">
              <img src={appleLogo} />
            </Link>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <HeaderLinks linkPath={nav} />
              </ul>
            </div>
          </nav>
        </div>
      </div>
  )
}

export default Header