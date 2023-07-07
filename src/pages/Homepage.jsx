import Pictures from "../components/Pictures";
import data from "../helper/data";

const Homepage = () => {
  console.log(data);
  return (
    <div className="row">
      <h1 className="text-danger text-center">IMAGE GALLERY</h1>
      {data.map((item, i) => {
        const {
          photographer,
          src: { large },
        } = item;
        return (
          <div className="col" key={i}>
            <Pictures name={photographer} img={large} />
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
