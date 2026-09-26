import './App.css'
import ImcCalc from './component/ImcCalc'
import ImcTable from './component/ImcTable'
import { data } from './data/data'
import { useState } from 'react'

function App() {

  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")
  const [minWeight, setMinWeight] = useState("")
  const [maxWeight, setMaxWeight] = useState("")

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!weight || !height) {
      alert("Preencha os campos de altura e peso.")
      return
    }

    const weightFloat = +weight.replace(",", ".")
    const heightFloat = +height.replace(",", ".")

    if (
      weightFloat <= 0 ||
      heightFloat <= 0 ||
      heightFloat > 3 ||
      weightFloat > 500
    ) {
      alert("Informe valores válidos para altura e peso.")
      return
    }

    const imcResult = (
      weightFloat /
      (heightFloat * heightFloat)
    ).toFixed(1)

    setImc(imcResult)

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info)
        setInfoClass(item.infoclass)
      }
    })

    // Nova funcionalidade:
    // calcula a faixa de peso correspondente ao IMC normal
    const minimumHealthyWeight = (
      18.5 *
      heightFloat *
      heightFloat
    ).toFixed(1)

    const maximumHealthyWeight = (
      24.9 *
      heightFloat *
      heightFloat
    ).toFixed(1)

    setMinWeight(minimumHealthyWeight)
    setMaxWeight(maximumHealthyWeight)
  }

  const resetCalc = (e) => {
    e.preventDefault()

    setImc("")
    setInfo("")
    setInfoClass("")
    setMinWeight("")
    setMaxWeight("")
  }

  return (
    <div className="container">
      {!imc ? (
        <ImcCalc calcImc={calcImc} />
      ) : (
        <ImcTable
          data={data}
          imc={imc}
          info={info}
          infoClass={infoClass}
          minWeight={minWeight}
          maxWeight={maxWeight}
          resetCalc={resetCalc}
        />
      )}
    </div>
  )
}

export default App