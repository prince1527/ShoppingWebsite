import React from 'react';
import {Table} from "react-bootstrap";

const TicketTable=()=>{
    return(
        <Table striped  bordered hover>
            <thead>
                <tr>
                    <td>id</td>
                    <td>subject</td>
                    <td>subject</td>
                    <td>Open date</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>issue</td>
                    <td>client response</td>
                    <td>2020-10-19</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>issue</td>
                    <td>client response</td>
                    <td>2020-10-19</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>issue</td>
                    <td>client response</td>
                    <td>2020-10-19</td>
                </tr>
            </tbody>
        </Table>
    )
}
export default TicketTable;
