import React,{useRef,useEffect} from 'react'



const Card = ({ img }) => <img src={img} alt="CoverImg" />;

const click = () => {
  alert('Video unplayable, feature under development')
}


const cards = ({ title, movie = [] }) => {
  const rowRef = useRef();
  const handleWheel = (e) => {
    e.preventDefault();
    rowRef.current.scrollLeft += e.deltaY;
  }
  useEffect( () => {
    rowRef.current.addEventListener("wheel", handleWheel);  
  },[])

    return (
      <div className="row">
        <h2>{title}</h2>
        <div className="cardcontainer" ref={rowRef}>
          
          {movie.map(
            (item, i) =>
              item.poster_path && ( 
                <div className="card" key={i} >
                 
                  <Card
                    img={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  />
                   <div className="overlay">
                   <i className="ri-play-circle-line" onClick={click}></i>
                   <h4>{item.original_name || item.title}</h4>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    );
  };
export default cards