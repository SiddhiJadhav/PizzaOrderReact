import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;

    dispatch(updateName(username));
  }

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <p className="mb-4 text-sm md:text-base text-stone-600 ">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="w-72 input m-4"
      />

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
