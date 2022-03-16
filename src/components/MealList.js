const MealList = (props) => {
  const showHandler = (id) => {
    props.onShow(id);
  };
  return (
  <div className="card-meal">
      {props.data.map((meal) => (
    <div >
        <div key={meal.idMeal}>
          <img
          className="image"
            style={{ height: "150px",border:"6px solid white" }}
            src={meal.strMealThumb}
            alt={meal.strMeal}
            onClick={() => {
              showHandler(meal.idMeal);
            }}
          />
          <div className="card-body meal-info" style={{ color: "white" }}>
            <p style={{fontSize:"15px"}}>{meal.strMeal}</p>
          </div>
        </div>
    </div>
      ))}
    </div>
  );
};

export default MealList;
