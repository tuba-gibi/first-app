const Pictures = ({ name, img}) => {
    console.log(name)
  return (
    <div className="card m-4 p-3 rounded-4" style={{ width: "18rem" ,  height: "30rem" }}>
      <div className="img-container h-100">
        <img src={img} className="card-img-top" alt="image" />
      </div>
      <div className="card-body">
        <h5 className="text-success card-title">{name}</h5>
      </div>
    </div>
  );
};
export default Pictures;
