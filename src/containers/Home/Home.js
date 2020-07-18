import React, { Fragment } from 'react';
import { Header, Filters } from 'components';

export const Home = () => {
  return (
    <Fragment>
      <Header title = 'Приклучи се на 1350 ентузијасти и учи дигитални вештини. Бесплатно.'/>
      <Filters />
    </Fragment>
  );
};
