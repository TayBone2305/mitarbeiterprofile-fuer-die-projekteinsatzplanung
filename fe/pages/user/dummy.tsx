import Head from 'next/head'
import Image from 'next/image';
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from '../../components/sharedstyles'
import Cards from '../../components/cards'
import Profil from '../../assets/person1.svg'
import Phone from '../../assets/phone-alt.svg'
import Edit from '../../assets/edit.svg'
import Mail from '../../assets/envelopes.svg'

export default function Home() {

    function switchFocusLabel(index : number){
        
    }

    var focusLabel = 0

    const categories = ["Hard Skills", "Soft Skills", "Projects"]
  return (
    <Container>
      
      <Main style={{width : "100%", height : "100%"}}>
            <div>
            <div style={{display : "flex"}}>
                <div>
                <Image style={{borderRadius : "50%"}} src={Profil} alt="User Image" width={200} height={200} />
                <div style={{textAlign : "center", color : "#615F5F", fontSize : "13px"}}>
                ~ member since 3 years ~
                </div>
                </div>
                <div style={{paddingLeft : "40px", fontSize : "20px"}}>
                    <div>
                        Max Mustermann
                    </div>
                    <div style={{paddingTop : "30px"}}>
                        Software Dev
                    </div>
                    <div style={{paddingTop : "30px"}}>
                        ab 18.11.2022 Verfügbar
                    </div>
                    <div style={{paddingTop : "30px", display : "flex"}}>
                        <div>
                         <Image  src={Mail} alt="User Image" width={25} height={25} />
                        </div>
                        <div style={{paddingLeft : "12px"}}>
                         <Image src={Phone} alt="User Image" width={25} height={25} />
                        </div>
                        <div style={{paddingLeft : "12px", display : "flex"}}>
                         <Image src={Edit} alt="User Image" width={25} height={25} />
                         <div style={{paddingLeft : "5px", color : "#848484"}}>
                            Edit
                         </div>
                        </div>
                    </div>
                </div>
                
               
               
            </div>
            <div style={{display : "flex", paddingTop : "20px"}}>
            {categories.map((Element, index) => (
                <button onClick={() => console.log(index)} style={{padding : "0px", border : "none", background : "none"}} >
                    <div style={{paddingRight : "50px", display : "grid", textAlign : "center"}}>  
                                {Element}  
                                <svg width="100" height="10">
                                <rect width="100" height="10" rx="6" style={{fill : "#841439", borderRadius : "25px"}} />
                                </svg>
                            </div>  
                </button>
          
        ))}  
            </div>
            
            <div>
                
                <div>
                
                </div>
                <div>
               
                </div>
                <div>
                
                </div>
                </div>  
            </div>
            
       
      </Main>
    </Container>
  )
}
