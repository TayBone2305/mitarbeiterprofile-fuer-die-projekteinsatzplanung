import MoreButton from './MoreButton';
import Image from 'next/image';

const EmployeeCard = ({ employee }) => 
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
}

export default EmployeeCard;