import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent, getByTestId} from '@testing-library/react';

//    <div className="buttons">
//         <div className="one">
//           <button data-testid="clear" id="clear" className="clear" onClick={clearClick}>C</button>
//         </div>
//         <div className="two">
//           <button data-testid="number7" id="number7" onClick={() => numberClick('7')}>7</button>
//           <button data-testid="number8" id="number8" onClick={() => numberClick('8')}>8</button>
//           <button data-testid="number9" id="number9" onClick={() => numberClick('9')}>9</button>
//           <button data-testid="operator-divide" id="operator-divide" onClick={() => operatorClick('/')}>/</button>
//           <button data-testid="number4" id="number4" onClick={() => numberClick('4')}>4</button>
//           <button data-testid="number5" id="number5" onClick={() => numberClick('5')}>5</button>
//           <button data-testid="number6" id="number6" onClick={() => numberClick('6')}>6</button>
//           <button data-testid="operator-multiply" id="operator-multiply" onClick={() => operatorClick('*')}>x</button>
//           <button data-testid="number1" id="number1" onClick={() => numberClick('1')}>1</button>
//           <button data-testid="number2" id="number2" onClick={() => numberClick('2')}>2</button>
//           <button data-testid="number3" id="number3" onClick={() => numberClick('3')}>3</button>
//           <button data-testid="operator-subtract" id="operator-subtract" onClick={() => operatorClick('-')}>-</button>
//           <button data-testid="decimal" id="decimal" onClick={() => decimalClick()}>.</button>
//           <button data-testid="number0" id="number0" onClick={() => numberClick('0')}>0</button>
//           <button data-testid="operator-equals" id="operator-equals" onClick={() => operatorClick('=')}>=</button>
//           <button data-testid="operator-add" id="operator_add" onClick={() => operatorClick('+')}>+</button>

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })
  it('should be able to add numbers 1 and 4 to receive 5', () => {
    const clear = container.getByTestId('clear')
    fireEvent.click(clear);
    const button4 = container.getByTestId('number4');
    const button1 = container.getByTestId('number1')
    const button_add = container.getByTestId('operator-add')
    const button_equals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button4);
    fireEvent.click(button_add);
    fireEvent.click(button1) ;
    fireEvent.click(button_equals);
    expect(runningTotal.textContent).toEqual('5');
  })
  it('should be able to subtract 4 from 7 and get 3', () => {
    const clear = container.getByTestId('clear')
    fireEvent.click(clear);
    const runningTotal = container.getByTestId('running-total')
    const button4 = container.getByTestId('number4')
    const button7 = container.getByTestId('number7')
    const button_subtract = container.getByTestId('operator-subtract')
    const button_equals = container.getByTestId('operator-equals')
    fireEvent.click(button7)
    fireEvent.click(button_subtract)
    fireEvent.click(button4)
    fireEvent.click(button_equals)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should be able to multiple 3 by 5 and get 15', () => {
    const clear = container.getByTestId('clear')
    fireEvent.click(clear);
    const runningTotal = container.getByTestId('running-total')
    const button5 = container.getByTestId('number5')
    const button3 = container.getByTestId('number3')
    const button_equals = container.getByTestId('operator-equals')
    const button_multiply = container.getByTestId('operator-multiply')
    fireEvent.click(button3)
    fireEvent.click(button_multiply)
    fireEvent.click(button5)
    fireEvent.click(button_equals)
    expect(runningTotal.textContent).toEqual('15')
  })
  it('should be able to divide 21 by 7 and get 3', () => {
    const clear = container.getByTestId('clear')
    fireEvent.click(clear);
    const runningTotal = container.getByTestId('running-total')
    const button_equals = container.getByTestId('operator-equals')
    const button3 = container.getByTestId('number3')
    const button1 = container.getByTestId('number1')
    const button2 = container.getByTestId('number2')
    const button_divide = container.getByTestId('operator-divide')
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(button_divide)
    fireEvent.click(button3)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should be able to concatenate multiple number button clicks', () => {
    const clear = container.getByTestId('clear')
    fireEvent.click(clear);
    const runningTotal = container.getByTestId('running-total')
    const button3 = container.getByTestId('number3')
    const button1 = container.getByTestId('number1')
    const button2 = container.getByTestId('number2')
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(button3)
    expect(runningTotal.textContent).toEqual('213')
  })

  it('should be able to chain multiple operations together', () => {
    const clear = container.getByTestId('clear')
    fireEvent.click(clear);
    const runningTotal = container.getByTestId('running-total')
    const button_equals = container.getByTestId('operator-equals')
    const button4 = container.getByTestId('number4')
    const button9 = container.getByTestId('number9')
    const button2 = container.getByTestId('number2')
    const button_multiply = container.getByTestId('operator-multiply')
    const button_add = container.getByTestId('operator-add')
    fireEvent.click(button4)
    fireEvent.click(button_add)
    fireEvent.click(button9)
    fireEvent.click(button_equals)
    fireEvent.click(button_multiply)
    fireEvent.click(button2)
    fireEvent.click(button_equals)
    expect(runningTotal.textContent).toEqual('26')
  })
  it('should be able to clear the running total without effecting the calculation', () => {
    const clear = container.getByTestId('clear')
    const runningTotal = container.getByTestId('running-total')
    const button_equals = container.getByTestId('operator-equals')
    const button4 = container.getByTestId('number4')
    const button9 = container.getByTestId('number9')
    const button2 = container.getByTestId('number2')
    
    const button_add = container.getByTestId('operator-add')
    fireEvent.click(button4);
    fireEvent.click(button_add); 
    fireEvent.click(button4);
    fireEvent.click(button_add);
    fireEvent.click(button4);
    // 4 is in the field but not entered and cleared, so total is 8
    fireEvent.click(clear);
    fireEvent.click(button4);
    fireEvent.click(button_add);
// still has 8 in memory despite being cleared, so 8+4 = 12
    expect(runningTotal.textContent).toEqual('12')
  })

})

