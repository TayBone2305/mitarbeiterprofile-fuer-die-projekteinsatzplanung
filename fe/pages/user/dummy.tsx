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
  return (
    <Container>
      
      <Main style={{width : "100%", height : "100%"}}>
            <div style={{display : "flex"}}>
                <div>
                <Image style={{borderRadius : "50%"}} src={Profil} alt="User Image" width={200} height={200} />
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
                         <div>
                            Edit
                         </div>
                        </div>
                    
                    </div>
                </div>
                
                    
               
            </div>
       
      </Main>
    </Container>
  )
}
