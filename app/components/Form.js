import React, { Component, Label } from 'react';

export default class Form extends Component {
  render () {
    return (
     <form className='demoForm'>
       <h2>Sign up</h2>
       <div className='form-group'>
         <Label htmlFor='email'>Email address</Label>
         <input type='email' className='form-control' name='email' />
       </div>
       <div className='form-group'>
         <Label htmlFor='password'>Password</Label>
         <input type='password' className='form-control'name='password' />
       </div>
       <button type='submit' className='btn btn-primary'>
          Sign up
       </button>
     </form>);
  }
}
