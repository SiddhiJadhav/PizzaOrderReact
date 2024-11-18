import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const userName = useSelector(state => state.user.userName);

  return (
    <div className="my-10 text-center mx-5 md:mx-10 ">
      <h1 className="text-xl text-stone-700 font-semibold mb-8 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {!userName ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Go to Menu
        </Button>
      )}
    </div>
  );
}

export default Home;
