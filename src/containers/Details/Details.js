import React, { Fragment } from 'react';
import { Header, Lessons } from 'components';
import { useSelector } from 'react-redux';

export const Details = (props) => {
  const dataLessons = useSelector((state) => state.home.dataLessons);
  const tags = props.match.params.title;

  let currentLessons;
  let headerTitle;

  // eslint-disable-next-line no-unused-vars
  for (const key in dataLessons) {
    currentLessons = dataLessons[tags];
    headerTitle = dataLessons[tags][0].header;
  }


  return (
    <Fragment>
      <Header title={headerTitle} />
      <Lessons lessonsData={currentLessons} />
    </Fragment>
  );
};
