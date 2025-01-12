import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import styled from 'styled-components/macro'

import tasks from '../reducers/tasks'

const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 20px; 
    width: 100%;
`

const TaskInput = styled.input`
    margin: 30px 0 10px 0;
    border: none;
    border-bottom: 1px solid black;
    background-color: transparent;
    padding-bottom: 5px;
    outline: none;
    width: 100%;   
`

const SubmitButton = styled.button`
    width: 35%;
    height: 25px;
    background-color: #BA2626;
    color: white;
    border-radius: 5px;
    border: none
`

const NewTaskInput = () => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()
    const onFormSubmit = (event) => {
        event.preventDefault()

        const newTask = {
            id: uniqid(),
            description: task,
            isComplete: false
        }

        dispatch(tasks.actions.addTask(newTask))
        setTask('')
    }

    return(
        <InputContainer onSubmit={onFormSubmit}>
            <TaskInput 
                type='text'
                value={task}
                onChange={event => setTask(event.target.value)}
                placeholder='type here ...'
                required
            />
            <SubmitButton type='submit'>add task</SubmitButton>
        </InputContainer>
    )
}

export default NewTaskInput