import React from 'react';
import useMeals from '../../../../../hooks/useMeals';
import ItemCard from '../ItemCard/ItemCard';

const Breakfast = () => {
  const [meals] = useMeals();
  const breakfastMeals = meals.filter((meal) => meal.category === 'breakfast');

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {breakfastMeals.map((meal) => (
        <ItemCard key={meal.id} meal={meal}>
          {' '}
        </ItemCard>
      ))}
    </div>
  );
};

export default Breakfast;
