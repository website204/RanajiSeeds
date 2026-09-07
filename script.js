/* ==================================================
   MOBILE NAVIGATION
================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


if (menuToggle && navMenu) {


    menuToggle.addEventListener(
        "click",
        function () {

            navMenu.classList.toggle("active");

        }
    );


    const navLinks =
        navMenu.querySelectorAll("a");


    navLinks.forEach(function (link) {


        link.addEventListener(
            "click",
            function () {

                navMenu.classList.remove("active");

            }
        );


    });

}



/* ==================================================
   GALLERY IMAGE VIEWER
================================================== */

const galleryImages =
    document.querySelectorAll(
        ".gallery-item img"
    );


const imageViewer =
    document.getElementById(
        "imageViewer"
    );


const fullScreenImage =
    document.getElementById(
        "fullScreenImage"
    );


const closeViewer =
    document.getElementById(
        "closeViewer"
    );



/* OPEN IMAGE */

function openImage(
    imagePath,
    imageAlt
) {


    if (
        !imageViewer ||
        !fullScreenImage
    ) {

        return;

    }


    fullScreenImage.src =
        imagePath;


    fullScreenImage.alt =
        imageAlt ||
        "Gallery Image";


    imageViewer.classList.add(
        "show"
    );


    document.body.classList.add(
        "no-scroll"
    );

}



/* GALLERY CLICK */

galleryImages.forEach(
    function (image) {


        image.addEventListener(
            "click",
            function () {


                openImage(
                    this.src,
                    this.alt
                );


            }
        );


    }
);



/* CLOSE IMAGE */

function closeImageViewer() {


    if (!imageViewer) {

        return;

    }


    imageViewer.classList.remove(
        "show"
    );


    document.body.classList.remove(
        "no-scroll"
    );


    setTimeout(
        function () {


            if (fullScreenImage) {

                fullScreenImage.src = "";

            }


        },
        300
    );

}



/* CLOSE BUTTON */

if (closeViewer) {


    closeViewer.addEventListener(
        "click",
        closeImageViewer
    );

}



/* CLICK OUTSIDE IMAGE */

if (imageViewer) {


    imageViewer.addEventListener(
        "click",
        function (event) {


            if (
                event.target ===
                imageViewer
            ) {

                closeImageViewer();

            }


        }
    );

}



/* ESCAPE KEY */

document.addEventListener(
    "keydown",
    function (event) {


        if (
            event.key === "Escape"
        ) {

            closeImageViewer();


            if (navMenu) {

                navMenu.classList.remove(
                    "active"
                );

            }

        }


    }
);



/* ==================================================
   PREVENT IMAGE DRAGGING
================================================== */

document.querySelectorAll("img")
    .forEach(
        function (image) {


            image.addEventListener(
                "dragstart",
                function (event) {

                    event.preventDefault();

                }
            );


        }
    );
