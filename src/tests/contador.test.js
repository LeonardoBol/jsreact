import Contador from '../contador'
//import { render } from '@testing-library/react'
//import '@testing-library/jest-dom/extend-expect'
import { shallow } from 'enzyme'



describe('Pruebas sobre el componente contador',()=>{

   


   test('Probando con enzyme', ()=>{

    const wrapper = shallow(<Contador propNum={0} />)
    expect(wrapper).toMatchSnapshot()

})



test('Traer button',() => {
    const wrapper = shallow(<Contador propNum={10} />)
    const btn1 = wrapper.find('button').at(0)
    console.log(btn1.html())
  })


  test('Simular click boton suma',() => {
    const wrapper = shallow(<Contador propNum={10} />)
    const btn1 = wrapper.find('button').at(0).simulate('click')
    const contando = wrapper.find('h2').text().trim()
    expect(contando).toBe('11')
  
  })
  
  


})