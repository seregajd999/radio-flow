import React from "react";
import { View, Panel, PanelHeader, Header, Group, Cell } from '@vkontakte/vkui';
import Carousel from './Components/Carousel'



class App extends React.Component {
  render() {
    return (
      <>
        <View activePanel="main">
          <Panel id="main">
            <PanelHeader>Radio Flow</PanelHeader>
            <Group header={<Header mode="secondary">Items</Header>}>
              <Carousel />
            </Group>
          </Panel>
        </View>
      </>
    );
  }
}

export default App;
