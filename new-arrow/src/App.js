import React, {Component } from 'react';
import './App.css';
import { ArcherContainer, ArcherElement } from 'react-archer';
import {RIPES} from './data/Ripe'

const boxStyle = { padding: '10px', borderRadius:50, width:'130px', backgroundColor:'#323232',color:'white' };
const hopStyle ={width:'50px', height:'50px',borderRadius:25,backgroundColor:'#d6afd6', display:'flex',justifyContent:'center',flexDirection:'column'}
const rootStyle = { display: 'flex', justifyContent: 'center', marginTop:10};
const rowStyle = { marginTop:50, display: 'flex', justifyContent: 'space-between', color:'#871f78' }
const space={marginTop:50}
const iconStyle={width:'70px'}




const Fetch = ({pings}) =>{
  return (
    <ArcherContainer>
      <div style={rootStyle}>
        {pings.map((ping)=>(
          <ArcherElement key={ping.from} id={ping.from} relations={[{ 
            targetId:ping.result[0].result[0].from,
            targetAnchor:'top',
            sourceAnchor:'bottom',

          }]}>
            <div style={boxStyle}>{ping.from}</div>
          </ArcherElement>
        ))}
      </div>
      <div style={rowStyle}>
        {pings.map((ping)=>
        <div>{ping.result.map((hop)=>{
          return(
            <ArcherElement key={hop.hop} style={space} id={hop.result[0].from} relations={[{
              targetId:`${hop.result[0].from}`,
              targetAnchor:'bottom',
              sourceAnchor:'top',

            }]}>
            <div style={hopStyle}>Hop:{hop.hop}</div>
          </ArcherElement>
          )
        })}</div>
        )}
        </div>
        <div style={rootStyle}>
          <ArcherElement id="destionation">
            <div>
              <img style={iconStyle} src="../assets/google.png" alt="google"/>
              <h2>Destination</h2>
            </div>
          </ArcherElement>
        </div>
    </ArcherContainer>
  )

//root side by side//
// return(
//   <ArcherContainer>
//     <div style={rootStyle}>
//       <ArcherElement>
//         <div>yanis</div>
//       </ArcherElement>
//       <ArcherElement>
//         <div>yanis</div>
//       </ArcherElement>
//     </div>
//   </ArcherContainer>
// )
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

    }
  }

  render(){  
    console.log(this.state.pings)
    return(
      <div className="App">
      <Fetch pings={this.state.pings}></Fetch>
    </div>
    )
  }
}




// DATA FROM RIPE API//
  // componentDidMount(){
  //   fetch('http://localhost:8080')
  //   .then(response => response.json())
  //   .then(ping => this.setState({ping}))

  // }


