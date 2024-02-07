import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm";

import { HeroCard } from "../components";
import { getHeroByName } from "../helpers";

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search);

  const heroes = getHeroByName(q)

  const showSearch = (q.length === 0)
  const showError = (q.length > 0) && heroes.length === 0

  const { searchText, onInputChange } = useForm({
    searchText: ''
  })

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if (searchText.trim().length <= 2) return

    navigate(`?q=${ searchText }`)    
  }


  return (
      <>
        <h1>Search</h1>
        <hr />
        <div className="row">
          <div className="col-5">
            <h4>Searching</h4>
            <hr />

            <form onSubmit={ onSearchSubmit }>
              <input 
                type="text"
                placeholder="Search your hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange }
              />

              <button 
                type="submit"
                className="btn m-1 btn-block btn-outline-primary col-12"
              >
                Search...
              </button>
            </form>
          </div>

          
          <div className="col-7">
            <h4>Results</h4>
            <hr />

            {/* {
              (q === '') ? <div className="alert alert-primary"> Search a hero</div> 
              : ( heroes.length === 0 ) && <div className="alert alert-danger"> No Found <b> {q}</b></div>
            }             */}

            <div className="alert alert-primary animate__animated animate__faceIn" style={{display: showSearch ? '': 'none'}}> 
            Search a hero
            </div>

            <div className="alert alert-danger animate__animated animate__faceIn" style={{display: showError ? '': 'none'}}>
              No Found Hero with <b>{q}</b>
            </div>

            {
              heroes.map(hero => (
                <HeroCard 
                  key={ hero.id }
                  { ...hero }
                />
              ))
            }

          </div>
        </div>

      </>
  )
}
