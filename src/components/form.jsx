const Form = ({type}) => {

  return(
    <div className="form-section-form">
      <form>
        {type === 'devis' ? 
          <input type="text" name="society-name" placeholder="Nom de votre société"/>
        : 
        <>
          <p> Une question, une candidature spontanée, une requête ? </p>
          <p> Laissez-nous un message ! </p>
          <p> L'équipe TALE se fera un plaisir de vous aider ! </p>
        </>
        }
        <input type="text" name="name" placeholder="Entrez votre nom"/>
        <input type="email" name="email" placeholder="Entrez votre adresse e-mail"/>
        <textarea name="project-message" placeholder="Parlez nous de votre projet..."></textarea>
        <button type="submit"> Envoyer </button>
      </form>
    </div>
  );
}

export default Form;