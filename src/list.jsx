import Clock from './clock';

function List({ clocks, onDelete }) {
  const clockList = clocks.map((item) => <Clock key={item.id} onDelete={onDelete} time={item} />)

  return (
    <div>
      {clockList}
    </div>
  )
}

export default List