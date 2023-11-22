import './App.css'
import Card from './Card.tsx'

function App() {

  var title="exmp title";
  var description="exmp desc";
  var date="exmp date";

  return (
    <>
      <div className="backplate">
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
