import React, { Component } from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import searchIcon from '../img/magnifying-glass.svg'

const Searchbar = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
width: 100%;
height: 54px;
border: 0.92054px solid #097AFF;
border-radius: 19.3088px;

`;
const SearchInput = styled.input`
border: none;
width: 80%;
padding: 5px 15px;

`;

const SearchBtn = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
width: 50%;
height: 47px;
background: #3E6AFF;
border-radius: 19.31px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height */


color: #FFFFFF;
`;

export class Search extends Component {


    render() {
        return (
            <div className="container">
                <div className="row">
                    <Searchbar>
                        <SearchInput placeholder='Search Trend...' className='search-input' />
                        <SearchBtn><BsSearch size={25} /> Search...</SearchBtn>
                    </Searchbar>
                </div>
            </div>
        )
    }
}


export default Search


