import './App.css'
import ControlledField from './components/controlledField/ControlledField'
import FromAction from './components/formAction/FromAction'
import SimpleForm from './components/simpleForm/SimpleForm'
import UncontrolledField from './components/uncontrolledField/UncontrolledField'

function App() {
  

  return (
    <>
      <h1>Explore React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FromAction></FromAction> */}
      {/* <ControlledField></ControlledField> */}
      <UncontrolledField></UncontrolledField>
    </>
  )
}

export default App
