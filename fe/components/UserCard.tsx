import styled from 'styled-components';
import MoreButton from './MoreButton';
import Image from 'next/image';

const UserCard = ({ employee }) => 
{
	return (
		<div className="employee-card">
		  <div>
				{employee.Picture != null &&
				<Image
					style={{ borderRadius: '50%' }}
					src={employee.Picture}
					alt="My App Logo"
					width={70}
					height={70}
				/> 
				}
				
				<div>
					<h3>
						{employee.FirstName},{employee.LastName}
					</h3>
					<p>{employee.Mail}</p>
					<p>{employee.Role}</p>
				</div>
			</div>
			<div>
				<MoreButton userid={employee.Id} />
			</div>
		</div>
	  )
	/*
	return (
		<UserCardContainer key={employee.Id}>
			<div>
				{ <Image
					style={{ borderRadius: '50%' }}
					src={employee.Picture}
					alt="My App Logo"
					width={70}
					height={70}
				/> }
				<div>
					<h3>
						{employee.FirstName},{employee.LastName}
					</h3>
					<p>{employee.Mail}</p>
					<p>{employee.Role}</p>
				</div>
			</div>
			<div>
				<MoreButton userid={employee.Id} />
			</div>
		</UserCardContainer>
	)*/
}

export default UserCard;

const UserCardContainer = styled.div`
	border: 1px solid #ebebeb;
	border-radius: 0.5rem;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	isolation: isolate;
	> div {
		gap: 1rem;
		align-items: center;
		display: flex;
	}
	h3 {
		margin: 0;
	}
	p {
		margin: 0;
	}
`;
