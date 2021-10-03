function onscrollanims() {

    const tab1 = document.querySelector(".tab1");
    const nav = document.querySelector(".navbar");
    const links = document.querySelectorAll("nav ul li a")

    const sectionOneOptions = {
        rootMargin: "-100px 0px 0px 0px"
    };

    const sectionOneObserver = new IntersectionObserver(function (
        entries,
        sectionOneObserver
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                nav.classList.add("navchange");

            } else {
                nav.classList.remove("navchange");

            }
        });
    },
        sectionOneOptions);

    sectionOneObserver.observe(tab1);

}

onscrollanims();




