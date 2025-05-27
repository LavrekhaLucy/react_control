// import {useEffect, useState} from "react";
// import type {IMovie} from "../../models/IMovies/IMovie.ts";
//
// import {useParams} from "react-router-dom";
// import {getMovie} from "../../services/api.service.ts";
//
//
// export const MovieDetailCard = () => {
//
//     const {id} = useParams();
//     const [movieDetail, setMovieDetail] = useState<IMovie | null>(null);
//
//     useEffect(() => {
//         if (id) {
//             getMovie(Number(id)).then(setMovieDetail).catch(err => console.error(err));}
//         },[id]);
//     console.log(movieDetail);
//         if (!movieDetail) return <p>Loading...</p>;
//
//
//     return (
//         <div>
//             <div style={{
//                 display: 'flex',
//                 gap: '2rem',
//                 padding: '2rem',
//                 border: '2px solid #FFD700',
//                 borderRadius: '1.5rem',
//                 background: '#fefcea',
//                 boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
//             }}>
//                 <img
//                     src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
//                     alt={movieDetail.title}
//                     style={{ width: '400px', borderRadius: '1rem' }}
//                 />
//
//                 <div>
//                     <h1 style={{ fontSize: '2rem', color: '#003399' }}>{movieDetail.title}</h1>
//                     <p><strong>Overview:</strong>{movieDetail.overview}</p>
//                     <p><strong>Popularity:</strong> {movieDetail.popularity}</p>
//                     <p><strong>Video:</strong> {movieDetail.video ? "Yes" : "No"}</p>
//                     <p><strong>Adult:</strong> {movieDetail.adult ? "Yes" : "No"}</p>
//                     <p><strong>Rating:</strong> {movieDetail.vote_average} </p>
//                 </div>
//             </div>
//
//         </div>
//
//     );
// };
//
