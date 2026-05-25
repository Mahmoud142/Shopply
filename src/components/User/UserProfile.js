import ProfileHook from "../../hook/user/profile-hook";
import { Modal, Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

const UserProfile = () => {
    const [
        user,
        show,
        handleClose,
        handleShow,
        handleSubmit,
        name,
        email,
        phone,
        onChangeName,
        onChangeEmail,
        onChangePhone,
        changePassword,
        oldPassword,
        newPassword,
        confirmNewPassword,
        onChangeOldPass,
        onChangeNewPass,
        onChangeConfirmPass,
    ] = ProfileHook();

    return (
        <div className="flex flex-col gap-6 text-left">
            <h2 className="font-sans text-2xl font-extrabold text-primaryText tracking-tight m-0 mb-2">
                Personal Profile
            </h2>

            {/* Edit Profile Modal */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile Details</Modal.Title>
                </Modal.Header>
                <Modal.Body className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-secondaryText uppercase tracking-wider">Username</label>
                        <input
                            value={name}
                            onChange={onChangeName}
                            type="text"
                            className="w-full h-11 px-4 bg-brandBg border border-borderColor rounded-xl text-sm font-medium text-primaryText outline-none focus:border-primaryAccent focus:ring-4 focus:ring-primaryAccent/10 transition-all"
                            placeholder="Enter Username"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-secondaryText uppercase tracking-wider">Email Address</label>
                        <input
                            value={email}
                            onChange={onChangeEmail}
                            type="email"
                            className="w-full h-11 px-4 bg-brandBg border border-borderColor rounded-xl text-sm font-medium text-primaryText outline-none focus:border-primaryAccent focus:ring-4 focus:ring-primaryAccent/10 transition-all"
                            placeholder="Enter Email"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-secondaryText uppercase tracking-wider">Phone Number</label>
                        <input
                            value={phone}
                            onChange={onChangePhone}
                            type="tel"
                            className="w-full h-11 px-4 bg-brandBg border border-borderColor rounded-xl text-sm font-medium text-primaryText outline-none focus:border-primaryAccent focus:ring-4 focus:ring-primaryAccent/10 transition-all"
                            placeholder="Enter Phone Number"
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="dark" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Profile Overview Card */}
            <div className="bg-white rounded-premium border border-borderColor/60 shadow-premium p-6 flex flex-col gap-5">
                <div className="flex justify-between items-center pb-3 border-b border-borderColor/40">
                    <span className="text-[11px] font-bold text-primaryAccent uppercase tracking-widest bg-brandBg px-3 py-1 rounded-full border border-borderColor/40">
                        Profile Overview
                    </span>
                    <button
                        onClick={handleShow}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-brandBg border border-borderColor/60 hover:border-primaryAccent rounded-full text-xs font-bold text-secondaryText hover:text-primaryText transition-all cursor-pointer"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                        </svg>
                        Edit Profile
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold text-secondaryText/60 uppercase tracking-widest">Full Name</span>
                        <span className="text-sm font-bold text-primaryText">{user.name || "N/A"}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold text-secondaryText/60 uppercase tracking-widest">Phone Number</span>
                        <span className="text-sm font-bold text-primaryText">{user.phone || "N/A"}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold text-secondaryText/60 uppercase tracking-widest">Email Address</span>
                        <span className="text-sm font-bold text-primaryText truncate">{user.email || "N/A"}</span>
                    </div>
                </div>
            </div>

            {/* Change Password Card */}
            <div className="bg-white rounded-premium border border-borderColor/60 shadow-premium p-6 flex flex-col gap-5 mt-2">
                <span className="text-[11px] font-bold text-primaryAccent uppercase tracking-widest bg-brandBg px-3 py-1 rounded-full border border-borderColor/40 self-start">
                    Account Security
                </span>
                
                <h3 className="font-sans text-base font-bold text-primaryText tracking-tight m-0 -mt-1">
                    Update Password
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-secondaryText uppercase tracking-wider">Old Password</label>
                        <input
                            value={oldPassword}
                            onChange={onChangeOldPass}
                            type="password"
                            className="w-full h-11 px-4 bg-brandBg border border-borderColor rounded-xl text-sm font-medium text-primaryText outline-none focus:border-primaryAccent focus:ring-4 focus:ring-primaryAccent/10 transition-all"
                            placeholder="Current Password"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-secondaryText uppercase tracking-wider">New Password</label>
                        <input
                            value={newPassword}
                            onChange={onChangeNewPass}
                            type="password"
                            className="w-full h-11 px-4 bg-brandBg border border-borderColor rounded-xl text-sm font-medium text-primaryText outline-none focus:border-primaryAccent focus:ring-4 focus:ring-primaryAccent/10 transition-all"
                            placeholder="New Password"
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-secondaryText uppercase tracking-wider">Confirm Password</label>
                        <input
                            value={confirmNewPassword}
                            onChange={onChangeConfirmPass}
                            type="password"
                            className="w-full h-11 px-4 bg-brandBg border border-borderColor rounded-xl text-sm font-medium text-primaryText outline-none focus:border-primaryAccent focus:ring-4 focus:ring-primaryAccent/10 transition-all"
                            placeholder="Repeat New Password"
                        />
                    </div>
                </div>

                <button
                    onClick={changePassword}
                    className="self-end px-6 h-11 bg-primaryText hover:bg-primaryAccent text-white text-xs font-extrabold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md border-none cursor-pointer mt-2"
                >
                    Update Password
                </button>
            </div>

            <ToastContainer />
        </div>
    );
};

export default UserProfile;
