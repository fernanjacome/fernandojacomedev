import React from 'react'

const Contact = () => {
    return (
        <section id="contact" >
            <h2>Contacto</h2>
            <form >
                <input type="text" placeholder="Nombre" required />
                <input type="email" placeholder="Correo" required />
                <textarea placeholder="Mensaje" rows={4} required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default Contact