import Contador from '../contador'
//import { render } from '@testing-library/react'
//import '@testing-library/jest-dom/extend-expect'
import { shallow } from 'enzyme'



test('Encontrando el botón menos',() => {
    const wrapper = shallow(<Contador propNum={10} />)
    const button1 = wrapper.find('button').at(1)
    console.log(button1.html())
})

test('Encontrando el botón reset', () =>{

    const wrapper = shallow(<Contador propNum={10} />)
    const button2 = wrapper.find('button').at(2).html()
    console.log(button2)
})

test('Probando click boton menos', () => {
    const wrapper = shallow(<Contador propNum={10} />)
    const button1 = wrapper.find('button').at(1).simulate('click')
    const resultado = wrapper.find('h2').text().trim()
    expect(resultado).toBe('9')
})

test('Probando click boton menos', () => {
    const wrapper = shallow(<Contador propNum={10} />)
    const button1 = wrapper.find('button').at(2).simulate('click')
    const resultado = wrapper.find('h2').text().trim()
    expect(resultado).toBe('10')
})





