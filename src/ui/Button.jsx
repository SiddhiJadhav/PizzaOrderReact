import { Link } from 'react-router-dom';

export default function Button({ disabled, children, to, type, onClick }) {
  const base =
    ' text-stone-800 text-sm bg-yellow-400 font-semibold  tracking-wide rounded-full inline-block hover:bg-yellow-300 uppercase focus:outline-none focus:bg-yellow-300 disabled:cursor-not-allowed transition-all duration-300';

  const style = {
    primary: base + ' px-4 py-3',
    small: base + ' px-4 py-2 text-xs text-nowrap',
    secondary:
      base +
      ' px-4 py-3 bg-transparent hover:bg-stone-200 focus:outline-none focus:bg-stone-300 text-sm',
  };

  if (to)
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );

  return (
    <button className={style[type]} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
