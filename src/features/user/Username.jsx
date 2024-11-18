import { useSelector } from 'react-redux';

export default function Username() {
  const userName = useSelector(state => state.user.userName);

  return (
    <div className="hidden md:block text-sm font-semibold">{userName}</div>
  );
}
