import Button from "./Button"
import "./ImcTable.css"

const ImcTable = ({
  data,
  imc,
  info,
  infoClass,
  minWeight,
  maxWeight,
  resetCalc
}) => {
  return (
    <div id="result-container">

      <h2>Resultado do IMC</h2>

      <div className="result-card">
        <p id="imc-number">
          Seu IMC:
          <span className={infoClass}> {imc}</span>
        </p>

        <p id="imc-info">
          Situação atual:
          <span className={infoClass}> {info}</span>
        </p>

        <div className="healthy-weight">
          <p>Faixa de peso saudável para sua altura:</p>

          <strong>
            {minWeight} kg a {maxWeight} kg
          </strong>
        </div>
      </div>

      <h3>Confira as classificações:</h3>

      <div id="imc-table">

        <div className="table-header">
          <h4>IMC</h4>
          <h4>Classificação</h4>
          <h4>Obesidade</h4>
        </div>

        {data.map((item) => (
          <div
            className={`table-data ${
              item.infoclass === infoClass ? "current-row" : ""
            }`}
            key={item.info}
          >
            <p>{item.classification}</p>
            <p>{item.info}</p>
            <p>{item.obesity}</p>
          </div>
        ))}

      </div>

      <Button
        id="back-btn"
        text="Voltar"
        action={resetCalc}
      />

    </div>
  )
}

export default ImcTable