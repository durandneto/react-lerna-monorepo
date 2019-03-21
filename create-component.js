const readline = require('readline')
const fs = require('fs')
const packagesFolder = './packages/'
const exec = require('child_process').exec;

function Question(){
  this.questions = []
  this.indexQuestion = 0
  this.currentAnswer = ''
  this.isBootstrapping = false

  const add = arrayOfQuestion => {
    this.questions = arrayOfQuestion
  }

  const camelCase = (s) => {
    const rx=  /\-([a-z])/g;
    if( s === s.toUpperCase()){
      s = s.toLowerCase();
    }
    return s.replace(rx, function(a, b){
        return b.toUpperCase();
    });
}

  const validateComponent = () => {
    this.isBootstrapping = true
    const dir  = packagesFolder + this.questions[0].answer
    const dirSrc  = dir + "/src"
    const partialName = camelCase(this.questions[0].answer)
    const componentName = partialName.replace("vh","VH")
    const StorybookName = this.questions[1].mapStorybookLabel[this.questions[1].answer - 1]

    if (fs.existsSync(dir)) {
      console.log('Component already exists!, try another component name.')
      // ask()
      exit()
    } else {
      console.log("the component's name was validated")
      fs.mkdirSync(dir)
      fs.mkdirSync(dirSrc)
      fs.writeFileSync(dir + "/.gitignore", 'dist');
      fs.writeFileSync(dir + "/README.md", `## VH ${this.questions[0].answer} Component`);
      fs.writeFileSync(dir + "/package.json", `{
  "name": "${this.questions[0].answer}",
  "version": "0.0.1",
  "description": "## VH ${this.questions[0].answer} Component",
  "main": "dist/index.js",
  "module": "src/index.js",
  "author": "Durand Neto",
  "license": "MIT",
  "dependencies": {},
  "peerDependencies": {
    "prop-types": "^15.7.2",
    "react": "^16.8.4",
    "@material-ui/core": "^3.9.2",
    "styled-components": "^4.1.3"
  }
}
`);
      fs.writeFileSync(dirSrc + "/index.jsx", `import React from 'react'
import { Grid } from '@material-ui/core'
import VHStyledButton from './index.styles'

const ${componentName} = props => (
  <Grid container alignItems="center">
    <Grid item xs={2}>
      Simple content
    </Grid>
    <Grid item xs={10}>
      <VHStyledButton variant="contained" color="primary" onClick={props.onClick}>
        Apply
      </VHStyledButton>
    </Grid>
</Grid>
)

export default ${componentName}
`);
      fs.writeFileSync(dirSrc + "/index.styles.js", `import styled from 'styled-components'
import { Button } from '@material-ui/core'

export default styled(Button)\`\`
`);
      fs.writeFileSync(dirSrc + "/index.spec.js", `import React from 'react'
import { mount } from 'enzyme'

import ${componentName} from '.'

describe('${componentName} Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<${componentName} />))
    const ${componentName}Spec = wrapper.find('${componentName}')
    expect(${componentName}Spec.length).toBe(1)
  })
})
`);
      fs.writeFileSync(dirSrc + "/index.story.js", `import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';

import ${componentName} from '.'

storiesOf('${StorybookName}/${componentName.split('VH')[1]}', module)
.add('${componentName} Default',
  withInfo(\`
    import ${componentName} from '${this.questions[0].answer}'
  \`)(() =>
  <${componentName} onClick={action()}/>
))

`);
      runComponentBootstrap()
    }
  }

  const exit = () => {
    console.log("Process ended.")
    process.exit()
  }

  const runComponentBootstrap = () => {
    console.log("Installing new Component.")
    const child = exec('npm run bootstrap');
    child.stderr.on('data', function(data) {
        console.log('[log]: ' + data);
        //Here is where the error output goes
    });
    child.on('close', function(code) {
        console.log('closing code: ' + code);
        exit()
    });
  }

  const ask = () => {
    if (!this.isBootstrapping) {
      console.log(this.questions[this.indexQuestion].question)
      if ( this.questions[this.indexQuestion].possibleAnswers ) {
        console.log(this.questions[this.indexQuestion].possibleAnswers)
      }
      const userAnswer = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: true
      })

      userAnswer.on('line', (line) => {
        if ( !this.isBootstrapping ) {
          this.questions[this.indexQuestion].answer = line
          if ( this.indexQuestion === this.questions.length - 1 ) {
            console.log('Validating data before create the component', `${this.isBootstrapping}`, (this.indexQuestion === this.questions.length - 1))
            validateComponent()
          } else {
            console.log('vou pergntar novamente')
            this.indexQuestion ++
            ask()
          }
        }
      })
    }
  }
  return {
    add,
    ask
  }
}

let Q = new Question()

Q.add([
  {
    question: "Type the component's name:",
    creatFolder: true,
  },
  {
    question:"What kind of component?",
    possibleAnswers:"Atoms: 1 , Molecules: 2, Components: 3 or Templates: 4?",
    possibleValues: [1,2,3,4],
    mapStorybookLabel: ['Atoms', 'Molecules', "Components", "Templates"],
  },
])

Q.ask()
