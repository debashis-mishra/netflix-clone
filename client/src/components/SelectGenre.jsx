import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { fetchDataByGenre } from '../store';


const Select = styled.select`
margin-left: 5rem;
cursor: pointer;
font-size: 1.4rem;
background-color: rgbaa(0,0,0,0.4);
color: black;
`

export default function SelectGenre({ genres, type }) {
    const dispatch = useDispatch();
    return (
        <Select className='flex' onChange={e => { dispatch(fetchDataByGenre({ genre: e.target.value, type })) }}>
            {
                genres.map((genre) => {
                    return (
                        <option value={genre.id} id={genre.id}>{genre.name}</option>
                    )
                })
            }
        </Select>
    )
}
