import React from 'react';
import useMeals from '../../../../../hooks/useMeals';
import ItemCard from '../ItemCard/ItemCard';

const Lunch = () => {
  const [meals] = useMeals();

  const lunchMeals = meals.filter((meal) => meal.category === 'lunch');

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {lunchMeals.map((meal) => (
        <ItemCard key={meal.id} meal={meal}> </ItemCard>
      ))}
    </div>
  );
};

export default Lunch;
