//
//
// // const renderStars = (rating: number) => {
// //     const fullStars = Math.round(rating / 2);
// //     return Array.from({ length: 5 }, (_, i) =>
// //         i < fullStars ? <StarRatings key={i} className="text-yellow-400" /> : <StarRatings key={i} className="text-gray-300" />
// //     );
// // };
//
//
// import {StarRatings}from './react-star-ratings';
//
// class Foo extends Component {
//     changeRating( newRating, name ) {
//         this.setState({
//             rating: newRating
//         });
//     }
//
//     render() {
//         // rating = 2;
//         return (
//             <StarRatings
//                 rating={this.state.rating}
//                 starRatedColor="blue"
//                 changeRating={this.changeRating}
//                 numberOfStars={6}
//                 name='rating'
//             />
//         );
//     }
// }
//
//
// class Bar extends Component {
//     render() {
//         // aggregateRating = 2.35;
//         return (
//             <StarRatings
//                 rating={2.403}
//                 starDimension="40px"
//                 starSpacing="15px"
//             />
//         );
//     }
// }