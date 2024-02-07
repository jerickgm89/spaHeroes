import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {

  const { id } = useParams();
  
  const hero = useMemo(() => getHeroById(id), [id]);

  const onNavigateBack = () => {
    window.history.length <= 2 ? window.location.href = '/' : window.history.back();
  }

  if (!hero) {
    return <Navigate to="/marvel"/>
  }

  const imgHero = `../assets/heroes/${ hero.id }.jpg`;
  
  return (
    <div className="row mt-5">
      <div className="col-4" >
        <img 
          src={ imgHero }
          alt={ hero.superhero }
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div> 
      <div className="col-8">
        <h3>{ hero.superhero }</h3> 
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> { hero.alter_ego }</li>
          <li className="list-group-item"><b>Publisher:</b> { hero.publisher }</li>
          <li className="list-group-item"><b>First appearance:</b> { hero.first_appearance }</li>
        </ul>
        <h5>Characters</h5>
        <p>{ hero.characters }</p>
        <button 
          className="btn btn-outline-info"
          onClick={ onNavigateBack }
        >
          Return
        </button>
      </div>
    </div>
    
  )
}
