
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col">
        <div className="card">

            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={heroImageUrl} alt={superhero} className="card-img"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {
                            (alter_ego !== characters)
                            && <p className="card-text">{characters}</p>
                        }
                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
