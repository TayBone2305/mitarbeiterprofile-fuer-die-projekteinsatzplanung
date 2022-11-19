import { UserType } from '../data/user';
import Image from 'next/image';
import Link from 'next/link';
import Edit from '../assets/edit.svg';
import Phone from '../assets/phone-alt.svg';
import Mail from '../assets/envelopes.svg';
import { Nav } from './Header';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { userAgent } from 'next/server';

const DAY_MILLISECONDS = 1000 * 60 * 60 * 24;

function getRelativeTime(timestamp) {
	const rtf = new Intl.RelativeTimeFormat('en', {
		numeric: 'auto',
	});
	const daysDifference = Math.round(
		(timestamp - new Date().getTime()) / DAY_MILLISECONDS
	);

	return rtf.format(daysDifference, 'day');
}

const UserMetaDataDetail: React.FC<{ user: UserType }> = ({
	user: {
		firstName,
		lastName,
		profilePicture,
		jobTitle,
		id,
		email,
		phone,
		hireDate,
	},
}) => {
	const categories = [
		{ name: 'Hard Skills', slug: 'hardSkills' },
		{ name: 'Soft Skills', slug: 'softSkills' },
		{ name: 'Projects', slug: 'projects' },
	];
	const router = useRouter();
	{
		console.log(router);
	}

	return (
        <Container>
      
        <Main style={{width : "100%", height : "100%"}}>
              <div>
              <div style={{display : "flex"}}>
                  <div>
                  <Image style={{borderRadius : "50%"}} src={profilePicture} alt="User Image" width={200} height={200} />
                  <div style={{textAlign : "center", color : "#615F5F", fontSize : "13px"}}>
                  ~ member since 3 years ~
                  </div>
                  </div>
                  <div style={{paddingLeft : "40px", fontSize : "20px"}}>
                      <div>
                            {firstName}, {lastName} 
                      </div>
                      <div style={{paddingTop : "30px"}}>
                      {jobTitle}
                      </div>
                      <div style={{paddingTop : "30px"}}>
                      member since: {getRelativeTime(new Date(hireDate).getTime())}
                      </div>
                      <div style={{paddingTop : "30px", display : "flex"}}>
                          <div>
                           <Image  src={Mail} alt="User Image" width={25} height={25} />
                          </div>
                          <div style={{paddingLeft : "12px"}}>
                           <Image src={Phone} alt="User Image" width={25} height={25} />
                          </div>
                          <div style={{paddingLeft : "12px", display : "flex"}}>
                           
                           <Link href={'/user/edit'} style={{display : "flex"}}> 
                                  <Image src={Edit} alt="User Image" width={25} height={25} />
                                  <div style={{paddingLeft : "5px", color : "#848484"}}>
                                      Edit
                                  </div>
                              </Link>
                          </div>
                      </div>
                  </div>
                  
                 
                 
              </div>
              <div style={{display : "flex", paddingTop : "20px"}}>
              {categories.map((Element, index) => (
                  <Link href={index === 0 ? '/user/hardSkills' : index === 1 ? '/user/softSkills' : '/user/projects'}  style={{padding : "0px", border : "none", background : "none"}} >
                     
                          <div style={{paddingRight : "50px", display : "grid", textAlign : "center"}}>  
                          {Element.name}  
                       
                          <svg width="100" height="10">
                          <rect width="100" height="10" rx="6" style={ index === 0 ? {fill : "#841439", borderRadius : "25px"} : {fill : "#FFFFFF", borderRadius : "25px"}} />
                          </svg>
                           
                      </div>  
                     
                      
                  </Link>
            
          ))}  
              </div>
              
             
              </div>
              
         
        </Main>
      </Container>
	);
};

export default UserMetaDataDetail;


const Main= styled.div`
padding: 5rem 0;
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`
const Container= styled.div`  padding: 0 0.5rem;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
height: 100vh;
min-height: 100vh;`
