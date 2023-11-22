import './App.css'
import Card from './Card.tsx'
import InputRow from './InputRow.tsx';

function App() {

  var title="exmp title";
  var description="exmp desc";
  var date="exmp date";

  return (
    <>
      <div className="backplate">
        <InputRow />
        <div className="mainplate">
          <Card 
            title={title}
            description={description}
            date={date}
          />
        </div>
      </div>
    </>
  )
}

export default App
