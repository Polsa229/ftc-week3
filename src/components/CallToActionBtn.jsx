import { useNavigate } from "react-router-dom";
import { scrollToSection } from "../functions/scrollingFunctions";
import { motion } from 'framer-motion';

const CallToActionBtn = () => {
    const navigate = useNavigate();
    return (

        <div className="gap-[24px] flex flex-col md:flex-row  md:justify-center">
            <motion.button
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                }}
                whileTap={{
                    scale: 0.95,
                    transition: { type: "spring", damping: 10, stiffness: 400 }
                }}
                className="bg-primary w-full md:max-w-[187px] text-white hover:bg-secondary-500 hover:text-primary px-4 py-2 rounded-full transition"
            >
                Get a Free Demo
            </motion.button>
            <motion.button


                className="bg-secondary-500 w-full md:max-w-[187px] text-white px-4 py-2 rounded-full hover:bg-white hover:text-secondary-500 transition"
                onClick={() => scrollToSection(navigate, "/", "pricing")}
            >
                See Pricing
            </motion.button>
        </div >
    );
};

export default CallToActionBtn;