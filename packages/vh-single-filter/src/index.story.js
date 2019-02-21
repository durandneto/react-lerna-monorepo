import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import VHSingleFilter from '.'

const filter = JSON.parse('[{"slug":"countries","name":"Location","items":[{"child":{"slug":"cities","name":"Cities","items":[{"valueCount":1,"name":"’Ain el Mebnia", "checked": true, "value":2592677}]},"name":"Algeria","value":2589581, "checked": true},{"child":{"slug":"cities","name":"Cities","items":[{"valueCount":1,"name":"Cubal","value":3349225}]},"name":"Angola","value":3351879},{"child":{"slug":"cities","name":"Cities","items":[{"valueCount":1,"name":"Sydney","value":6619279}]},"name":"Australia","value":2077456},{"child":{"slug":"cities","name":"Cities","items":[{"valueCount":1,"name":"Brussels","value":11951173}]},"name":"Belgium","value":2802361},{"child":{"slug":"cities","name":"Cities","items":[{"valueCount":5,"name":"Caxias do Sul","value":6323388},{"valueCount":1,"name":"Águas Mornas","value":6323046},{"valueCount":1,"name":"Ajuricaba","value":6323320,"checked": true}]},"name":"Brazil","checked": true,"value":3469034},{"child":{"slug":"cities","name":"Cities","items":[{"valueCount":41,"name":"Toronto","value":8133394},{"valueCount":22,"name":"Vancouver","value":5965814},{"valueCount":7,"name":"Montréal","value":6077246},{"valueCount":5,"name":"Halifax County","value":5969424},{"valueCount":4,"name":"Kitchener","value":11951194},{"valueCount":3,"name":"Fort Langley","value":11951216},{"valueCount":2,"name":"Calgary","value":11807181},{"valueCount":2,"name":"Waterloo","value":6176824},{"valueCount":1,"name":"Kamloops","value":11951193},{"valueCount":1,"name":"Oakville","value":11951197},{"valueCount":1,"name":"Saskatoon","value":6141256},{"valueCount":1,"name":"Winnipeg","value":11951187}]},"name":"Canada","value":6251999},{"child":{"slug":"cities","name":"Cities","items":[{"valueCount":3,"name":"Copenhagen","value":2618424}]},"name":"Denmark","value":2623032},{"child":{"slug":"cities","name":"Cities","items":[{"valueCount":4,"name":"Berlin","value":11951169},{"valueCount":1,"name":"Berlin, Stadt","value":6547383}]},"name":"Germany","value":2921044},{"child":{"slug":"cities","name":"Cities","items":[{"valueCount":3,"name":"Athlone","value":11951212},{"valueCount":1,"name":"Dublin City","value":7778677}]},"name":"Ireland","value":2963597},{"child":{"slug":"cities","name":"Cities","items":[{"valueCount":3,"name":"Valletta","value":2562305},{"valueCount":2,"name":"Luqa","value":2562788}]},"name":"Malta","value":2562770},{"child":{"slug":"cities","name":"Cities","items":[{"valueCount":4,"name":"Amsterdam","value":11951166},{"valueCount":2,"name":"Gemeente Eindhoven","value":2756252}]},"name":"Netherlands","value":2750405},{"child":{"slug":"cities","name":"Cities","items":[{"valueCount":2,"name":"Markham","value":9855507}]},"name":"Papua New Guinea","value":2088628},{"child":{"slug":"cities","name":"Cities","items":[{"valueCount":6,"name":"Lisbon","value":6458923}]},"name":"Portugal","value":2264397},{"child":{"slug":"cities","name":"Cities","items":[{"valueCount":1,"name":" Moscow or Kiev - Ukraine","value":11951214}]},"name":"Russia","value":2017370},{"child":{"slug":"cities","name":"Cities","items":[{"valueCount":1,"name":"Barcelona","value":11951167}]},"name":"Spain","value":2510769},{"child":{"slug":"cities","name":"Cities","items":[{"valueCount":1,"name":"Bangkok Yai","value":1619456}]},"name":"Thailand","value":1605651},{"child":{"slug":"cities","name":"Cities","items":[{"valueCount":1,"name":"Kiev","value":11951217}]},"name":"Ukraine","value":690791},{"child":{"slug":"cities","name":"Cities","items":[{"valueCount":1,"name":"Guildford","value":11951192}]},"name":"United Kingdom","value":2635167},{"child":{"slug":"cities","name":"Cities","items":[{"valueCount":1,"name":"Boston","value":11951171}]},"name":"United States","value":6252001}]},{"slug":"experiencelevels","name":"Experience Level","items":[{"name":"Junior (0-2)","value":0},{"name":"Intermediate (3-6)","value":1},{"checked": true,"name":"Senior (+6)","value":2}]}]')
storiesOf('Molecules/SingleFilter', module)
  .add('Experience Levels', () => (
    <VHSingleFilter
      name={filter[1].name}
      items={filter[1].items}
      _onChange={action()}
      />
  ))
  .add('Country Levels', () => (
    <VHSingleFilter
      name={filter[0].name}
      items={filter[0].items}
      _onChange={action()}
      />
  ))