import React from "react";
import { Route, Switch } from "react-router-dom";
import DietDaysPage from "../dietDay/dietDaysPage";
import DietMealsPage from "../DietMeal/dietMealsPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/dietdays" component={DietDaysPage} />
      <Route exact path="/dietmeals" component={DietMealsPage} />
    </Switch>
  );
};

export default Routes;
