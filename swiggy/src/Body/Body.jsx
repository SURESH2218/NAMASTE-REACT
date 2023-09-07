import React from "react";
import "./body.css";

const obj = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776",
  },
  {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97",
  },
  {
    albumId: 1,
    id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    url: "https://via.placeholder.com/600/56a8c2",
    thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
  },
  {
    albumId: 1,
    id: 7,
    title: "officia delectus consequatur vero aut veniam explicabo molestias",
    url: "https://via.placeholder.com/600/b0f7cc",
    thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
  },
  {
    albumId: 1,
    id: 8,
    title: "aut porro officiis laborum odit ea laudantium corporis",
    url: "https://via.placeholder.com/600/54176f",
    thumbnailUrl: "https://via.placeholder.com/150/54176f",
  },
  {
    albumId: 1,
    id: 9,
    title: "qui eius qui autem sed",
    url: "https://via.placeholder.com/600/51aa97",
    thumbnailUrl: "https://via.placeholder.com/150/51aa97",
  },
  {
    albumId: 1,
    id: 10,
    title: "beatae et provident et ut vel",
    url: "https://via.placeholder.com/600/810b14",
    thumbnailUrl: "https://via.placeholder.com/150/810b14",
  },
  {
    albumId: 1,
    id: 11,
    title: "nihil at amet non hic quia qui",
    url: "https://via.placeholder.com/600/1ee8a4",
    thumbnailUrl: "https://via.placeholder.com/150/1ee8a4",
  },
  {
    albumId: 1,
    id: 12,
    title:
      "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
    url: "https://via.placeholder.com/600/66b7d2",
    thumbnailUrl: "https://via.placeholder.com/150/66b7d2",
  },
];

// const defaultData = {
//   id: 2,
//   name: "John Doe",
//   username: "johndoe",
//   email: "johndoe@example.com",
//   address: {
//     street: "123 Main St",
//     suite: "Apt. 789",
//     city: "Cityville",
//     zipcode: "12345",
//     geo: {
//       lat: "12.3456",
//       lng: "78.9012",
//     },
//   },
// };

const RestCard = ({ resdata }) => {
  // console.log(resdata);
  return (
    <>
      <div className="restCard">
        <img src={resdata.url} alt="" className="resLogo" />
        <h3>Suresh Foods</h3>
        <h4>Biryani, South India, Asian</h4>
        {/* <h5>{resdata.address.street.join(", ")}</h5> */}
        <h6>{resdata.title}</h6>
      </div>
    </>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="search" />
      </div>
      <div className="resContainer">
        {obj.map((restaurant) => (
          <RestCard key={restaurant.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
