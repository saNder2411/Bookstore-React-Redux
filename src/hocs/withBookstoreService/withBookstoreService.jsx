import React from 'react';
import { BookstoreServiceConsumer } from '../../components/bookstore-service-context/bookstore-service-context';

const withBookstoreService = (mapMethodsToProps) => (Component) => {

  return (props) => {

    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService) => {
            const serviceProps = mapMethodsToProps(bookstoreService);

            return <Component { ...props } { ...serviceProps } />;
          }
        }
      </BookstoreServiceConsumer>
    );
  }
};

export default withBookstoreService;