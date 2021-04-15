import React from 'react';
import {setupInitialData, allCategory} from './app/helpers';
import {getData, saveData} from './app/storage/Storage';
import {Loader} from './app/components';
import {TodoCategoryProps} from './app/types';
import RootNaviagtion from './app/navigation/RootNaviagtion';

const INITAL_SETUP_STORAGE_KEY = '@com.tasks.initalSetup';

export interface AppProps {}
class App extends React.Component<AppProps, any> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      initialSetupDone: false,
      defaultCategory: allCategory,
    };
    getData(INITAL_SETUP_STORAGE_KEY).then(value => {
      console.log(value);
      if (!value) {
        setupInitialData();
        saveData(INITAL_SETUP_STORAGE_KEY, 'true').then(() => {
          this.setState({
            initialSetupDone: true,
          });
        });
      } else {
        this.setState({
          initialSetupDone: true,
        });
      }
    });
  }

  public render() {
    if (!this.state.initialSetupDone) {
      return <Loader />;
    }
    const params: {category: TodoCategoryProps} = {
      category: this.state.defaultCategory,
    };
    return <RootNaviagtion params={params} />;
  }
}
export default App;
