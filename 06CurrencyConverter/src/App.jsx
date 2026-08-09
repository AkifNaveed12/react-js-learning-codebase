import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

import currencyBg from './assets/currency-bg-image.jpg';
function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("pkr")
  const [to, setTo] = useState("usd")
  const [convertedAmount, SetconvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)
  
  //swapping curriencies
  const swap = () => {
    setFrom(to);
    setTo(from);
    SetconvertedAmount(amount);
    setAmount(convertedAmount);
  };

  //convert currency
  const convert = () => {
    SetconvertedAmount(amount * currencyInfo[to]);
  };


  return (
    
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat ' 
        style={{
          backgroundImage: `url(${currencyBg})`
        }}
        >
        <div className='w-full'>

          <div className='w-full max-w-md mx-auto order border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
            >
              {/*from box*/}
              <div className='w-full mb-1'>

                <InputBox
                label="form"
                amount = {amount}
                currencyOptions = {options}
                onCurrencyChange = {(currency) => 
                  setFrom(currency)
                  }
                selectCurrency={from}
                onAmountChange={(amount) => 
                setAmount(amount)
                  }  
                >
                </InputBox>
              </div>

              {/*swap button*/}
              <div className='relative w-full h-0.5'>
                
                <button
                  type='button'
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                  onClick={swap}
                >
                  Swap
                </button>
              </div>

              {/*to box*/}
              <div className='w-full mt-1 mb-4'>
                
                <InputBox
                  label="To"
                  amount = {convertedAmount}
                  currencyOptions = {options}
                  onCurrencyChange = {(currency) => 
                    setTo(currency)
                  }
                  selectCurrency={to}
                  amountDisable
                >
                </InputBox>

                {/* convert button */}
                </div>
                    <button 
                      className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
                      convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
            </form>

          </div>

        </div>

      </div>

    
  )
}

export default App
