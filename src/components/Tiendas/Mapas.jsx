import React from 'react'; 

function Mapas(id){

    
        let spans = document.getElementById('maps');
    
        switch (id){
            case 1: spans.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.7882344555987!2d-56.153684984762066!3d-34.91176348038082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f810cc25f5adf%3A0xd110d8e67b49ee35!2sFrog%20Maxishop%201!5e0!3m2!1ses-419!2suy!4v1640535213943!5m2!1ses-419!2suy" allowfullscreen="" loading="lazy"></iframe>`; break;
        
            case 2:
                spans.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.973223029184!2d-56.212886085041845!3d-34.907121481121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f7f83c152a7b7%3A0xdcb0ab61c78c7b8b!2sFrog%208!5e0!3m2!1ses-419!2suy!4v1625419246973!5m2!1ses-419!2suy"  allowfullscreen="" loading="lazy"></iframe>`;
                break;
            case 3: spans.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.775907720731!2d-56.18849158518398!3d-34.912072781384744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81c8cfcc83d7%3A0x5c5593626065a8d5!2sFrog%209!5e0!3m2!1ses-419!2suy!4v1640535363338!5m2!1ses-419!2suy" allowfullscreen="" loading="lazy"></iframe>`; break;
    
            case 4: 
                spans.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.992107237552!2d-56.19127198504188!3d-34.90664758109577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81cce4363b73%3A0x7b73d4ef34b3cab8!2sFrog%2013!5e0!3m2!1ses-419!2suy!4v1625419297724!5m2!1ses-419!2suy"   allowfullscreen="" loading="lazy"></iframe>`;
                break;
            case 5:
                spans.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.993446138952!2d-56.18002648504178!3d-34.90661398109399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81b68248a507%3A0x5462a2bff21faf54!2sFrog%2015!5e0!3m2!1ses-419!2suy!4v1625419180616!5m2!1ses-419!2suy"  allowfullscreen="" loading="lazy"></iframe>`;
                break;
            case 6:
                spans.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.0166097520373!2d-56.16518648518432!3d-34.90603268106271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81d4a72b7587%3A0x16143b68ffddd27d!2sFrog%20Maxishop%2023!5e0!3m2!1ses-419!2suy!4v1640535467060!5m2!1ses-419!2suy" allowfullscreen="" loading="lazy"></iframe>`;
                break;
            default: break;
        }
    
    
    return (
    <>
        <span id="maps"></span>
    </>
    )
}

export default Mapas