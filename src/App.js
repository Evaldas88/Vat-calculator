import './App.css';
import React  , { useState } from 'react';

const App = () => {

  const [amount, setAmount] = useState(0);
  const [pvm, setPvm] = useState(21);

  let amountStr = amount.toFixed(2)
  let pvmStr = ((amount / 100) * pvm).toFixed(2)
  let calc = ((((amount / 100) * pvm) + amount)).toFixed(2)

  const calc1 = (e) => {
    setAmount((+  e.target.value) / (100 + pvm) * 100).toFixed(2);
  }

    
  return (


    <div className="container">
      <div className=" d-flex justify-content-md-center  text-center ">
        <div className="card  p-3">
          <h1>Pvm Skaičiuoklė</h1>
          <div className=" mt-5">
            <label className="px-3">Pvm</label>
            <select onChange={(e) => setPvm(+e.target.value)}>
              <option value="21">21%</option>
              <option value="9">9%</option>
              <option value="5">5%</option>
            </select>
          </div>
          <div className=" card-body mt-3 ">
            <div className="d-flex   pb-2 ">
              <div className="w-50">
                <p>Suma be PVM</p>
              </div>
              <div className="justify-content-md-center col-5 ">
                <input class="form-control text-end" type="text"   onChange={(e) => setAmount(+e.target.value)} value={ amountStr} />
              </div>
            </div>
            <div className="d-flex  pb-2">
              <div className="w-50 " >
                <p>PVM Suma</p>
              </div>
              <div className="justify-content-md-center col-5">
                <input class="form-control text-end " type="text" disabled="disabled" value={pvmStr} />
              </div>
            </div>
            <div className="d-flex  pb-2">
              <div className="w-50 ">
                <p>Bendra suma su PVM</p>
              </div>

              <div className="justify-content-md-center col-5">
                <input class="form-control text-end " type="text" onChange={calc1} value={calc} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;

