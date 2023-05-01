

import { LinkedinIcon, PDFIcon, PhoneIcon } from '../IconSet/IconSet'


export const AboutErika = () => {
    return (
        <>
            <section>
                <img
                    className='hero__background'
                    src="https://res.cloudinary.com/ferjen/image/upload/v1682893769/medicos-jensen/background_d47wrv.jpg"
                    alt="Doctora sosteniendo manos de paciente amablemente y con comprensión."
                />
                <article>
                    <header className='hero__header'>
                        <h1>ERIKA DANIELA JENSEN</h1>
                        <h2>MÉDICA</h2>
                        <div className='hero__social-media'>
                            <LinkedinIcon />
                            <PhoneIcon />
                            <PDFIcon />
                        </div>
                    </header>
                </article>
            </section>
        </>
    )
}
