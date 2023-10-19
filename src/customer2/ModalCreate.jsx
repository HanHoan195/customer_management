import Modal from "react-modal";

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

const ModalCrate = ({ modalIsOpen, closeModal, handleAddCustomer }) => {

    const onSubmit = (event) => {
        event.preventDefault();

        const fullName = event.target.fullName.value;
        const email = event.target.email.value;
        const phoneNumber = event.target.phone.value;
        const gender = event.target.gender.value;
        const city = event.target.city.value;
        const address = event.target.address.value;

        const customerData = {
            fullName,
            email,
            phoneNumber,
            gender,
            city,
            address,
        };
        handleAddCustomer(customerData)
        closeModal()
        console.log(customerData);
    };

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
            contentLabel="Example Modal"
        >

            <h2>Add New Customer</h2>

            <form onSubmit={onSubmit}>
                <div>
                    <label className="form-label" htmlFor="fullName">Full Name</label>
                    <input className="form-control" type="text" name="fullName" id="fullName"
                    />
                </div>
                <div>
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-control" type="email" name="email" id="email"
                    />
                </div>
                <div>
                    <label className="form-label" htmlFor="phone">Phone</label>
                    <input className="form-control" type="tel" name="phone" id="phone"
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
                    />
                    <label htmlFor="male" className="me-5">Male</label>
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                    />
                    <label htmlFor="female">Female</label>
                </div>
                <div>
                    <label className="form-label" htmlFor="city">City</label>
                    <select className="form-select" name="city" id="city"
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
                    />
                </div>
                <div className="mt-3" style={{ textAlign: 'center' }}>
                    <button type="submit" className="btn btn-primary me-2">
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
export default ModalCrate;