//UI
const services = document.getElementById('services_index')
const blog = document.getElementById('blog_index')
const comments = document.getElementById('comments_index')
const clientsIndex = document.getElementById('clients_index')
const clientsServices = document.getElementById('clients_servicios') 
const clientsServicesSingle = document.getElementById('clients_servicios_single') 
const blogArticleSingle = document.getElementById('blog_article_single') 

if(services != null){
    var swiper = new Swiper(".services", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            spaceBetween: 0,
            centeredSlides: false,
            slidesPerView: 3,
            navigation: {
                nextEl: ".prev_services",
                prevEl: ".next_services ",
            },
        },
        },
    })
}

if(blog != null){
    var swiper = new Swiper(".blog", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            spaceBetween: 0,
            centeredSlides: false,
            slidesPerView: 4,
            navigation: {
                nextEl: ".prev_blog",
                prevEl: ".next_blog ",
            },
        },
        },
    })
}

if(comments != null){
    var swiper = new Swiper(".comments", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            spaceBetween: 0,
            centeredSlides: false,
            slidesPerView: 3,
            navigation: {
                nextEl: ".prev_comments",
                prevEl: ".next_comments ",
            },
        },
        },
    })
}

if(clientsIndex != null){
    var swiper = new Swiper(".clients_sw", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            loop: false,
            centeredSlides: false,
            slidesPerView: 5,
            spaceBetween: 50,
        },
        },
    })
}

if(clientsServices != null){
    var swiper = new Swiper(".clients_sw_services", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            loop: false,
            centeredSlides: false,
            slidesPerView: 5,
            spaceBetween: 50,
        },
        },
    })
}

if(clientsServicesSingle != null){
    var swiper = new Swiper(".clients_sw_page", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            loop: false,
            centeredSlides: false,
            slidesPerView: 5,
            spaceBetween: 50,
        },
        },
    })
}

if(blogArticleSingle != null){
    var swiper = new Swiper(".blog_article", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            spaceBetween: 0,
            centeredSlides: false,
            slidesPerView: 4,
            navigation: {
                nextEl: ".prev_blog",
                prevEl: ".next_blog ",
            },
        },
        },
    })
}


var ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var toggle = false
var menu = document.getElementById("menu");

if(ancho >= 1024){
    menu.style.display = "flex";
}

function toggleMenu() {
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}


//Funciones NO UI

/* Formulario de contacto */

const form = document.getElementById("form_contact")

if(form != null){
    const required_message = "Este campo es requerido"
    const invalidmail_message = "Ingresa un email válido"
    const invalidphone_message = "Ingresa un número de telefono válido"

    const sendForm = document.getElementById('send')
    const yesCheckbox = document.getElementById('yesCheckbox');
    const noCheckbox = document.getElementById('noCheckbox');
    const textContainer = `<div">
    <h4>Te informamos tus derechos como Titular de Datos Personales y los deberes del Responsable del Tratamiento de tus Datos</h4>
    <p>
        <b>a)</b> Tienes derecho a conocer, actualizar y rectificar tus datos personales, así como a solicitar prueba de la autorización otorgada al responsable del Tratamiento.
    </p>
    <p>
        <b>b)</b> El Responsable del Tratamiento deberá informarte previa recolección de tus Datos el Tratamiento que se le dará y la finalidad del mismo. Recuerda que las finalidades te las informamos en el escrito de autorización que encuentras <a href="../wp-content/themes/pracodidacol/assets/pdf/POLITICA_INSTITUCIONAL_DE_TRATAMIENTO_Y_USO_DE_DATOS_E_INFORMACION_PERSONAL_2022.pdf" target="_blank">Aquí.</a>
    </p>
    <p>
        <b>c)</b> Tienes derecho a revocar la autorización y a solicitar la supresión de tus Datos.
        </p>
    <p>
        <b>d)</b> Ante la Superintendencia de Industria y Comercio podrás presentar quejas por infracciones a la Ley 1581 de 2012 en las que incurra el Responsable.
    </p>
    <p>En caso de que desees revocar tu autorización o tengas alguna consulta o reclamo en materia de datos personales contáctanos al correo electrónico: <a href="mailto:didacol@didacol.com" target="_blank">didacol@didacol.com</a>
    </p>
    <p>Puedes consultar nuestra política de tratamiento aquí: <a href="https://www.pracodidacol.com/" target="_blank">www.pracodidacol.com</a>
    </p>
    </div>`
    
    var validate = false

    function toggleCheckbox(checkbox1, checkbox2) {
        if (checkbox1.checked) {
            checkbox2.checked = false;
        }
    }

    yesCheckbox.addEventListener('click', function() {
        toggleCheckbox(yesCheckbox, noCheckbox)
        validate = true
        sendForm.disabled = false
        Swal.fire({
            customClass: {
                container: 'modal_terms',
                htmlContainer: 'container'
            },
            imageUrl: 'https://res.cloudinary.com/dizejzlnv/image/upload/v1688509872/MATRASE/Group_714_b6ygrh.svg',
            imageWidth: 'auto',
            imageHeight: '2.5rem',
            imageAlt: 'Logo',
            html: textContainer,
            confirmButtonText: 'Acepto terminos y condiciones',
        })
    });
    
    noCheckbox.addEventListener('click', function() {
        toggleCheckbox(noCheckbox, yesCheckbox);
        validate = false
        sendForm.disabled = true
        Swal.fire({
            customClass: {
                container: 'modal_terms',
            },
            title: '<strong>Oops...</strong>',
            icon: 'error',
            html: 'Lo sentimos, no podemos enviar el formulario sin aceptar terminos',
            focusConfirm: false,
            confirmButtonText:
            'Ok, entiendo!',
        })
    });

    $("#form_contact").validate({
        rules: {
            names: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            phone: {
                required: true,
                number: true
            },
        },
        messages: {
            names: {
                required: required_message,
            },
            email: {
                required: required_message,
                email: invalidmail_message
            },
            phone: {
                number: invalidphone_message,
                required: required_message
            },
        },
        
        submitHandler: function(form) {
            sendForm.disabled = true
            var formData = new FormData(document.getElementById("form_contact"));
            if(validate === false ) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error...',
                    text: 'Debe aceptar los terminos!',
                });
            } else {
                $.ajax({
                    url: ajaxurl,
                    type: 'POST',
                    data: formData,
                    dataType: "html",
                    cache: false,
                    contentType: false,
                    processData: false
                }).done(function(response) {
                    sendForm.disabled = false
                    if (response == 1) {
                        Swal.fire(
                            'Mensaje enviado',
                            'No contactaremos contigo prontamente.',
                            'success'
                        )
                    } else {
                        Swal.fire(
                            'Oops...',
                            'Lo sentimos tenemos problemas para enviar la información.',
                            'error'
                        )
                    }
                }).fail(function(response) {
                    sendForm.disabled = false
                    Swal.fire(
                        'Oops...',
                        'Lo sentimos tenemos problemas para enviar la información.',
                        'error'
                    )
                })
            }
        },
    })
    
}

