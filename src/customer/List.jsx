import { useState } from "react";
import ModalUpdate from './ModalUpdate'
import ModalCrate from "./ModalCreate";

const customers = [
    {
        id: 1,
        fullName: "NVA",
        email: "nva@gmail.com",
        phoneNumber: "947658230",
        gender: "Male",
        city: "Huế",
        address: "28 NTP"
    },
    {
        id: 2,
        fullName: "NVB",
        email: "nvb@gmail.com",
        phoneNumber: "947658230",
        gender: "Female",
        city: "Đà nẵng",
        address: "29 NTP"
    },
];
const List = () => {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [customer, setCustomer] = useState({})

    const changeData = (obj) => {
        let index = -1;

        customers.forEach((item, i) => {
            if (item.id === obj.id) {
                index = i;
            }
        });

        customers[index] = obj;
    }


    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleClickEditButton = (id) => {
        const existCustomer = customers.find((item) => item.id === id);
        console.log(existCustomer);
        if (existCustomer) {
            setCustomer(existCustomer);
            setIsOpen(true);
        } else {
            alert('Không tìm thấy khách hàng');
        }
    }

    const handleAddNewCustomer = (newCustomer) => {
        addNewCustomer(newCustomer);
        closeModal();
    };

    const addNewCustomer = (newCustomer) => {
        const maxId = Math.max(...customers.map((customer) => customer.id));
        const customerToAdd = {
            id: maxId + 1,
            ...newCustomer,
        }
        setCustomer([{ ...customer, customerToAdd }]);
    }
    return (
        <div className="container">
            <h1>Danh sách khách hàng</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Gender</th>
                        <th scope="col">City</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.fullName}</td>
                                <td>{item.email}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.gender}</td>
                                <td>{item.city}</td>
                                <td>{item.address}</td>
                                <td>
                                    <button className="btn btn-primary me-2"
                                        onClick={() => handleClickEditButton(item.id)}
                                    >Edit</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                        )}
                </tbody>
            </table>
            <button className="btn btn-outline-primary"
                onClick={openModal} 
            >Add New Customer</button>

            <ModalUpdate
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                data={customer}
                changeData={changeData}
            />
            {/* <ModalCrate
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                handleAddNewCustomer={handleAddNewCustomer}
            /> */}
        </div>
    )
}
export default List;