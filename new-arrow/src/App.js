import React, {Component } from 'react';
import './App.css';
import { ArcherContainer, ArcherElement } from 'react-archer';
import {RIPES} from './data/Ripe'

const boxStyle = { padding: '10px', border: '1px solid black', borderRadius:50, width:'200px', backgroundColor:'#C0C0C0' };
const rootStyle = { display: 'flex', justifyContent: 'center', marginTop:10};
const rowStyle = { marginTop:50, display: 'flex', justifyContent: 'space-between' }


const Fetch = ({pings,pings2}) =>{
//   return(
//           <ArcherContainer>
//             {pings.map((ping)=>
//             <div style={rootStyle}>
//               <ArcherElement id={ping.from} relations={[{
//                 targetId:'1',
//                 targetAnchor:'top',
//                 sourceAnchor:'bottom',
//               }]}>
//                 <div style={boxStyle}>Ip:{ping.from}</div>
//               </ArcherElement>
//               <div>
//                 {ping.result.map((hop) =>{
//                   console.log(hop)
//                   const Id = hop.hop.toString()
//                   return(
//                     <div style={rowStyle}>
//                     <ArcherElement id={Id} relations={[{
//                       targetId:{Id},
//                       targetAnchor:'top',
//                       sourceAnchor:'bottom',

//                     }]}>
//                       <div style={boxStyle}>Hop{hop.hop}{hop.result.map((ip)=>
//                         <p>{ip.from}</p>
//                       )}</div>
//                     </ArcherElement>
//                   </div>
//                   )})}
//               </div>
//             </div>

//             )}
// </ArcherContainer>

//   )

//root side by side//
return(
  <ArcherContainer>
    <div style={rootStyle}>
      <ArcherElement>
        <div>yanis</div>
      </ArcherElement>
      <ArcherElement>
        <div>yanis</div>
      </ArcherElement>
    </div>
  </ArcherContainer>
)
}

// {/* <ArcherElement id={hop.hop} relations={[{
//             targetId:`${hop.hop}`,
//             targetAnchor:'bottom',
//             sourceAnchor:'bottom',
//             label:<div style={{marginLeft:'-50px'}}></div>

//           }]}>
//             <div style={boxStyle}>Elements{ping.ip}</div>
//         </ArcherElement> */}

export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      pings:RIPES,
      pings2:RIPES,

    }
  }



// DATA FROM RIPE API//
  // componentDidMount(){
  //   fetch('http://localhost:8080')
  //   .then(response => response.json())
  //   .then(ping => this.setState({ping}))

  // }

  render(){  
    console.log(this.state.pings)
    return(
      <div className="App">
      <Fetch pings={this.state.pings} pings2={this.state.pings2}></Fetch>
    </div>
    )
  }

}
