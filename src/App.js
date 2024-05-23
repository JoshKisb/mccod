import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'
import { Button } from '@dhis2/ui'

interface Query {
  me: {
    resource: string;
  };
}

const query: Query = {
  me: {
    resource: 'me',
  },
};

interface MyAppProps {}

const MyApp: React.FC<MyAppProps> = () => (
  <div className={classes.container}>
    <DataQuery query={query}>
      {({ error, loading, data }) => {
        if (error) return <span>ERROR</span>;
        if (loading) return <span>...</span>;
        return (
          <>
            <Button>DHIS 2 UI</Button>
          </>
        );
      }}
    </DataQuery>
  </div>
);

export default MyApp;
