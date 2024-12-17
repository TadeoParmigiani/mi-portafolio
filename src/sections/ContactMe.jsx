import inbox from "@assets/inbox.svg";

function ContactMe() {
  const sendEmail = (e) =>{
    e.preventDefault();
    alert(e.target);
  }
  return (
  <section id="Contacto" className='w-full mt-[80px] px-6'>
    <div className="w-full my-4 flex justify-start items-center gap-4">
      <img src={inbox} alt="logo" className='size-8'/>
      <h1 className="text-3xl text-white font-bold">Contacto</h1>
    </div>
    <div className="py-10 flex justify-center">
        <form onSubmit={sendEmail} className="flex flex-col gap-6 w-full sm:w-[640px] sm:px-[40px]">
            <input type="email" name="correo" placeholder="Correo" className="p-2 rounded-md ring-1 focus:outline-none"/>
            <input type="text" name="asunto" placeholder="Asunto" className="p-2 rounded-md focus:outline-none"/>
            <textarea rows="5" name="mensaje" placeholder="Mensaje" className="p-2 rounded-md focus:outline-none"></textarea>
            <input type="submit" value="Enviar" className="cursor-pointer text-white font-bold bg-purple-600 p-2 rounded-md hover:bg-purple-800 transition-background duration-300"/>
        </form>        
    </div>
  </section>
  )
}

export default ContactMe