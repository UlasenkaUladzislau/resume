import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Educations } from './components/Education/Educations';
import { Skills } from './components/Skills/Skills';
import { Jobs } from './components/Jobs/Jobs';
import { General } from './components/General/General';
import { Grid } from 'semantic-ui-react';
import { Summary } from './components/Summary/Summary';
import { Languages } from './components/Languages/Languages';
import { BaseInfo } from './components/BaseInfo/BaseInfo';
import { ProfileLinks } from './components/Social/Social';


function App() {
  return (
    <Grid className='parent-grid' celled='internally'>
      <Grid.Row>
        <Grid.Column width={10}>
          <Summary />
          <Jobs />
          <Educations />
        </Grid.Column>
        <Grid.Column width={6} className="centered-column">
          <General />
          <ProfileLinks />
          <BaseInfo />
          <Skills />
          <Languages />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
    </Grid>
  );
}

export default App;
