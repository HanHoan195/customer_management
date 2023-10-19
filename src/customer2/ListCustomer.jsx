import { useEffect, useState } from "react";
import ModalCrate from "./ModalCreate";
import ModalUpdate from "./ModalUpdate";

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

const ListCustomer = () => {
    const [modalCrateIsOpen, setModalCrateIsOpen] = useState(false);
    const [modalUpdateIsOpen, setModalUpdateIsOpen] = useState(false);
    const [customerList, setCustomerList] = useState(customers)
    const [customer, setCustomer] = useState({})

    const openCrateModal = () => {
        setModalCrateIsOpen(true);
    };

    const closeCrateModal = () => {
        setModalCrateIsOpen(false);
    };

    const openUpdateModal = () => {
        setModalUpdateIsOpen(true);
    };

    const closeUpdateModal = () => {
        setModalUpdateIsOpen(false);
    };

    const changeData = (obj) => {
        let index = -1;

        customers.forEach((item, i) => {
            if (item.id === obj.id) {
                index = i;
            }
        });

        customers[index] = obj;
    }

    const handleAddCustomer = (newCustomer) => {
        const newId = customerList.length + 1;
        newCustomer.id = newId;

        setCustomerList([...customerList, newCustomer])
    }

    const handleClickEditButton = (id) => {
        const existCustomer = customerList.find((item) => item.id === id);
        console.log(existCustomer);
        if (existCustomer) {
            setCustomer(existCustomer);
            setModalUpdateIsOpen(true);
        } else {
            alert('Không tìm thấy khách hàng');
        }
    }

    const deleteCustomer = (id) => {
        const updatedCustomers = customerList.filter((customer) => customer.id !== id);
        setCustomerList(updatedCustomers);
        closeUpdateModal(); // Đóng modal sau khi xóa xong.
    };

    useEffect(() => {
        setCustomerList(customerList);
    }, [customerList]);

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
                        customerList.map((item, index) => (
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
                                        onClick={() => handleClickEditButton(item.id)}>
                                        Edit
                                    </button>
                                    <button className="btn btn-danger" onClick={() => deleteCustomer(item.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                        )}
                </tbody>
            </table>
            <button className="btn btn-outline-primary" onClick={openCrateModal}>
                Add New Customer
            </button>

            {modalCrateIsOpen && (
                <ModalCrate
                    modalIsOpen={modalCrateIsOpen}
                    closeModal={closeCrateModal}
                    data={customerList}
                    handleAddCustomer={handleAddCustomer}
                />
            )}

            {modalUpdateIsOpen && (
                <ModalUpdate
                    modalIsOpen={modalUpdateIsOpen}
                    closeModal={closeUpdateModal}
                    data={customer}
                    changeData={changeData}
                />
            )}
        </div>
    )
}

export default ListCustomer;