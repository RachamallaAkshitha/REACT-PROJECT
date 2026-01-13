import { useState } from "react";
import { Footer } from "../Components/Footer/Footer"
import { Header } from "../Components/Header/Header"
import { AppRouter } from "../Router/AppRouter"
import Signup from "../Components/Authentication/Signup";
import Login from "../Components/Authentication/Login";

export const MainLayout = () => {

    const [showAuth, setShowAuth] = useState(false);
    const [authType, setAuthType] = useState("signup"); // default


    const openAuthModal = (type = "signup") => {
        setAuthType(type);
        setShowAuth(true);
    };

    const closeAuthModal = () => {
        setShowAuth(false);
    };

    return (
        <>
            <Header openAuthModal={openAuthModal} />

            <AppRouter />

            {showAuth && (
                <div className="modal-overlay" onClick={closeAuthModal}>
                    <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                        <span className="close-btn" onClick={closeAuthModal}>
                            ×
                        </span>

                        {authType === "login" ? (
                            <Login switchToSignup={() => setAuthType("signup")} />
                        ) : (
                            <Signup switchToLogin={() => setAuthType("login")} />
                        )}
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

