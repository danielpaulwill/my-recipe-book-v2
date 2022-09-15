
function Review({ review }) {


  // create_table "reviews", force: :cascade do |t|
  //   t.integer "user_id"
  //   t.integer "recipe_id"
  //   t.string "review_text"
  //   t.datetime "created_at", precision: 6, null: false
  //   t.datetime "updated_at", precision: 6, null: false
  // end



  return (
    <div className="recipeCard">
      <h3>Recipe: </h3>
      {/* <h3>{review.title}</h3>
      <img className="recipeImage" src={review.photo} />
      <p><b>Category:</b> {review.category}</p>
      <p><b>Ingredients List:</b> {review.ingredients}</p>
      <p><b>Instructions:</b> {review.instructions}</p> */}
    </div>
  );
}

export default Review;
