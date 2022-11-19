import supabase from '../config/supabaseClient'
import { useEffect, useState } from 'react'

// components
import UserCard from '../components/UserCard'

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [Employee, setEmployee] = useState(null)

  useEffect(() => {
    const fetchEmployee = async () => {
      const { data, error } = await supabase
        .from('Employee')
        .select()
      
      if (error) {
        setFetchError('Could not fetch the employee')
        setEmployee(null)
      }
      if (data) {
        setEmployee(data)
        setFetchError(null)
      }
    }

    fetchEmployee()

  }, [])

  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      {/* <button onClick={() => console.log(Employee)}>b</button> */}
      {Employee && (
        <div className="employee">
         
          <div className="employee-grid">
            {Employee.map(employee => (
              <UserCard key={employee.Id} employee={employee} />
            ))}
          </div>
        </div>
      )}
      
    </div>
  )
}

export default Home