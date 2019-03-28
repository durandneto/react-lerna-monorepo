import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';

import VHTaskCard from '.'

const TasksMock = [
  {
    title: 'Task 01',
    deliverable: '90 sec video',
    type: 'Text',
    done: true,
  },
  {
    title: 'Task 02',
    deliverable: '60 sec video',
    type: 'video',
    done: true,
  },
  {
    title: 'Task 03',
    deliverable: '60~80 sec video',
    type: 'Audio',
    done: false,
  },
  {
    title: 'Task 04',
    deliverable: '60~80 sec video',
    type: 'Text',
    done: true,
  },
  {
    title: 'Task 05',
    deliverable: 'Task 05',
    type: 'Text',
    done: false,
  },
]
storiesOf('Molecules/Cards/Task Card', module)
.add('VHTaskCard Default',
  withInfo(`
    import VHTaskCard from 'vh-task-card'
  `)(() =>
    <VHTaskCard
      title={TasksMock[0].title}
      type={TasksMock[0].type}
      deliverable={TasksMock[0].deliverable}
      done={TasksMock[0].done} onClick={() => {
      if ( !TasksMock[0].done ){
        action()
      }
    }} />
))
.add('VHTaskCard done',
  withInfo(`
    import VHTaskCard from 'vh-task-card'
  `)(() =>
  <VHTaskCard done onClick={action()}/>
))
.add('VHTaskCard all ',
  withInfo(`
    import VHTaskCard from 'vh-task-card'
  `)(() =>
  <div style={{display: 'flex', justifyContent: 'space-between'}}>
    {
      TasksMock.map((task, indexTask) => {
        return (
          <VHTaskCard
          key={`TasksMock.map${indexTask}`}
            title={task.title}
            type={task.type}
            deliverable={task.deliverable}
            done={task.done}
            selected={indexTask === 2}
            onClick={() => {
              if ( !task.done){
                console.log(task)
                action()
              }
            }}
          />
        )
      })
    }
  </div>
))

