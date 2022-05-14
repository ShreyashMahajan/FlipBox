import axios from "axios";
import { useMediaQuery } from 'react-responsive';

const { createContext, useContext, useState, useEffect } = require("react");


const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState([]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    useEffect(() => {
        if (isMobile) {
            setIsMenuOpen(false)
        } else {
            setIsMenuOpen(true);
        }

    }, [isMobile]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('/api/categories');
                setCategory(data.categories);
            }
            catch (error) {
                console.log(console.error());
            }
        })();
    }, []);

    return (
        <CategoryContext.Provider value={{ category, isMenuOpen, setIsMenuOpen }}>
            {children}
        </CategoryContext.Provider>
    )
}


const useCategory = () => useContext(CategoryContext);

export { useCategory, CategoryProvider };