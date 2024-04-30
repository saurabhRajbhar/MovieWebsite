const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="w-full sm:w-1/2 lg:w-auto mb-3">
                        <div>About Us</div>
                        <h1 className="text-sm mb-1">Lorem ipsum dolor sit amet,</h1>
                        <h1 className="text-sm mb-1">consectetur adipiscing elit.</h1>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-auto mb-3">
                        <div>Contact Us</div>
                        <h1 className="text-sm mb-1">Email: example@example.com</h1>
                        <h1 className="text-sm mb-1">Phone: 123-456-7890</h1>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-auto mb-3">
                        <div>Privacy Policy</div>
                        <h1 className="text-sm mb-1">Lorem ipsum dolor sit amet,</h1>
                        <h1 className="text-sm mb-1">consectetur adipiscing elit.</h1>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-auto mb-3">
                        <div>Terms and Conditions</div>
                        <h1 className="text-sm mb-1">Lorem ipsum dolor sit amet,</h1>
                        <h1 className="text-sm mb-1">consectetur adipiscing elit.</h1>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
