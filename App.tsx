import React, {useState, useEffect} from 'react';
import {setupInitialData, personalCategory} from './app/helpers';
import {getData, saveData} from './app/storage/Storage';
import {Loader} from './app/components';
import {TodoCategoryProps} from './app/types';
import RootNaviagtion from './app/navigation/RootNaviagtion';

const INITAL_SETUP_STORAGE_KEY = '@com.tasks.initalSetup';

const App = () => {
  const [initialSetupDone, setInitialSetupDone] = useState<boolean>(false);

  useEffect(() => {
    getData(INITAL_SETUP_STORAGE_KEY).then(async value => {
      if (!value) {
        await setupInitialData();
        await saveData(INITAL_SETUP_STORAGE_KEY, 'true');
        setInitialSetupDone(true);
      } else {
        setInitialSetupDone(true);
      }
    });
  }, []);

  if (!initialSetupDone) {
    return <Loader />;
  }
  const params: {category: TodoCategoryProps} = {
    category: personalCategory,
  };
  return <RootNaviagtion params={params} />;
};

export default App;
