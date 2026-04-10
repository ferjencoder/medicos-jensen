

import { Link } from 'react-router-dom'


export const LinkedinIcon = ( { children } ) => {
    return (
        <Link
            to='https://www.linkedin.com/in/erika-daniela-jensen'
            target='_blank'
            rel='noopener noreferrer'
            title='Encontrame en Linkedin'
        >
            <button className='linkedin-icon'>
                <img
                    className='icon'
                    src="https://res.cloudinary.com/ferjen/image/upload/v1682900808/medicos-jensen/ej-linkedin_pdy0pu.svg"
                    alt="Icono de contacto a través de Linkedin."
                />
                {children}
            </button>
        </Link>
    )
}

export const PhoneIcon = ( { children } ) => {
    return (
        <Link
            to='https://wa.me/005492995778891'
            target='_blank'
            rel='noopener noreferrer'
            title='Encontrame en Whatsapp'
        >
            <button className='pone-icon'>
                <img
                    className='icon'
                    src="https://res.cloudinary.com/ferjen/image/upload/v1682900807/medicos-jensen/ej-phone_xx7fwn.svg"
                    alt="Icono de contacto a través de teléfono."
                />
                {children}
            </button>
        </Link>
    )
}

export const PDFIcon = ( { children } ) => {
    return (
        <Link
            to='https://res.cloudinary.com/ferjen/image/upload/q_auto/f_auto/v1775861141/medicos-jensen/CV-EDJFRAGALA_w4gyke.pdf'
            target='_blank'
            rel='noopener noreferrer'
            title='Chequea mi CV'
        >
            <button className='cv-icon'>
                <img
                    className='icon'
                    src="https://res.cloudinary.com/ferjen/image/upload/v1682983653/medicos-jensen/ej-cv_z32dvf.svg"
                    alt="Descargar CV en formato PDF."
                />
                {children}
            </button>
        </Link>
    )
}
