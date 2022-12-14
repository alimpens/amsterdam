import { List } from '@amsterdam/components-react/src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import '@amsterdam/components-css/src/list/list.scss'

export default {
  title: 'React Components/List',
  id: 'list',
  component: List,
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) => <List {...args} />

export const Default = Template.bind({})

Default.args = {
  children: (
    <>
      <li>List item one</li>
      <li>List item two</li>
      <li>List item three</li>
    </>
  ),
}
