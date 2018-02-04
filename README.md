# Normalizers for redux-form

example:
```jsx

import { CPF } from './normalizers' 

<Field
  component="input"
  name="cpf"
  normalizer={CPF}
  type="text"
/>
```

output: `123.456.789-10`
