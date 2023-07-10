import React from 'react';
import {Row , Col , Form} from 'react-bootstrap';
import PropeType from 'prop-types';


const SearchForm=(handleOnChange , str)=>{
    console.log(str);
    return(
        <div>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column ms="2">
                        Search:{""}
                    </Form.Label>
                    <Col ms="10">
                        <Form.Control
                        name="searchStr"
                        onChange={handleOnChange}
                        value={str}
                        placeholder="search"/>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};
SearchForm.PropeType ={
    handleOnChange: PropeType.func.isRequired,
    str:PropeType.string.isRequired
}



export default SearchForm;


