import './App.css'
import ControlledField from './components/controlledField/ControlledField'
import FromAction from './components/formAction/FromAction'
import HookForm from './components/hookForm/HookForm'
import ProductManagement from './components/productManagement/ProductManagement'
import SimpleForm from './components/simpleForm/SimpleForm'
import UncontrolledField from './components/uncontrolledField/UncontrolledField'

function App() {
  

  return (
    <>
      <h1>Explore React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FromAction></FromAction> */}
      {/* <ControlledField></ControlledField> */}
      {/* <UncontrolledField></UncontrolledField> */}
      {/* <HookForm></HookForm> */}
      <ProductManagement></ProductManagement>
    </>
  )
}

export default App
