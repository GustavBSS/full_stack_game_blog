import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light text-center py-3">
            <p>&copy; 2024 Blog - Todos os direitos reservados.</p>
            <div>
                <a href="https://facebook.com" className="text-light me-3">Facebook</a>
                <a href="https://twitter.com" className="text-light me-3">Twitter</a>
                <a href="https://instagram.com" className="text-light">Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;
