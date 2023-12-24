import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import useScrollAnimation from './animate';

const Form = ({ type }) => {
  const [societyName, setSocietyName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('../backend/form-submit.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'type': type,
          'society-name': societyName,
          'name': name,
          'email': email,
          'project-message': message,
        }),
      });

      if (response.ok) {
        Navigate('/confirmation');
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  useScrollAnimation('.animate');

  return ( 
    <div className="form-section-form animate">
      <form onSubmit={handleSubmit}>
        {type === 'devis' ? 
          <input type="text" name="society-name" placeholder="Nom de votre société" onChange={(e) => setSocietyName(e.target.value)}/>
        : 
        <>
          <p> Une question, une candidature spontanée, une requête ? </p>
          <p> Laissez-nous un message ! </p>
          <p> L'équipe TALE se fera un plaisir de vous aider ! </p>
        </>
        }
        <input type="text" name="name" placeholder="Entrez votre nom" onChange={(e) => setName(e.target.value) }/>
        <input type="email" name="email" placeholder="Entrez votre adresse e-mail" onChange={(e) => setEmail(e.target.value) }/>
        <textarea name="project-message" placeholder="Parlez nous de votre projet..." onChange={(e) => setMessage(e.target.value) }></textarea>
        <button type="submit"> Envoyer </button>
      </form>
    </div>
  );
}

export default Form;
