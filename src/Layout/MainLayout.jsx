import { Footer } from "../Components/Footer/Footer"
import { Header } from "../Components/Header/Header"
import { AppRouter } from "../Router/AppRouter"

export const MainLayout = () => {


    return (
        <>
        <Header/>
        <AppRouter/>
        <Footer/>
        </>
    )
}