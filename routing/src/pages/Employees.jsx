import React from 'react'
import {Table, Button} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.css';
import AddEmployee from '../components/admin/employee/AddEmployee';

function Employees() {
    return (
        <div className='container my-4'>
            <Button color='success'>Create</Button>

            <AddEmployee/>

            <Table className='mt-3'>
                <thead>
                    <tr>
                        <th>
                            Full Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Address
                        </th>
                        <th>
                            Settings
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Mark
                        </td>
                        <td>
                            Otto
                        </td>
                        <td>
                            @mdo
                        </td>
                        <td className='d-flex gap-2'>
                            <Button color="info">Detail</Button>
                            <Button color="primary">Edit</Button>
                            <Button color="danger">Delete</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Employees