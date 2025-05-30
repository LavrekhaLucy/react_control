// import {useEffect, useState} from "react";
// import {useParams} from "react-router-dom";
// import {getImage} from "../../services/api.service.ts";
// import {IMAGE_BASE_URL} from "../user-info/UserInfo.ts";
// import type {IPosterResponseModel} from "../../models/IImages/IPosterResponseModel.ts";
// import type {IPoster} from "../../models/IImages/IPoster.ts";
//
// const PosterPreview = () => {
//     const { id } = useParams();
//     const [posters, setPosters] = useState<IPoster[]>([]);
//
//     useEffect(() => {
//         if (id) {
//             console.log("📦 id з useParams:", id);
//             getImage(Number(id))
//                 .then((res: IPosterResponseModel) => {
//                     console.log("🖼 Дані з getImage:", res);
//                     setPosters(res.posters);
//                 })
//                 .catch((err) => console.error(err));
//         }
//     }, [id]);
//
//
//
//         return (
//             <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
//                 {posters.map((poster, index) => (
//                     <img
//                         key={index}
//                         src={`${IMAGE_BASE_URL}/w500${poster.file_path}`}
//                         alt={`Постер ${index + 1}`}
//                         style={{ width: "200px", borderRadius: "0.75rem", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}
//                     />
//                 ))}
//             </div>
//
//         );
//         }
// ;
//
// export default PosterPreview;