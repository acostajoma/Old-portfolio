import TypingEffect from "../elements/TypingEffect"

const Header = () => {
    return (
        <header className="h-[52rem] sm:h-[62rem] lg:h-screen flex items-center bg-gray-800">
            <TypingEffect 
                textToType={'José Acosta Rodríguez\nDeveloper'}
            />
        </header>
    )
}

export default Header