/* Informacion de ubicacion*/
const map = document.getElementById("map")
if(map != null){
    const iframe = document.getElementById('iframe_map')
    const contact = document.getElementById('number_city')
    const address = document.getElementById('address_city')
    const email = document.getElementById('email_city')
    const infoCities = [
        {
            city: 'Bogotá',
            iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.5312811349283!2d-74.09276469568843!3d4.682723929618138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b16c5ebb58f%3A0xc718848a928c524f!2sAv.%2070%20%2370-99%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1688578520510!5m2!1ses!2sco',
            number: '311 111 11 11',
            email: 'ciudad1@gmail.com',
            address: 'Cra 70 #99A - 11'
        },
        {
            city: 'Buenaventura',
            iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.9510267511796!2d-77.02081903503073!3d3.881860560551671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3724a893212a47%3A0x95adc02c334f8c70!2sLa%2014!5e0!3m2!1ses-419!2sco!4v1692237727957!5m2!1ses-419!2sco',
            number: '322 222 22 22',
            email: 'ciudad2@gmail.com',
            address: 'Cra 70 #99A - 22'
        },
        {
            city: 'Cartagena',
            iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.5312811349283!2d-74.09276469568843!3d4.682723929618138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b16c5ebb58f%3A0xc718848a928c524f!2sAv.%2070%20%2370-99%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1688578520510!5m2!1ses!2sco',
            number: '333 333 33 33',
            email: 'ciudad3@gmail.com',
            address: 'Cra 70 #99A - 33'
        },
        {
            city: 'Santamarta',
            iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.5312811349283!2d-74.09276469568843!3d4.682723929618138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b16c5ebb58f%3A0xc718848a928c524f!2sAv.%2070%20%2370-99%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1688578520510!5m2!1ses!2sco',
            number: '344 444 44 44',
            email: 'ciudad4@gmail.com',
            address: 'Cra 70 #99A - 44'
        }
    ]
    const buttons = document.querySelectorAll(".my_buttons");

    function listenClick(event) {
        buttons.forEach(function(button) {
            button.classList.remove("active");
        });
        
        event.target.classList.add("active");
    }
    
    buttons.forEach(function(button) {
        button.addEventListener("click", listenClick);
    });

    document.addEventListener("DOMContentLoaded", function() {
        changeCity(0)
        buttons[0].classList.add('active')
    });

    function changeCity(city) {
        iframe.src = infoCities[city].iframe
        contact.innerHTML = infoCities[city].number
        address.innerHTML = infoCities[city].address
        email.innerHTML = infoCities[city].email 
    }
}

