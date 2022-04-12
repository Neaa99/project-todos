import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import styled from 'styled-components'


export const AddTodo = () => {

    const [input, setInput] = useState('')
    const [isActive, setIsActive] = useState(false)

    const toggleClass = () => {
        setIsActive(!isActive)
    }

    const dispatch = useDispatch()

    const onAddTodo = () => {
        dispatch(todos.actions.addTodo(input))
        setInput('') // This clears the input field
    }

    // This adds input on enter key
    const onEnter = (e) => {
        if (e.key === 'Enter') {
            onAddTodo()
        }
    }

    return(
        <>
        <AddTodoContainer className="AddTodo-container">
            <InputField 
                className={isActive ? 'input-active' : 'input-hidden'}
                onKeyDown={(e) => onEnter(e)}
                placeholder='Add Todo...'
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <AddTodoBtn
                className={isActive ? 'btn-active' : 'btn-hidden'}
                disabled={input < 1}
                onClick={() => {
                    onAddTodo()
                    toggleClass()
                  }}
            >
                ➕
            </AddTodoBtn>

            {/* <button
                className={isActive ? 'addtask-active' : 'default-button'}
                onClick={toggleClass}
            >
                <p>+</p>
            </button> */}
        </AddTodoContainer>
        </>
    )
}

const AddTodoContainer = styled.section`
 position: fixed;
 bottom: 200px;

`

const InputField = styled.input`
box-shadow: 
/* logo shadow */
0px 0px 2px #5f5f5f,
/* offset */
0px 0px 0px 5px #ecf0f3,
/*bottom right */
8px 8px 15px #a7aaaf,
/* top left */
-8px -8px 15px #ffffff
;
border: none;
color: #555;
outline:none;
background: none;
 font-size: 18px;
color: #555;
margin-bottom: 30px;
border-radius: 25px;
box-shadow: inset 8px 8px 8px #cbced1,
            inset -8px -8px 8px #ffffff;

padding: 10px;

`
const AddTodoBtn = styled.button`
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
    border: none;
    box-shadow: -10px -10px 20px #fff, 10px 10px 20px rgb(174, 174, 192, 0.5);
    cursor: pointer;

    &:hover {
        box-shadow: 
    0px 0px 2px #5f5f5f,
    0px 0px 0px 5px #ecf0f3,
    8px 8px 15px #a7aaaf,
    -8px -8px 15px #ffffff;

  box-shadow: inset 8px 8px 8px #cbced1,
              inset -8px -8px 8px #ffffff;
    transition: ease-in 0.4s;
    }
   
`