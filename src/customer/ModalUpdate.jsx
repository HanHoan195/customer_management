import { useEffect, useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        width: '800px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const ModalUpdate = ({ modalIsOpen, closeModal, data, changeData }) => {
    const [customer, setCustomer] = useState(data)

    const handleAfterClose = () => {
        setCustomer({});
    };

    const handleChangeInput = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = () => {
        changeData(customer);
        closeModal();
    }

    useEffect(() => {
        setCustomer(data);
    }, [data]);

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            onAfterClose={handleAfterClose}
            style={customStyles}
            ariaHideApp={false}
            contentLabel="Example Modal">

            <h2>Edit Customer</h2>

            <form>
                <div>
                    <label className="form-label" htmlFor="fullName">Full Name</label>
                    <input className="form-control" type="text" name="fullName" id="fullName"
                        defaultValue={customer.fullName}
                        onChange={handleChangeInput}
                    />
                </div>
                <div>
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-control" type="email" name="email" id="email"
                        defaultValue={customer.email}
                        onChange={handleChangeInput}
                    />
                </div>
                <div>
                    <label className="form-label" htmlFor="phone">Phone</label>
                    <input className="form-control" type="tel" name="phone" id="phone"
                        defaultValue={customer.phoneNumber}
                        onChange={handleChangeInput}
                    />
                </div>
                <div>
                    <label className="form-label">Gender</label>
                    <label className="me-3">Gender: </label>
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        defaultValue={customer.gender}
                        onChange={handleChangeInput}
                    />
                    <label htmlFor="male" className="me-5">Male</label>
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        defaultValue={customer.gender}
                        onChange={handleChangeInput}
                    />
                    <label htmlFor="female">Female</label>
                </div>
                <div>
                    <label className="form-label" htmlFor="city">City</label>
                    <select className="form-select" name="city" id="city"
                        defaultValue={customer.city}
                        onChange={handleChangeInput}
                    >
                        <option value="Hà Nội">Hà Nội</option>
                        <option value="Huế">Huế</option>
                        <option value="Đà Nẵng">Đà Nẵng</option>
                        <option value="Sài Gòn">Sài Gòn</option>
                    </select>
                </div>
                <div>
                    <label className="form-label" htmlFor="address">Address</label>
                    <input className="form-control" type="text" name="address" id="address"
                        defaultValue={customer.address}
                    />
                </div>
                <div className="mt-3" style={{ textAlign: 'center' }}>
                    <button type="button" className="btn btn-primary me-2" onClick={handleSave}>
                        Save
                    </button>
                    <button type="button" className="btn btn-danger" onClick={closeModal}>
                        Cancel
                    </button>
                </div>
            </form>
        </Modal>
    )
}
export default ModalUpdate
