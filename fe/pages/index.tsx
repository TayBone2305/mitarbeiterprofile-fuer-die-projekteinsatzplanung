import Home1 from '../assets/home1.png'
import Home2 from '../assets/home2.png'
import Image from 'next/image';

const Home = () => {
	return (
		<div style={{paddingLeft : "15px"}}>
			
			<div style={{margin: "0 auto", display : "table"}}>	
			<div style={{paddingTop : "20px", paddingBottom : "20px"}}>
				Im Fokus
			</div >
				
				<Image src={Home1} alt="User Image" style={{
				maxWidth : "100%"
			}}  />
				
			</div>
			<div style={{margin: "0 auto", display : "table", paddingTop : "60px"}}>
				<Image src={Home2} alt="User Image" style={{width : "80%", height : "auto"}}  />

			</div>
		</div>
	);
};

export default Home;
