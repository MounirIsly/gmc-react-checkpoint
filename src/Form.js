import React from 'react';

const FormPage = () => {
    return ( 
      <div className='container mt-5 mb-5'>   
      <h2>Contact Me</h2>
        <form className='row g-3 bg-secondary mt-5 p-3 rounded shadow-lg text-light'>
          <div className='col-md-6'>
            <label for="firstName" className='form-label'>First name:</label>
            <input type="text" className='form-control' required />
          </div>
          <div className='col-md-6'>
            <label for="lastName" className='form-label'>Last Name</label>
            <input type="text" className='form-control' required/>
          </div>
          <div className='col-md-8'>
            <label for="emailInfo" className='form-label'>Email</label>
            <input type="text" className='form-control' />
          </div>
          <div className='col-md-4'>
            <label for="phoneNumber" className='form-label'>Phone Number:</label>
            <input type="text" className="form-control" placeholder='(00213) 0550692200' />
          </div>
          <div className='col-md-12'>
            <label >Comments:</label>
              <textarea className="form-control" id="comments" rows="3">

              </textarea>
          </div>
          <div className='col-md-12'>
            <button type="submit" className='btn btn-dark'>Submit</button>

          </div>
        </form>
      </div>
     );
}
 
export default FormPage;