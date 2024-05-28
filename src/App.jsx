const title = 'Bonjour les gens';

function App() {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation()

    alert("Click Here")
  }
  return <>
    <h1 onClick={handleClick} id="title">{title}</h1>
  </>
}

export default App
