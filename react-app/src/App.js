
import { useLayoutEffect, useState } from 'react';
import { Form } from './components/classes/Form';
import { FormFunc } from './components/func/Form';
import { Message } from './components/func/Message'


export function App() {
    const [toggle, setToggle] = useState(true)
    const [arr, setArr] = useState([{ name: 'asda1' }, { name: 'asda2' }, { name: 'asda3' }, { name: 'asda4' }])

    return (
        <>
            <h1>Hello World!</h1>
            <Form />
            <hr />
            <button onClick={() => setToggle(!toggle)}>{toggle ? 'Показать' : 'Скрыть'}</button>
            {toggle && <FormFunc />}
            <ul>
                {arr.map((el) => (
                    <>
                        <li>{el.name}</li>
                        <Form name={el.name} />
                    </>
                ))}
            </ul>
            <Message text='Тут передаем сообщение' />
        </>


    )
}
// export default App