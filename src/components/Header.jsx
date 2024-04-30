import {Filters} from './Filters.jsx';
/* import * as AllImages from '../media/realMedia/indexMedia'; */
import logo from '../media/2.jpg'
import logo1 from '../media/1.jpg'
import logo4 from '../media/4.jpg'
import logo3 from '../media/3.jpg'

export function Header () {
    return (
        <header style ={{display : "flex" , flexDirection :"column" , justifyContent : "center" , alignItems : "center"}}>
            <h1>
               <img src={logo} style = {{width : "200px"}} alt="dasdada" />
              {/*  <img src={logo1} style = {{width : "200px"}} alt="dasdada" />
               <img src={logo4} style = {{width : "200px"}} alt="dasdada" />
               <img src={logo3} style = {{width : "200px"}} alt="dasdada" /> */}
        
            </h1>
             {/*  // <img src={AllImages.veganSpan} style = {{width : "100px", }} alt="dasdsa" /> */}
            <h1>
             {/*   <img src={AllImages.logoSpan} style = {{width : "200px", justifyContent : "center" , alignItems : "center"}} alt="dsadasd" /> */}
            </h1>
            {/* <Filters/> */}
        </header>
    )
};