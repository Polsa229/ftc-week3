
export const scrollToSection = (navigate, href = null, id = null) => {
    if (href && href.startsWith("/")) {
        navigate(href);

        setTimeout(() => {
            if (id) {
                const element = document.getElementById(id);
                if (element) {
                    const offsetTop = element.offsetTop - 80;
                    window.scrollTo({ top: offsetTop, behavior: "smooth" });
                } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        }, 100);
    } else {
        if (id) {
            const element = document.getElementById(id);
            if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({ top: offsetTop, behavior: "smooth" });
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }
};
