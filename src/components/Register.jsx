import { useState } from 'react';
import { Link } from 'react-router';

const Register = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [uname, setUName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [dob, setDob] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formdata = {
      no: username,
      password: password,
      uname: uname,
      email: email,
      phoneno: phoneno,
      dob: dob
    };
    const sendData = JSON.stringify(formdata);

    try {
      const response = await fetch(`http://localhost:3123/${props.category.toLowerCase()}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: sendData,
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess(data.detail);
        setError(null);
      } else {
        const data = await response.json();
        setError(data.detail);
        setSuccess(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-peel-50 px-4">
      <h1 className="font-main font-bold text-3xl md:text-6xl text-orange-peel-700 mt-8 md:mt-16">
        {props.category} Registration
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label className="mt-6">
          Registration Number:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
        </label>
        <br />
        <label className="mt-6">
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
        </label>
        <br />
        <label className="mt-6">
          Name:
          <input type="text" value={uname} onChange={(event) => setUName(event.target.value)} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
        </label>
        <br />
        <label className="mt-6">
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
        </label>
        <br />
        <label className="mt-6">
          Phone Number:
          <input type="text" value={phoneno} onChange={(event) => setPhoneno(event.target.value)} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
        </label>
        <br />
        <label className="mt-6">
          Date of Birth:
          <input type="date" value={dob} onChange={(event) => setDob(event.target.value)} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
        </label>
        <br />
        <div className='flex items-center justify-center space-x-3'>
          <button type="submit" className="mt-6 px-6 py-3 bg-orange-peel-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-peel-700 transition">
            Register
          </button>
          <Link to={props.return}>
                <button className="mt-6 px-6 py-3 bg-orange-peel-500 text-white font-semibold rounded-md hover:bg-orange-peel-700 transition">
                    Back
                </button>
          </Link>
        </div>
        {error && <p style={{ color: 'red' }} className="mt-6">errosr</p>}
        {success && <p style={{ color: 'green' }} className="mt-6">succews</p>}
      </form>
    </div>
  );
};

export default Register;
