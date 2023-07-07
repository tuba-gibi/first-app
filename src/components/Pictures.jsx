const Pictures = ({ name, img}) => {
    console.log(name)
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
     
      </div>
    </div>
  );
};
export default Pictures;
