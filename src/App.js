import React from "react";
import { View, Panel, PanelHeader, Header, Group, Cell } from '@vkontakte/vkui';



class App extends React.Component {
  render() {
    return (
      <>
        <View activePanel="main">
          <Panel id="main">
            <PanelHeader>Radio Flow</PanelHeader>
            <Group header={<Header mode="secondary">Items</Header>}>
              <Cell>Hello</Cell>
              <Cell>World</Cell>

            </Group>
          </Panel>
        </View>
      </>
    );
  }
}

export default App;
