/*!
* Start Bootstrap - Scrolling Nav v5.0.6 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


jQuery(document).on('mousedown','#btnQuieroParticipar',function(){
        dataLayer.push({'event':'custom_event',
                        'event_name':'click',
                        'event_action':'click_button',
                        'event_detail': jQuery(this).text().toLowerCase().trim()
        })
})

/*
jQuery(document).on('mousedown','#normasButton',function(){

        dataLayer.push({'event':'custom_event',
                        'event_name':'click',
                        'event_action':'click_button',
                        'event_detail': 'descarga normas'
        })
})
*/
jQuery(document).on('mousedown','#btnHome',function(){

        dataLayer.push({'event':'custom_event',
                        'event_name':'click',
                        'event_action':'click_button',
                        'event_detail': 'volver inicio'
        })
})

jQuery(document).on('mousedown','.nav-item',function(){
	if(typeof jQuery(this).text !== 'undefined'){
           dataLayer.push({'event':'custom_event',
                        'event_name':'click',
                        'event_action':'click_link_menu',
                        'event_detail': jQuery(this).text().toLowerCase()
           })
	}
})

