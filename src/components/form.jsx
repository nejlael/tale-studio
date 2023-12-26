import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import useScrollAnimation from './animate';

const Form = ({ type, formName }) => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const myForm = e.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
    .then((res) => {
      if(res.status === 200){
        navigate('/confirmation');
      } 
    })
    .catch((error) => 
      console.log(error)
    ); 

  }

  useScrollAnimation('.animate');

  return ( 
    <div className="form-section-form animate">
      <form name={formName} onSubmit={handleSubmit}>
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
        <input type="email" name="email" placeholder="Entrez votre adresse e-mail" />
        <textarea name="project-message" placeholder="Parlez nous de votre projet..."></textarea>
        <input type="hidden" name="form-name" value={formName} />
        <button type="submit"> Envoyer </button>
      </form>
    </div>
  );
}

export default Form;
